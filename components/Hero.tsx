//imports Next.js's image component, which supports image optimization and responsive image loading.
import Image from "next/image";
//imports two arrow icons used inside the buttons
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
//imports your website configuration. @/ is a path alias, usually pointing to your project root or src directory, depending on your configuration.
import { siteConfig } from "@/lib/data";
// The react component
//Hero() defines a react component
//provides the content react should display
//export default, allows another file to import it
export default function Hero() {
  return (
    //aria-labelledby = "hero-title", gives the section an accessible name using the heading with that ID.
    //  relative, establish a positioning reference for absolutely positioned children
    //overflow-hidden, Clips anything extending outside the section
    //px-6, Adds horizontal padding
    //px-16, Adds vertical padding
    //sm:py-20, increases vertical padding at the small breakpoint and above
    //lg:py-24, increases it again at the large breakpoint and above

    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_65%)]" aria-hidden="true" ></div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {siteConfig.name}
          </p>
          <h1 id="hero-title" className="text-[clamp(2.9rem,6vw,5.75rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-foreground">
            Full-Stack <span className="text-accent">Web Developer.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            I build web applications, management systems, video management solutions, and e-commerce platforms with a focus on clean, maintainable code and practical solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 transition-transform hover:-translate-y-0.5">
              View Projects
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent">
              Contact Me
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:mx-0">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-accent/30 sm:-bottom-5 sm:-right-5" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface shadow-2xl shadow-foreground/10 sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/images/khant-nyi-aung.jpg"
              alt="Khant Nyi Aung seated at a table"
              fill
              priority
              sizes="(min-width: 640px) 460px, calc(100vw - 48px)"
              className="object-cover object-[53%_50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
