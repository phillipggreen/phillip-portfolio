import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function KrmNxtModProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm text-primary">Project Case Study</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">KRM NXT MOD</h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
        KRM NXT MOD is a Shopify storefront I customized for my uncle’s business
        to help sell golf cart parts online through a more tailored and usable
        shopping experience.
      </p>

      <div className="mt-6">
        <Link
          href="https://krmnxtmod.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Visit Live Site
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card/80">
        <Image
          src="/projects/krm-home.png"
          alt="KRM NXT MOD homepage screenshot"
          width={1600}
          height={1000}
          className="h-auto w-full"
        />
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Project Goal</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            The goal was to create a better online storefront for a real
            business selling golf cart parts and custom-related products. This
            project focused on helping the business present products clearly and
            improve the shopping experience for customers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">My Role</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            I was hired by my uncle to customize the Shopify site and make it
            fit his needs more closely. That included front-end theme edits,
            layout customization, and tailoring the storefront experience beyond
            the default setup.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Key Work</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Shopify theme customization",
            "Liquid template edits",
            "Front-end layout improvements",
            "Business-specific content presentation",
            "Usability-focused storefront adjustments",
            "Real client-oriented implementation",
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
          Shopify • Liquid • HTML • CSS • JavaScript
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why It Matters</h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          This project is valuable because it reflects real client work. It
          demonstrates that I can take business needs, translate them into
          technical changes, and deliver a polished result on a production site.
        </p>
      </section>
    </main>
  );
}