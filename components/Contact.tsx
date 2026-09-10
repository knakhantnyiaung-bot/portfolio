import { Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/data";

function FacebookIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

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
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Khant Nyi Aung",
    href: siteConfig.facebookUrl,
    external: true,
    color: "var(--accent-3)",
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
                        target={detail.external ? "_blank" : undefined}
                        rel={detail.external ? "noreferrer" : undefined}
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
