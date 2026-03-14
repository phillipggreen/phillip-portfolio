import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
  LaptopMinimal,
  Workflow,
} from "lucide-react";

const featuredProjects = [
  {
    title: "Abide",
    description:
      "A Bible study platform focused on groups, progress tracking, and shared study experiences.",
    stack: "Next.js • TypeScript • Supabase",
  },
  {
    title: "CyberDev VS Code Theme",
    description:
      "A custom developer theme project that reflects my interest in design systems, UI polish, and developer experience.",
    stack: "VS Code Extension • JSON • Theming",
  },
  {
    title: "KRM NXT MOD",
    description:
      "A Shopify storefront customized through Liquid theme edits and front-end code to deliver a tailored design and functionality for a real client.",
    stack: "Shopify • Liquid • HTML • CSS • JavaScript",
  },
];

const experienceHighlights = [
  "Continuous Improvement Engineer III with a background in quality, systems thinking, and process optimization.",
  "Experienced in root cause analysis, cross-functional problem solving, and improving operational workflows.",
  "Transitioning into software and web development by applying engineering discipline to modern digital solutions.",
];

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "Shopify / Liquid",
  "Node.js",
  "GitHub",
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute left-[12%] top-24 h-[260px] w-[260px] rounded-full bg-cyan-400/8 blur-3xl" />
          <div className="absolute right-[10%] top-28 h-[240px] w-[240px] rounded-full bg-teal-300/8 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="inline-flex w-fit items-center rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            Engineer • Systems Thinker • Continuous Improvement Leader
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Phillip Green
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I build digital solutions with an engineer’s mindset—solving
                problems, improving systems, and creating practical user
                experiences. My background in quality engineering and continuous
                improvement shapes how I approach development: thoughtfully,
                efficiently, and with a focus on real-world impact.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/Phillip_Green_Resume.pdf"
                  target="_blank"
                  className="rounded-2xl border border-border bg-card px-6 py-3 font-medium transition hover:border-primary hover:text-primary"
                >
                  Download Resume (PDF)
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-border bg-card px-6 py-3 font-medium transition hover:border-primary hover:text-primary"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <p className="text-sm font-medium text-primary">
                Current Snapshot
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <LaptopMinimal className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h2 className="font-semibold">Modern Web Development</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Building portfolio-grade applications with Next.js,
                      TypeScript, Tailwind CSS, and Supabase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Workflow className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h2 className="font-semibold">Engineering Mindset</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Bringing process improvement, structured problem solving,
                      and systems thinking into digital and software work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h2 className="font-semibold">Computer Science Growth</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Continuing to strengthen my technical foundation through
                      projects, learning, and applied development work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm text-primary">Tech Stack</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Tools I work with
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-primary">Featured Projects</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Selected work
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm text-muted-foreground transition hover:text-foreground md:inline-flex"
          >
            See all projects
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.75rem] border border-border bg-card/80 p-6 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <FolderGit2 className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-5 text-sm text-primary">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm text-primary">Professional Background</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Built on engineering, evolving into digital solutions
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              My career began in manufacturing and quality-focused roles, where
              I learned how to improve systems, reduce inefficiencies, solve
              recurring problems, and support better outcomes across teams. That
              same mindset now drives how I build modern digital experiences and
              technical solutions.
            </p>

            <Link
              href="/experience"
              className="mt-6 inline-flex items-center text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Explore experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-border bg-card/80 p-8">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-primary" />
              <p className="font-semibold">What I bring</p>
            </div>

            <div className="mt-6 space-y-4">
              {experienceHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-background/40 p-4 text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-border bg-card/80 p-8 md:p-10">
          <p className="text-sm text-primary">Next Step</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Building toward more opportunities in tech and engineering
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I’m continuing to grow my skills, build projects, and create work
            that reflects both my technical development and my real-world
            engineering background.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Get In Touch
            </Link>

            <Link
              href="/resume"
              className="rounded-2xl border border-border bg-background/60 px-6 py-3 font-medium transition hover:border-primary hover:text-primary"
            >
              Review Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}