import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href={siteConfig.technocratUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Technocrat
          </a>
        </div>
      </div>
    </footer>
  );
}
