import { ArrowRight, Code2, Mail, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Available for opportunities
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Full-Stack Web Developer
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          I build modern web applications, management systems, and digital
          products with a focus on clean architecture, practical solutions,
          and great user experiences.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            View My Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>

        <div className="mt-20 flex items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-4 text-muted">
          <Code2 className="h-5 w-5" aria-hidden="true" />
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <Terminal className="h-5 w-5" aria-hidden="true" />
          <span className="ml-1 font-mono text-sm">
            {"<building things that work />"}
          </span>
        </div>
      </div>
    </section>
  );
}
