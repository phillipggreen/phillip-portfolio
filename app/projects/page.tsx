import Link from "next/link";
import { ArrowUpRight, FolderGit2, Github } from "lucide-react";

const projects = [
  {
    title: "Abide",
    description:
      "A Bible study platform designed for group study, progress tracking, and shared learning experiences.",
    stack: "Next.js • TypeScript • Supabase",
    codeUrl: "",
    liveUrl: "",
  },
  {
    title: "CyberDev VS Code Theme",
    description:
      "A custom Visual Studio Code theme focused on developer ergonomics, contrast, and a modern cyber aesthetic.",
    stack: "VS Code Extension • JSON • Theme Design",
    codeUrl: "https://github.com/phillipggreen/cyberdev-vscode",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=PhillipGreen.cyberdev",
  },
  {
    title: "KRM NXT MOD",
    description:
      "A Shopify storefront customized through Liquid theme edits and front-end code to deliver a tailored design and functionality for a real client.",
    stack: "Shopify • Liquid • HTML • CSS • JavaScript",
    liveUrl: "https://krmnxtmod.com",
    codeUrl: "",
  },
  {
    title: "Green Digital Solutions Website",
    description:
      "A small business website project focused on helping local businesses establish a digital presence with a clean and modern web presence.",
    stack: "HTML • CSS • JavaScript",
    codeUrl: "https://github.com/phillipggreen/green-digital-solutions",
    liveUrl: "https://greendigitalsolutions.dev/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm text-primary">Projects</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Things I’ve built
        </h1>

        <p className="mt-4 text-muted-foreground">
          A selection of projects that reflect my interest in modern web
          development, developer tools, and building practical software for
          real-world use.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[1.75rem] border border-border bg-card/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-black/20"
          >
            <div className="flex items-start justify-between gap-4">
              <FolderGit2 className="h-6 w-6 text-primary" />
              <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                Featured Project
              </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold">{project.title}</h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              {project.description}
            </p>

            <p className="mt-5 text-sm font-medium text-primary">
              {project.stack}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Visit Site
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground">
                  Live Site Coming Soon
                </span>
              )}

              {project.codeUrl ? (
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-border bg-background/50 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                >
                  View Code
                  <Github className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground">
                  Code Private / Not Available
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}