import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function GreenDigitalSolutionsProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm text-primary">Project Case Study</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Green Digital Solutions
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
        Green Digital Solutions is the website for my small business, built to
        present services clearly and establish a clean, professional digital
        presence.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="https://greendigitalsolutions.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Visit Live Site
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>

        <Link
          href="https://github.com/phillipggreen/green-digital-solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl border border-border bg-background/50 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
        >
          View Code
          <Github className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card/80">
        <Image
          src="/projects/gds-home.png"
          alt="Green Digital Solutions homepage screenshot"
          width={1600}
          height={1000}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Project Goal</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            The goal was to build a professional site for my own small business
            that would clearly communicate services, establish credibility, and
            serve as a strong online presence for potential clients.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Why I Built It</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            This project gave me the opportunity to build for my own business
            needs. It reflects how I think about branding, presentation,
            usability, and creating digital experiences that feel professional
            and trustworthy.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Key Work</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Service-focused homepage design",
            "Clear business messaging",
            "Professional brand presentation",
            "Responsive front-end layout",
            "Modern small-business web structure",
            "Live production deployment",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card/80 p-4 text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="mt-4 text-primary">HTML • CSS • JavaScript</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why It Matters</h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          Green Digital Solutions reflects my interest in building real websites
          that solve practical business needs. It also demonstrates that I can
          design and launch a polished web presence for an actual service-based
          brand.
        </p>
      </section>
    </main>
  );
}