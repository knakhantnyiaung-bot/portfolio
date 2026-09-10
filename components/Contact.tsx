import { Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/data";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
    href: undefined,
    color: "var(--accent)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    color: "var(--accent-2)",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "var(--accent-4)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Have a project, opportunity, or idea? Feel free to get in touch.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <FadeIn delayMs={80}>
            <ul className="space-y-6">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `color-mix(in srgb, ${detail.color} 16%, transparent)` }}
                  >
                    <detail.icon className="h-5 w-5" style={{ color: detail.color }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-base font-medium text-foreground underline-offset-4 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-foreground">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delayMs={160}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
