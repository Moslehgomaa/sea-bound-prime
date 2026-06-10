import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { Target, Compass, Heart, Award, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-ocean.jpg";

const SITE = "https://www.blueoceanmarine.com.eg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Blue Ocean Marine Logistics" },
      { name: "description", content: "Since 1984, Blue Ocean Marine has connected Egypt to the world with trusted maritime logistics. Learn about our story, mission, and leadership." },
      { property: "og:title", content: "About Blue Ocean Marine" },
      { property: "og:description", content: "Four decades of maritime expertise from Alexandria, Egypt." },
      { property: "og:url", content: `${SITE}/about` },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
        ],
      }),
    }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "1984", title: "Founded in Alexandria", desc: "Blue Ocean Marine begins as a specialist freight forwarder serving Egyptian exporters." },
  { year: "1995", title: "Expanded ocean services", desc: "Added FCL, LCL and break-bulk capabilities across major Egyptian ports." },
  { year: "2005", title: "Joined global networks", desc: "Became members of FIATA and WCA, extending reach to 120+ countries." },
  { year: "2015", title: "Reefer & project cargo desk", desc: "Launched specialized teams for temperature-controlled and heavy-lift moves." },
  { year: "2024", title: "Digital logistics platform", desc: "Rolled out real-time tracking, e-booking and EDI integrations for clients." },
];

const leaders = [
  { name: "Eng. Samir Armanyous", role: "CEO" },
  { name: "Mr. Andrew Tanyoss", role: "Managing Director" },
  { name: "Eng. Peter Ywakim", role: "Business Development Manager" },
  { name: "Mr. Ahmed Salama", role: "Operations Manager" },
  { name: "Mr. Michael Mansour", role: "Customer Service & Sales Support" },
  { name: "Mr. Khaled Mahmoud", role: "Accounting Manager" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Forty years moving Egypt's trade across the world."
        subtitle="A renowned shipping figure in Alexandria since 1984. Built on expertise, accountability, and relentless commitment to our clients' supply chains."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elevated">
            <img src={aboutImg} alt="Ship bow cutting through ocean" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Our story" title="From the port of Alexandria to every major trade lane." subtitle="Founded in 1984, Blue Ocean Marine helped move thousands of tons of cargo between Egypt and international seaports. Today, we're a full-service freight forwarder offering ocean freight, shipping agency, customs clearance, inland transport and digital logistics." />
            <p className="mt-5 text-muted-foreground">
              Our specialized ocean shipping teams bring a high level of expertise and focus to each shipment. We understand that transporters are major stakeholders in international commerce — and our goal is to make the logistics process as easy as possible once the sale is closed.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="bg-foam py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Mission", desc: "Deliver dependable, transparent and cost-effective logistics that empower our clients to trade with confidence." },
            { icon: Compass, title: "Vision", desc: "To be the most trusted Egyptian maritime logistics partner — recognized globally for service quality and integrity." },
            { icon: Heart, title: "Values", desc: "Trust. Ownership. Precision. Partnership. Every shipment is a promise we keep." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-navy text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading align="center" eyebrow="Our journey" title="Four decades. One purpose." />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          {timeline.map((t, i) => (
            <div key={t.year} className={`relative mb-10 md:flex ${i % 2 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 md:px-8">
                <div className="ml-12 rounded-2xl border border-border bg-card p-6 shadow-card md:ml-0">
                  <div className="text-sm font-bold text-ocean">{t.year}</div>
                  <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 top-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-ocean ring-4 ring-background md:left-1/2" />
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-foam py-20 md:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Leadership" title="Meet the team that owns every shipment." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gradient-navy text-2xl font-bold text-primary-foreground">
                  {p.name.split(" ").slice(-2).map((s) => s[0]).join("")}
                </div>
                <h3 className="mt-4 text-base font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-20 md:py-28">
        <div className="rounded-3xl gradient-navy p-10 text-primary-foreground md:p-16">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { v: 40, s: "+", l: "Years in business" },
              { v: 120, s: "+", l: "Countries served" },
              { v: 50, s: "K+", l: "Shipments handled" },
              { v: 99, s: "%", l: "On-time performance" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl font-bold md:text-5xl"><Counter to={s.v} suffix={s.s} /></div>
                <div className="mt-2 text-sm text-primary-foreground/75">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="container-x pb-24">
        <SectionHeading eyebrow="Certifications & compliance" title="Accredited. Audited. Accountable." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["FIATA Member", "IATA Accredited Agent", "WCA Network Member", "ISO 9001:2015 Certified", "IMDG Dangerous Goods Certified", "AEO Compliance Program"].map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
              <Award className="h-6 w-6 shrink-0 text-ocean" />
              <span className="font-medium">{c}</span>
              <CheckCircle2 className="ml-auto h-5 w-5 text-ocean" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
