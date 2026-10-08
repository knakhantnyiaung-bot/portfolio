import { siteConfig } from "@/lib/data";
import { validateContact, type ContactValues } from "@/lib/contact";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Invalid request." }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    !body ||
    typeof body !== "object" ||
    !("name" in body) ||
    !("email" in body) ||
    !("message" in body) ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string"
  ) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const values: ContactValues = {
    name: body.name.trim(),
    email: body.email.trim(),
    message: body.message.trim(),
  };
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact email is not configured.");
    return Response.json({ error: "Email is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [siteConfig.email],
        reply_to: values.email,
        subject: `Portfolio contact from ${values.name}`,
        text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact email provider rejected the request:", response.status);
      return Response.json({ error: "Message could not be sent. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact email request failed:", error);
    return Response.json({ error: "Message could not be sent. Please try again." }, { status: 502 });
  }
}
