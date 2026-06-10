import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, Globe2, Award, CheckCircle2, MapPin, Phone, Mail, Quote } from "lucide-react";
import heroShip from "@/assets/hero-ship.jpg";
import portNetwork from "@/assets/port-network.jpg";
import { services, industries, stats, testimonials, news, certifications, carrierPartners, trustBadges } from "@/lib/site-data";
import { SectionHeading, SectionLabel } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";

const SITE = "https://www.blueoceanmarine.com.eg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Ocean Marine — Global Freight Forwarding & Maritime Logistics" },
      { name: "description", content: "Ocean freight, shipping agency, customs clearance and inland haulage from Egypt to the world. Trusted maritime logistics partner since 1984." },
      { property: "og:title", content: "Blue Ocean Marine — Maritime Logistics Since 1984" },
      { property: "og:description", content: "Reliable global freight solutions tailored to move your business forward." },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
      { name: "twitter:image", content: `${SITE}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: "Blue Ocean Marine Logistics",
          legalName: "Blue Ocean Marine Logistics",
          foundingDate: "1984",
          url: SITE,
          logo: `${SITE}/og-image.jpg`,
          image: `${SITE}/og-image.jpg`,
          email: "info@blueoceanmarine.com.eg",
          telephone: "+20-106-261-4443",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Alexandria",
            addressCountry: "EG",
          },
          areaServed: { "@type": "Place", name: "Worldwide" },
          sameAs: [
            "https://www.linkedin.com/company/blue-ocean-marine",
            "https://www.facebook.com/blueoceanmarine",
          ],
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+20-120-011-2284", contactType: "sales", areaServed: "Worldwide", availableLanguage: ["en", "ar"] },
            { "@type": "ContactPoint", telephone: "+20-106-261-4443", contactType: "customer service", availableLanguage: ["en", "ar"] },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={heroShip} alt="Large container vessel navigating open ocean" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="container-x relative py-24 md:py-36 lg:py-44">
          <SectionLabel>Trusted since 1984</SectionLabel>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Moving global trade <span className="text-sky">across every ocean.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
            Reliable freight forwarding, shipping agency and end-to-end logistics — connecting Egypt to the world with the precision of a 40-year veteran.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-foam">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/10">
              Explore Services
            </Link>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/70">
            No commitment · Response within 24 hours · Real expert, not a chatbot
          </p>

          {/* Mini stats bar */}
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold tracking-tight md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-foam">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {certifications.map((c) => <span key={c}>{c}</span>)}
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Blue Ocean Marine"
              title="Four decades of maritime expertise out of Alexandria."
              subtitle="Blue Ocean Marine was established in 1984. A renowned shipping figure in Alexandria, we've helped move thousands of tons of cargo — containers, break-bulk and project shipments — between Egypt and international seaports."
            />
            <ul className="mt-8 space-y-3">
              {["Comprehensive international forwarding to exporters & importers", "Specialized ocean shipping teams with deep trade-lane focus", "Licensed customs brokers and bonded operations", "Round-the-clock operations control desk"].map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ocean" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated">
              <img src={portNetwork} alt="Global port operations at night" loading="lazy" width={1600} height={2000} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-card p-5 shadow-card md:block">
              <div className="text-3xl font-bold text-navy"><Counter to={42} suffix="+" /></div>
              <div className="text-sm text-muted-foreground">Years guiding cargo across the globe</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-foam py-20 md:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Why choose us" title="Built on trust. Run on precision." subtitle="Global reach with a dedicated local team that owns every shipment from booking to delivery." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Trusted Partner", desc: "42+ years of reputation among carriers, ports and customs authorities." },
              { icon: Globe2, title: "Global Network", desc: "Agents in 120+ countries through FIATA and WCA partnerships." },
              { icon: Clock, title: "Always On", desc: "24/7 operations and emergency desk — your cargo never sleeps." },
              { icon: Award, title: "Certified Excellence", desc: "ISO 9001, IATA, IMDG and AEO compliance you can rely on." },
            ].map((f) => (
              <div key={f.title} className="hover-lift rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-navy text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {trustBadges.map((b) => (
              <span key={b} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our Services" title="End-to-end logistics, one accountable partner." subtitle="Modular services that combine into a single, seamless supply chain." />
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ocean">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} to="/services" className="group hover-lift relative overflow-hidden rounded-2xl border border-border bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean transition group-hover:gap-3">Learn more <ArrowRight className="h-4 w-4" /></span>
              <span className="mt-3 block text-xs text-muted-foreground">Questions about {s.title}? <Link to="/contact" className="font-semibold text-ocean">Talk to a specialist →</Link></span>
            </Link>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-foam py-20 md:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Industries served" title="Sector know-how that moves your market." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div key={i.name} className="group rounded-xl border border-border bg-card p-6 transition hover:border-ocean/40 hover:shadow-card">
                <i.icon className="h-7 w-7 text-ocean" />
                <h3 className="mt-4 text-base font-semibold">{i.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={portNetwork} alt="" aria-hidden width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="container-x relative grid items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <SectionLabel>Global Network</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance md:text-5xl">One partner. Every major trade lane.</h2>
            <p className="mt-5 max-w-xl text-primary-foreground/80">
              Through FIATA, IATA and WCA partnerships, our agents cover every continent — giving you consistent service from Alexandria to anywhere your cargo needs to go.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div><div className="text-3xl font-bold"><Counter to={120} suffix="+" /></div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Countries</div></div>
              <div><div className="text-3xl font-bold"><Counter to={500} suffix="+" /></div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Trade lanes</div></div>
              <div><div className="text-3xl font-bold"><Counter to={6} /></div><div className="text-xs uppercase tracking-wider text-primary-foreground/70">Continents</div></div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold">Key gateway ports we serve</h3>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
              {["Alexandria", "Damietta", "Port Said", "Sokhna", "Suez", "Rotterdam", "Hamburg", "Antwerp", "Shanghai", "Singapore", "Jebel Ali", "New York"].map((p) => (
                <div key={p} className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-sky" />{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CARRIER PARTNERS */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading align="center" eyebrow="Carrier Partners" title="Working with the world's leading ocean carriers." subtitle="Contracted space and competitive rates across every major shipping line." />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {carrierPartners.map((p) => (
            <span key={p} className="rounded-full bg-muted px-5 py-2.5 text-sm font-semibold text-foreground/75 transition hover:bg-foam">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading align="center" eyebrow="What clients say" title="Trusted by exporters, importers and global brands." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <Quote className="h-7 w-7 text-ocean/40" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-foam py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="News & Insights" title="Perspectives from the deck." />
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-ocean">All articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <article key={n.slug} className="hover-lift rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-ocean/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-ocean">{n.category}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean">Read article <ArrowRight className="h-4 w-4" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl gradient-navy px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-ocean/30 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-5xl">Ready to move your cargo with confidence?</h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">Get a personalized quote within 24 hours from a real logistics expert — not a chatbot.</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep hover:bg-foam">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10">Talk to an expert</Link>
              <p className="text-xs text-primary-foreground/70 lg:text-right">No commitment · Response within 24 hours · Real expert, not a chatbot</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT QUICK */}
      <section className="border-t border-border bg-card">
        <div className="container-x grid gap-8 py-14 md:grid-cols-3">
          {[
            { icon: MapPin, title: "Head Office", body: "Alexandria, Egypt" },
            { icon: Phone, title: "Call us", body: "+20 120 011 2284 · +20 3 484 1223" },
            { icon: Mail, title: "Email", body: "info@blueoceanmarine.com.eg" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                <div className="mt-1 font-semibold">{c.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
