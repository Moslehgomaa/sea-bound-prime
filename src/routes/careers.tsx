import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { Briefcase, MapPin, ArrowRight, Heart, GraduationCap, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Blue Ocean Marine Logistics" },
      { name: "description", content: "Build your career in maritime logistics with a 40-year leader. Open roles in operations, sales, customs and digital." },
      { property: "og:title", content: "Careers at Blue Ocean Marine" },
      { property: "og:description", content: "Join a 40-year leader in maritime logistics." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Senior Ocean Freight Operations Specialist", location: "Alexandria, EG", type: "Full-time", team: "Operations" },
  { title: "Customs Clearance Officer", location: "Alexandria, EG", type: "Full-time", team: "Customs" },
  { title: "Business Development Executive", location: "Cairo, EG", type: "Full-time", team: "Sales" },
  { title: "Shipping Agency Coordinator", location: "Damietta, EG", type: "Full-time", team: "Agency" },
  { title: "Digital Logistics Product Manager", location: "Remote / Alexandria", type: "Full-time", team: "Digital" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career where ships meet horizons."
        subtitle="Join a 40-year leader in Egyptian maritime logistics. We hire curious people, train them well, and trust them to own the work."
      />

      <section className="container-x py-20 md:py-28">
        <SectionHeading align="center" eyebrow="Why work with us" title="A career with deep roots and global reach." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: TrendingUp, t: "Real growth", d: "Clear progression paths from coordinator to leadership across operations, sales, and digital." },
            { icon: GraduationCap, t: "Continuous learning", d: "FIATA, IATA, IMDG and AEO certifications fully sponsored." },
            { icon: Heart, t: "People-first culture", d: "Long-tenure team, flexible work, and a leadership that genuinely listens." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-navy text-primary-foreground"><b.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foam py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Open positions" title="We're hiring." />
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
            {openings.map((o) => (
              <div key={o.title} className="flex flex-wrap items-center justify-between gap-4 p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean"><Briefcase className="h-3.5 w-3.5" />{o.team}</div>
                  <h3 className="mt-1 text-lg font-semibold">{o.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{o.location}</span>
                    <span>{o.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold transition hover:border-ocean hover:text-ocean">
                  Apply <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Don't see your role? Send your CV to{" "}
            <a href="mailto:recruitment@blueoceanmarine.com.eg" className="font-semibold text-ocean">recruitment@blueoceanmarine.com.eg</a>.
          </p>
        </div>
      </section>
    </>
  );
}
