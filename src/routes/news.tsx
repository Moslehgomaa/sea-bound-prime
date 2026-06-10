import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { news } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import containers from "@/assets/containers.jpg";
import warehouse from "@/assets/warehouse.jpg";
import portNetwork from "@/assets/port-network.jpg";

const covers = [containers, warehouse, portNetwork];

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — Blue Ocean Marine Logistics" },
      { name: "description", content: "Industry insights, shipping guides and updates from Blue Ocean Marine Logistics — Egypt's trusted maritime logistics partner." },
      { property: "og:title", content: "News & Insights" },
      { property: "og:description", content: "Perspectives from the deck — maritime trends, compliance, and logistics know-how." },
      { property: "og:url", content: "https://www.blueoceanmarine.com.eg/news" },
    ],
    links: [{ rel: "canonical", href: "https://www.blueoceanmarine.com.eg/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & insights"
        title="Perspectives from the deck."
        subtitle="Trends, regulations, and practical guidance from our team — for shippers who want to stay ahead."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <article key={n.slug} className="hover-lift group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={covers[i % covers.length]} alt={n.title} loading="lazy" width={1600} height={1000} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-ocean/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-ocean">{n.category}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug">{n.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
                <Link to="/news" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean">
                  Read article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl gradient-navy p-10 text-primary-foreground md:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Subscribe to our insights.</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/80">Monthly briefings on trade lanes, regulations, and what's moving in maritime logistics.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@company.com" className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white focus:outline-none" />
              <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-deep">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
