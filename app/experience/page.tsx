const careerPath = [
  {
    title: "Assembler",
    company: "Hyster-Yale Material Handling",
    years: "2014 – 2016",
    summary:
      "Started in manufacturing operations, building a foundation in production standards, process discipline, and hands-on problem solving.",
  },
  {
    title: "SPED Technician – Repair",
    company: "Hyster-Yale Material Handling",
    years: "2016 – 2021",
    summary:
      "Troubleshot and repaired defects on specialized or non-standard units, supporting quality resolution and improving product reliability.",
  },
  {
    title: "Quality Inspector",
    company: "Hyster-Yale Material Handling",
    years: "2021 – 2023",
    summary:
      "Performed inspections, supported containment actions, and reinforced quality standards across manufacturing operations.",
  },
  {
    title: "Quality Engineer",
    company: "Hyster-Yale Material Handling",
    years: "2023",
    summary:
      "Worked on root cause analysis, corrective actions, and quality improvement initiatives within manufacturing systems.",
  },
  {
    title: "Process Quality Engineer",
    company: "KION North America",
    years: "2023 – 2025",
    summary:
      "Focused on improving manufacturing quality systems, process control, and investigation of recurring quality issues.",
  },
  {
    title: "Continuous Improvement Engineer III",
    company: "Hyster-Yale Material Handling",
    years: "2025 – Present",
    summary:
      "Leading improvement initiatives focused on operational efficiency, systems thinking, and long-term quality performance.",
  },
];

const strengths = [
  "Systems thinking shaped by real-world manufacturing and quality experience.",
  "Strong background in root cause analysis, process improvement, and cross-functional problem solving.",
  "Experience working in environments where consistency, accuracy, and accountability matter.",
  "A practical engineering mindset that now carries into software development and technical projects.",
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="text-sm text-primary">Experience</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Built through real-world engineering progression
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          My professional background is rooted in manufacturing, quality, and
          continuous improvement. Over time, I progressed from hands-on
          production work into engineering and process improvement leadership,
          building the kind of systems mindset that now also shapes how I
          approach software development.
        </p>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm text-muted-foreground">
            Career progression through manufacturing, quality engineering, and continuous improvement leadership.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Career Path</h2>
          <div className="mt-8 space-y-5">
            {careerPath.map((role, index) => (
              <article
                key={role.title}
                className="rounded-[1.5rem] border border-border bg-card/80 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{role.title}</h3>

                  <p className="text-sm text-primary">
                    {role.company} • {role.years}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {role.summary}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-card/80 p-8">
            <p className="text-sm font-medium text-primary">Professional Strengths</p>
            <div className="mt-6 space-y-4">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-2xl border border-border bg-background/40 p-4 text-muted-foreground"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card/80 p-8">
            <p className="text-sm font-medium text-primary">Military Service</p>
            <h2 className="mt-3 text-xl font-semibold">
              U.S. Army Veteran
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              I also served on Active Duty in the U.S. Army as a 68W Combat
              Medic. That experience strengthened my discipline, adaptability,
              and ability to operate in high-responsibility environments—traits
              that continue to influence how I work, lead, and solve problems.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-card/80 p-8">
            <p className="text-sm font-medium text-primary">Why it matters in software</p>
            <p className="mt-4 leading-7 text-muted-foreground">
              My path into software is not separate from my engineering career—it
              builds on it. The same principles that drive quality and continuous
              improvement work also drive strong software development: identify
              problems clearly, improve systems thoughtfully, and build solutions
              that are reliable in the real world.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}