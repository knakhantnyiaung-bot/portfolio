import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";
import FadeIn from "./FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A selection of software projects I have successfully built and
            developed.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const color = [
              "var(--accent)",
              "var(--accent-2)",
              "var(--accent-3)",
              "var(--accent-4)",
            ][index % 4];
            return (
            <FadeIn key={project.name} delayMs={index * 100} className="h-full">
              <article
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-shadow hover:shadow-lg"
                style={{ borderTop: `3px solid ${color}` }}
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.name} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <Layers
                      className="h-10 w-10 text-muted transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color }}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.projectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
                      style={{ borderColor: color, color }}
                    >
                      View Project
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      title="Project link not available"
                      className="mt-7 inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted opacity-60"
                    >
                      View Project
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </article>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
