import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";
import { educationEntries } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Education &amp; Academic Achievement
          </h2>
        </FadeIn>

        <ol className="mt-14 space-y-10 border-l border-border pl-8 sm:pl-10">
          {educationEntries.map((entry, index) => {
            const color = [
              "var(--accent)",
              "var(--accent-2)",
              "var(--accent-3)",
              "var(--accent-4)",
            ][index % 4];
            return (
            <li key={entry.degree} className="relative">
              <FadeIn delayMs={index * 100}>
                <span
                  className="absolute top-1 -left-[calc(2rem+0.5rem)] flex h-9 w-9 items-center justify-center rounded-full bg-background ring-4 ring-surface sm:-left-[calc(2.5rem+0.5rem)]"
                  style={{ color }}
                  aria-hidden="true"
                >
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="rounded-2xl border border-border bg-background p-6 sm:p-7">
                  {entry.period && (
                    <p className="mb-2 text-sm font-medium" style={{ color }}>
                      {entry.period}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.degree}
                  </h3>
                  <p className="mt-1.5 text-base text-muted">
                    {entry.institution}
                  </p>
                </div>
              </FadeIn>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
