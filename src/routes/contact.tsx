import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Blue Ocean Marine Logistics" },
      { name: "description", content: "Reach our team in Alexandria, Egypt. Sales, customer service, shipping agency and 24/7 emergency lines." },
      { property: "og:title", content: "Contact Blue Ocean Marine" },
      { property: "og:description", content: "Talk to a logistics expert in Alexandria, Egypt." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(2000),
});

const offices = [
  { city: "Alexandria (Head Office)", addr: "Alexandria, Egypt", phones: ["+20 3 484 1223", "+20 3 480 4219"], email: "info@blueoceanmarine.com.eg" },
  { city: "Sales Department", addr: "Alexandria, Egypt", phones: ["+20 120 011 2284", "+20 101 788 9898"], email: "sales@blueoceanmarine.com.eg" },
  { city: "Shipping Agency 24/7", addr: "Alexandria, Egypt", phones: ["+20 106 261 4443", "+20 155 212 1320"], email: "shipping@blueoceanmarine.com.eg" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const flat: Record<string, string> = {};
      r.error.issues.forEach((i) => (flat[i.path[0] as string] = i.message));
      setErrs(flat);
      return;
    }
    setErrs({});
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's move something."
        subtitle="Whether you need a quote, a port call coordinated, or simply an expert opinion — we're one message away."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-muted-foreground">We typically respond within a few business hours.</p>
            <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2" noValidate>
              {sent && <p className="sm:col-span-2 rounded-lg bg-ocean/10 px-4 py-3 text-sm text-ocean">Thanks — your message has been received.</p>}
              <Input name="name" label="Full name" error={errs.name} />
              <Input name="email" type="email" label="Email" error={errs.email} />
              <Input name="subject" label="Subject" full error={errs.subject} />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={6} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                {errs.message && <p className="mt-1 text-xs text-destructive">{errs.message}</p>}
              </div>
              <button type="submit" className="sm:col-span-2 rounded-lg gradient-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground">Send message</button>
            </form>
          </div>

          <div className="space-y-5">
            {offices.map((o) => (
              <div key={o.city} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold">{o.city}</h3>
                <div className="mt-4 space-y-2.5 text-sm">
                  <div className="flex gap-2.5 text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5 text-ocean shrink-0" />{o.addr}</div>
                  {o.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex gap-2.5 text-foreground hover:text-ocean"><Phone className="h-4 w-4 mt-0.5 text-ocean shrink-0" />{p}</a>
                  ))}
                  <a href={`mailto:${o.email}`} className="flex gap-2.5 text-foreground hover:text-ocean"><Mail className="h-4 w-4 mt-0.5 text-ocean shrink-0" />{o.email}</a>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-2xl gradient-navy p-5 text-primary-foreground">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">Operations desk available 24/7</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="aspect-[21/9] overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Blue Ocean Marine — Alexandria, Egypt"
            src="https://www.openstreetmap.org/export/embed.html?bbox=29.85%2C31.18%2C29.95%2C31.22&amp;layer=mapnik"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function Input({ name, label, type = "text", full, error }: { name: string; label: string; type?: string; full?: boolean; error?: string }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} type={type} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
