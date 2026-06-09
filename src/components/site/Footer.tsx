import { Link } from "@tanstack/react-router";
import { Anchor, Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <Anchor className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Blue Ocean Marine</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
            A renowned shipping figure in Alexandria since 1984. Moving cargo between Egypt and the world with precision and trust.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Globe].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition hover:bg-white/20">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Industries", "/industries"],
              ["Careers", "/careers"],
              ["News & Insights", "/news"],
            ].map(([l, h]) => (
              <li key={h}><Link to={h} className="text-primary-foreground/80 hover:text-primary-foreground">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            <li>Ocean Freight (FCL/LCL)</li>
            <li>Shipping Agency</li>
            <li>Customs Clearance</li>
            <li>Inland Haulage</li>
            <li>Project Cargo</li>
            <li>Digital Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Head Office</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Alexandria, Egypt</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +20 3 484 1223</li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@blueoceanmarine.com.eg</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> 24/7 Emergency: +20 106 261 4443</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <span>© {new Date().getFullYear()} Blue Ocean Marine Logistics. All rights reserved.</span>
          <span>Member of FIATA · IATA · WCA Network</span>
        </div>
      </div>
    </footer>
  );
}
