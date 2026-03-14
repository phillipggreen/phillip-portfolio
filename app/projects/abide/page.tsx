import Image from "next/image";

export default function AbideProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm text-primary">Project Case Study</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Abide</h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
        Abide is a passion project designed to help life groups stay connected
        through weekly studies, discussion, progress tracking, and shared
        prayer.
      </p>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card/80">
        <Image
          src="/projects/abide-home.png"
          alt="Abide homepage screenshot"
          width={1600}
          height={1000}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Project Goal</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            The goal of Abide was to create a modern group discipleship platform
            that supports engagement outside of weekly meetings. Rather than
            focusing only on individual reading, the platform is built around
            group participation, accountability, and shared growth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Why I Built It</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            This project came from a personal interest in building something
            meaningful that could support real Christian community. It gave me a
            chance to combine practical software development with a product idea
            I genuinely cared about.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Group creation and membership",
            "Weekly studies with passages and notes",
            "Comment-based discussion",
            "Progress tracking",
            "Prayer request support",
            "Shared group engagement flow",
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
        <p className="mt-4 text-primary">
          Next.js • TypeScript • Supabase • PostgreSQL
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Engineering Focus</h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          Abide gave me the opportunity to work through real application
          structure decisions, including authentication, relational data, and
          group-oriented workflows. The project is centered around building a
          product that feels purposeful, collaborative, and practical.
        </p>
      </section>
    </main>
  );
}