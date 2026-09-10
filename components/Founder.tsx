import { ArrowUpRight, Rocket } from "lucide-react";
import FadeIn from "./FadeIn";
import { siteConfig } from "@/lib/data";

export default function Founder() {
  return (
    <section id="founder" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-start gap-10 rounded-3xl bg-foreground px-8 py-14 text-background sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10">
                <Rocket className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Founder of Technocrat
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/70 sm:text-lg">
                Founder of Technocrat, a technology-focused initiative /
                community established to explore software development,
                technology, and digital solutions.
              </p>
            </div>

            <a
              href={siteConfig.technocratUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Visit Technocrat
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
