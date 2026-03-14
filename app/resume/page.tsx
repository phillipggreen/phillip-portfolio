import Link from "next/link";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Node.js",
  "Supabase",
  "Shopify (Liquid)",
  "Git",
  "GitHub",
  "Power Automate",
  "SharePoint",
];

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="text-sm text-primary">Resume</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Professional Summary
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Engineer with a background in manufacturing quality systems and
          continuous improvement engineering. Experienced in building automation
          tools, web applications, and digital workflows that improve operational
          efficiency. Skilled in modern web development and process automation
          with a strong systems-thinking mindset.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/Phillip_Green_Resume.pdf"
            target="_blank"
            className="inline-flex items-center rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            View / Download Resume
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Technical Skills</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-border bg-card/80 p-8">
          <p className="text-sm text-primary">Education</p>
          <h2 className="mt-3 text-2xl font-semibold">
            B.S. Applied Computer Science
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            University of Southern Mississippi
          </p>
          <p className="mt-4 text-muted-foreground">
            Expected Graduation: May 2026
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-card/80 p-8">
          <p className="text-sm text-primary">Military Service</p>
          <h2 className="mt-3 text-2xl font-semibold">U.S. Army Veteran</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Active Duty • 68W Combat Medic
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Served on Active Duty as a Combat Medic, gaining experience in
            discipline, leadership, responsibility, and operating in
            high-pressure environments.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-sm text-primary">Experience Snapshot</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Engineering background with a systems mindset
        </h2>

        <div className="mt-8 grid gap-6">
          <article className="rounded-[1.5rem] border border-border bg-card/80 p-6">
            <h3 className="text-xl font-semibold">
              Continuous Improvement Engineer III
            </h3>
            <p className="mt-1 text-sm text-primary">
              Hyster-Yale Materials Handling • 2025 – Present
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Leading improvement initiatives focused on operational efficiency,
              systems thinking, quality performance, and long-term process
              improvement.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-border bg-card/80 p-6">
            <h3 className="text-xl font-semibold">Process Quality Engineer</h3>
            <p className="mt-1 text-sm text-primary">
              KION North America • 2023 – 2025
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Built automation workflows with Power Automate and SharePoint,
              supported root cause analysis, and improved reporting and process
              visibility.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-border bg-card/80 p-6">
            <h3 className="text-xl font-semibold">
              Quality Engineer → Quality Inspector → SPED Technician (Repair) →
              Assembler
            </h3>
            <p className="mt-1 text-sm text-primary">
              Hyster-Yale Materials Handling • 2014 – 2023
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Career progression through manufacturing, repair, inspection, and
              engineering roles that built a strong foundation in quality,
              process discipline, troubleshooting, and problem solving.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}