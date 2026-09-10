import FadeIn from "./FadeIn";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Technologies I Work With
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const color = [
              "var(--accent)",
              "var(--accent-2)",
              "var(--accent-3)",
              "var(--accent-4)",
            ][index % 4];
            return (
            <FadeIn key={category.title} delayMs={index * 80}>
              <div className="h-full rounded-3xl border border-border bg-background p-7">
                <h3
                  className="text-sm font-semibold tracking-wide uppercase"
                  style={{ color }}
                >
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
