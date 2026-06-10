import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, AlertCircle, X } from "lucide-react";

const SITE = "https://www.blueoceanmarine.com.eg";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Blue Ocean Marine Logistics" },
      { name: "description", content: "Get a personalized freight forwarding quote within 24 hours. Ocean, customs, inland, and project cargo solutions." },
      { property: "og:title", content: "Request a Quote" },
      { property: "og:description", content: "Personalized logistics quotes within 24 hours." },
      { property: "og:url", content: `${SITE}/quote` },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/quote` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Request a Quote", item: `${SITE}/quote` },
        ],
      }),
    }],
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errs, setErrs] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const flat: Record<string, string> = {};
      r.error.issues.forEach((i) => { flat[i.path[0] as string] = i.message; });
      setErrs(flat);
      return;
    }
    setErrs({});
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 900));
      setIsSuccess(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => { setIsSuccess(false); setErrs({}); setErrorMessage(null); };

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
            {isSuccess ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-600" />
                <h2 className="mt-5 text-2xl font-bold">Request received</h2>
                <p className="mt-2 max-w-md text-muted-foreground">Thank you — a specialist will reach out within 24 business hours with your personalized quote.</p>
                <button onClick={reset} className="mt-6 rounded-md border border-input px-5 py-2.5 text-sm font-semibold">Send another request</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                {errorMessage && (
                  <div className="sm:col-span-2 flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="flex-1">{errorMessage}</span>
                    <button type="button" onClick={() => setErrorMessage(null)} aria-label="Dismiss error"><X className="h-4 w-4" /></button>
                  </div>
                )}
                <Field label="Full name" name="name" autoComplete="name" error={errs.name} required />
                <Field label="Company" name="company" autoComplete="organization" error={errs.company} />
                <Field label="Email" name="email" type="email" autoComplete="email" inputMode="email" error={errs.email} required />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" error={errs.phone} />
                <div className="sm:col-span-2">
                  <Label htmlFor="service">Service required *</Label>
                  <select id="service" name="service" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm" defaultValue="">
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
                  <Label htmlFor="details">Additional details</Label>
                  <textarea id="details" name="details" rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm" placeholder="Weight, volume, packaging, target dates, special handling…" />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg gradient-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
                  >
                    {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isSubmitting ? "Sending..." : "Submit quote request"}
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">No commitment · Response within 24 hours · Real expert, not a chatbot</p>
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

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function Field({
  label, name, type = "text", required, error, placeholder, autoComplete, inputMode,
}: {
  label: string; name: string; type?: string; required?: boolean; error?: string;
  placeholder?: string; autoComplete?: string; inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search" | "none";
}) {
  const id = `f-${name}`;
  return (
    <div>
      <Label htmlFor={id}>{label}{required && " *"}</Label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
