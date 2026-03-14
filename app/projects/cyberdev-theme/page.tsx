import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function CyberDevThemeProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm text-primary">Project Case Study</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        CyberDev VS Code Theme
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
        CyberDev is a custom Visual Studio Code theme I built to improve my own
        development experience with a modern cyber-inspired design and clearer
        visual contrast.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=PhillipGreen.cyberdev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          View Marketplace Listing
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>

        <Link
          href="https://github.com/phillipggreen/cyberdev-vscode"
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
          src="/projects/cyberdev.png"
          alt="CyberDev theme screenshot"
          width={1600}
          height={1000}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Project Goal</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            The goal was simple: build a better theme for my own use inside VS
            Code. I wanted something that felt modern, readable, and visually
            distinct without sacrificing clarity during long coding sessions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Why I Built It</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            CyberDev started as a personal improvement project. It gave me a
            chance to explore design decisions, token color balancing, and the
            developer experience side of tooling in a way that felt both useful
            and creative.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Key Focus Areas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Theme color design",
            "Readable syntax highlighting",
            "Developer-focused contrast choices",
            "VS Code theme configuration",
            "Personal UX improvement",
            "Published extension workflow",
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
        <p className="mt-4 text-primary">VS Code Extension • JSON • Theming</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why It Matters</h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          Even though it’s a smaller project, CyberDev reflects attention to
          detail, visual decision-making, and an interest in improving the tools
          I use every day as a developer.
        </p>
      </section>
    </main>
  );
}