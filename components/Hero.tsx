import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full opacity-30 blur-3xl sm:h-96 sm:w-96"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-16 -right-24 h-80 w-80 rounded-full opacity-30 blur-3xl sm:h-96 sm:w-96"
        style={{ background: "var(--accent-2)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent-3)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <div
          className="mb-6 h-[88px] w-[88px] rounded-full p-[3px] shadow-sm sm:h-[100px] sm:w-[100px]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-background">
            <Image
              src="/images/khant-nyi-aung.jpg"
              alt="Portrait of Khant Nyi Aung"
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>

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
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: "var(--gradient-brand)" }}
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
      </div>
    </section>
  );
}
