import Link from "next/link";
import { ArrowUpRight, FolderGit2, Github } from "lucide-react";

const projects = [
  {
    title: "Abide",
    description:
      "A Bible study platform designed to help life groups stay connected through weekly studies, discussion, progress tracking, and shared prayer.",
    stack: "Next.js • TypeScript • Supabase",
    codeUrl: "",
    liveUrl: "",
    caseStudyUrl: "/projects/abide",
  },
  {
    title: "CyberDev VS Code Theme",
    description:
      "A custom Visual Studio Code theme built to improve my personal development environment with a modern cyber-inspired aesthetic.",
    stack: "VS Code Extension • JSON • Theme Design",
    codeUrl: "https://github.com/phillipggreen/cyberdev-vscode",
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=PhillipGreen.cyberdev",
    caseStudyUrl: "/projects/cyberdev-theme",
  },
  {
    title: "KRM NXT MOD",
    description:
      "A Shopify storefront customized for my uncle’s business to support online sales of golf cart parts and create a more tailored shopping experience.",
    stack: "Shopify • Liquid • HTML • CSS • JavaScript",
    liveUrl: "https://krmnxtmod.com",
    codeUrl: "",
    caseStudyUrl: "/projects/krm-nxt-mod",
  },
  {
    title: "Green Digital Solutions Website",
    description:
      "A website for my small business focused on presenting services clearly and establishing a professional digital presence.",
    stack: "HTML • CSS • JavaScript",
    codeUrl: "https://github.com/phillipggreen/green-digital-solutions",
    liveUrl: "https://greendigitalsolutions.dev/",
    caseStudyUrl: "/projects/green-digital-solutions",
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
          development, developer tools, real-world client work, and practical
          software solutions.
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
              <Link
                href={project.caseStudyUrl}
                className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-border bg-background/50 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
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