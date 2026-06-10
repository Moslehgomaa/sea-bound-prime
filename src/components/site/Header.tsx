import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Auto-close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/95 shadow-md backdrop-blur-md"
          : "border-border/60 bg-background/85 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoImg} alt="Blue Ocean Marine Logistics" className="h-9 w-auto object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">Blue Ocean Marine</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Logistics · Since 1984</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((n) => {
            const active = isActive(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition ${
                  active ? "text-ocean" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {n.label}
                {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-ocean" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+201200112284" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" /> +20 120 011 2284
          </a>
          <Link
            to="/quote"
            className="rounded-md gradient-navy px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border lg:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {nav.map((n) => {
              const active = isActive(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  aria-current={active ? "page" : undefined}
                  className={`py-2.5 text-sm font-medium ${active ? "text-ocean" : "text-foreground/80"}`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/quote"
              className="mt-2 rounded-md gradient-navy px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
