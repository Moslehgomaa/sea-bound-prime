import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { services } from "@/lib/site-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SITE = "https://www.blueoceanmarine.com.eg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ocean Freight, Customs, Inland & More | Blue Ocean Marine" },
      { name: "description", content: "Ocean freight, shipping agency, customs clearance, inland haulage, project cargo, reefer, warehousing and digital logistics solutions." },
      { property: "og:title", content: "Maritime Logistics Services" },
      { property: "og:description", content: "End-to-end freight forwarding and supply-chain solutions from Egypt." },
      { property: "og:url", content: `${SITE}/services` },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/services` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        ],
      }),
    }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="A complete toolkit for global trade."
        subtitle="From the first booking to the final mile, our specialist teams design and execute logistics solutions tailored to your cargo, your lanes and your industry."
      />

      <section className="container-x py-20 md:py-28">
        <div className="space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <div key={s.slug} id={s.slug} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl gradient-navy p-10 text-primary-foreground shadow-elevated">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)" }} />
                <div className="relative flex h-full flex-col">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <div className="mt-auto">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">0{i + 1}</div>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h3>
                    <p className="mt-2 text-primary-foreground/80">{s.short}</p>
                  </div>
                </div>
              </div>
              <div>
                <SectionHeading eyebrow={`Service · ${s.title}`} title={s.title} subtitle={s.desc} />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ocean" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-navy px-5 py-3 text-sm font-semibold text-primary-foreground">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-foam py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <SectionHeading align="center" eyebrow="FAQ" title="Common questions, clear answers." />
          <div className="mt-12 space-y-3">
            {[
              { q: "Which Egyptian ports do you operate in?", a: "We act as shipping agent and freight forwarder at all major Egyptian ports — Alexandria, Damietta, Port Said, Sokhna and Suez." },
              { q: "Can you handle dangerous goods?", a: "Yes. Our team is IMDG-certified and routinely manages hazardous shipments under full regulatory compliance." },
              { q: "Do you offer door-to-door service?", a: "Absolutely. We combine ocean freight, customs clearance and inland haulage into a single, accountable door-to-door movement." },
              { q: "How fast can I get a quote?", a: "Most quotes are returned within 24 hours from a real logistics expert. Submit the quote form to get started." },
              { q: "Do you support real-time tracking?", a: "Yes — our digital portal provides live shipment visibility, milestone updates and document downloads." },
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-ocean transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
