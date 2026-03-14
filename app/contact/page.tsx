import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    value: "phillip.g.green@outlook.com",
    href: "mailto:phillip.g.green@outlook.com",
    icon: Mail,
    description: "Best for opportunities, collaboration, or direct questions.",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/phillipggreen",
    href: "https://www.linkedin.com/in/phillipggreen/",
    icon: Linkedin,
    description: "Connect with me professionally and view my career background.",
  },
  {
    title: "GitHub",
    value: "github.com/phillipggreen",
    href: "https://github.com/phillipggreen",
    icon: Github,
    description: "Explore my code, projects, and ongoing development work.",
  },
  {
    title: "Resume",
    value: "Download PDF",
    href: "/Phillip_Green_Resume.pdf",
    icon: FileText,
    description: "View or download my current resume directly.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="text-sm text-primary">Contact</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s connect
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          I’m open to conversations about engineering, technical work, web
          development, automation, and future opportunities. The best way to
          reach me is by email, but you can also connect with me through
          LinkedIn or GitHub.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {contactMethods.map((method) => {
          const Icon = method.icon;

          return (
            <article
              key={method.title}
              className="rounded-[1.75rem] border border-border bg-card/80 p-7 transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-border bg-background/50 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  Contact Method
                </span>
              </div>

              <h2 className="mt-5 text-xl font-semibold">{method.title}</h2>
              <p className="mt-2 break-all text-sm text-primary">{method.value}</p>
              <p className="mt-4 leading-7 text-muted-foreground">
                {method.description}
              </p>

              <Link
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-6 inline-flex rounded-xl border border-border bg-background/50 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
              >
                Open
              </Link>
            </article>
          );
        })}
      </section>

      <section className="mt-16 rounded-[2rem] border border-border bg-card/80 p-8 md:p-10">
        <p className="text-sm text-primary">Quick Note</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          What I’m most interested in
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
          I’m especially interested in opportunities that blend engineering,
          systems thinking, process improvement, automation, and modern web
          development. I enjoy solving real problems and building practical
          solutions that create measurable value.
        </p>
      </section>
    </main>
  );
}