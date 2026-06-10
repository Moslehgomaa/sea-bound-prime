import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { industries } from "@/lib/site-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Blue Ocean Marine Logistics" },
      { name: "description", content: "Specialized maritime logistics for manufacturing, agriculture, pharma, automotive, retail, technology, construction, and energy sectors." },
      { property: "og:title", content: "Industries We Serve" },
      { property: "og:description", content: "Sector know-how that moves your market." },
      { property: "og:url", content: "https://www.blueoceanmarine.com.eg/industries" },
    ],
    links: [{ rel: "canonical", href: "https://www.blueoceanmarine.com.eg/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries served"
        title="Logistics shaped to the sectors we serve."
        subtitle="Each industry has unique cargo profiles, compliance requirements and timing. Our specialist teams understand them — so your supply chain runs as it should."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {industries.map((i) => (
            <div key={i.name} className="hover-lift rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-navy text-primary-foreground">
                  <i.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{i.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {["Dedicated trade lanes", "Compliance & docs", "Specialist equipment", "Industry SLAs"].map((b) => (
                      <li key={b} className="flex gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-3xl gradient-navy p-10 text-primary-foreground md:p-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Don't see your industry?</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/80">We support virtually every sector that moves goods. Talk to our experts about your specific needs.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-deep">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
