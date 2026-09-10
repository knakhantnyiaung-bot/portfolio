import { Database, Layers, Server, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";
import { aboutTechnologies } from "@/lib/data";

const focusAreas = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Building complete applications across the frontend and backend.",
  },
  {
    icon: Server,
    title: "Backend API Development",
    description: "Designing and implementing reliable, well-structured APIs.",
  },
  {
    icon: Database,
    title: "Database-Driven Applications",
    description: "Architecting data models for scalable, maintainable systems.",
  },
  {
    icon: ShieldCheck,
    title: "Software Architecture & Problem Solving",
    description: "Applying modern web technologies to solve real-world problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <FadeIn delayMs={80} className="lg:col-span-3">
            <p className="text-lg font-medium text-foreground">
              Khant Nyi Aung
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a Full-Stack Web Developer with experience building web
              applications, management systems, video management solutions,
              and e-commerce platforms. I focus on writing clean, maintainable
              code and building software architectures that solve real
              problems.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface">
                    <area.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delayMs={160} className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <h3 className="text-sm font-semibold text-foreground">
                Technologies
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {aboutTechnologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
