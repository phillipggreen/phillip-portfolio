import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Abide",
    description:
      "A Bible study platform designed for group study, progress tracking, and shared learning experiences.",
    stack: "Next.js • TypeScript • Supabase",
  },
  {
    title: "CyberDev VS Code Theme",
    description:
      "A custom Visual Studio Code theme focused on developer ergonomics, contrast, and a modern cyber aesthetic.",
    stack: "VS Code Extension • JSON • Theme Design",
  },
  {
    title: "Terminal Thoughts Blog",
    description:
      "A developer-focused blog where I write about software development, engineering mindset, and learning progress.",
    stack: "Jekyll • Markdown • GitHub Pages",
  },
  {
    title: "Green Digital Solutions Website",
    description:
      "A small business website project focused on helping local businesses establish a digital presence.",
    stack: "HTML • CSS • JavaScript",
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
          development, developer tools, and building practical software.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.75rem] border border-border bg-card/80 p-7 transition hover:-translate-y-1 hover:border-primary/60"
          >
            <FolderGit2 className="h-6 w-6 text-primary" />

            <h2 className="mt-5 text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-3 text-muted-foreground">
              {project.description}
            </p>

            <p className="mt-5 text-sm text-primary">
              {project.stack}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}