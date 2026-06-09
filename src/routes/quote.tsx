import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Blue Ocean Marine Logistics" },
      { name: "description", content: "Get a personalized freight forwarding quote within 24 hours. Ocean, customs, inland, and project cargo solutions." },
      { property: "og:title", content: "Request a Quote" },
      { property: "og:description", content: "Personalized logistics quotes within 24 hours." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  service: z.string().min(1),
  origin: z.string().trim().min(2).max(120),
  destination: z.string().trim().min(2).max(120),
  cargo: z.string().trim().min(2).max(500),
  incoterm: z.string().optional(),
  details: z.string().trim().max(2000).optional(),
});

function QuotePage() {
  const [sent, setSent] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const flat: Record<string, string> = {};
      r.error.issues.forEach((i) => { flat[i.path[0] as string] = i.message; });
      setErrs(flat);
      return;
    }
    setErrs({});
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="A real quote, from a real expert — within 24 hours."
        subtitle="Tell us about your shipment. We'll match you with the right specialist and respond with a tailored solution."
      />

      <section className="container-x py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-ocean" />
                <h2 className="mt-5 text-2xl font-bold">Request received</h2>
                <p className="mt-2 max-w-md text-muted-foreground">Thank you — a specialist will reach out within 24 business hours with your personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                <Field label="Full name" name="name" error={errs.name} required />
                <Field label="Company" name="company" error={errs.company} />
                <Field label="Email" name="email" type="email" error={errs.email} required />
                <Field label="Phone" name="phone" error={errs.phone} />
                <div className="sm:col-span-2">
                  <Label>Service required *</Label>
                  <select name="service" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm" defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    {["Ocean Freight (FCL)", "Ocean Freight (LCL)", "Shipping Agency", "Customs Clearance", "Inland Haulage", "Project Cargo", "Reefer / Cold Chain", "Warehousing & 3PL", "Other"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  {errs.service && <p className="mt-1 text-xs text-destructive">{errs.service}</p>}
                </div>
                <Field label="Origin (port / city / country)" name="origin" error={errs.origin} required />
                <Field label="Destination (port / city / country)" name="destination" error={errs.destination} required />
                <Field label="Incoterm (optional)" name="incoterm" placeholder="EXW, FOB, CIF…" error={errs.incoterm} />
                <Field label="Commodity / cargo" name="cargo" error={errs.cargo} required />
                <div className="sm:col-span-2">
                  <Label>Additional details</Label>
                  <textarea name="details" rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm" placeholder="Weight, volume, packaging, target dates, special handling…" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full rounded-lg gradient-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                    Submit quote request
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-foam p-7">
              <h3 className="font-display text-lg font-bold">What happens next?</h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                {["We acknowledge your request immediately.", "A specialist reviews your shipment within 4 hours.", "You receive a tailored quote within 24 business hours.", "We book and execute end-to-end."].map((t, i) => (
                  <li key={t} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean text-xs font-bold text-primary-foreground">{i + 1}</span>{t}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl gradient-navy p-7 text-primary-foreground">
              <h3 className="font-display text-lg font-bold">Need it urgently?</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">Our 24/7 operations desk is one call away.</p>
              <a href="tel:+201062614443" className="mt-4 inline-block font-semibold underline">+20 106 261 4443</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function Field({ label, name, type = "text", required, error, placeholder }: { label: string; name: string; type?: string; required?: boolean; error?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}{required && " *"}</Label>
      <input name={name} type={type} placeholder={placeholder} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
