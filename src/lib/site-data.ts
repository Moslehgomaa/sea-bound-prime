import { Ship, Anchor, FileCheck2, Truck, Cpu, PackageOpen, Snowflake, Layers, Globe2, Factory, Wheat, Pill, Car, ShoppingBag, Cpu as Chip, Building2 } from "lucide-react";

export const services = [
  {
    slug: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    short: "FCL · LCL · Project Cargo · DG",
    desc: "Full container, less-than-container, and project cargo solutions on every major trade lane, backed by global carrier partnerships and competitive contract rates.",
    bullets: ["FCL & LCL consolidation worldwide", "Dangerous Goods (IMDG) handling", "Reefer & temperature-controlled", "Out-of-gauge and break-bulk"],
  },
  {
    slug: "shipping-agency",
    icon: Anchor,
    title: "Shipping Agency",
    short: "Acting as agent at all Egyptian sea ports",
    desc: "Port agency services across Alexandria, Damietta, Sokhna, Port Said and Suez — vessel husbandry, crew change, bunkering, spare parts and documentation, 24/7.",
    bullets: ["Vessel husbandry & port calls", "Crew change & repatriation", "Bunkering & supplies coordination", "24/7 operations control"],
  },
  {
    slug: "customs-clearance",
    icon: FileCheck2,
    title: "Customs Clearance",
    short: "Fast clearance with trusted expertise",
    desc: "Licensed customs brokers handling import, export, transit and bonded warehouse operations — minimizing dwell time and ensuring full compliance.",
    bullets: ["Import & export clearance", "HS classification & duty advisory", "AEO / compliance support", "Bonded warehouse operations"],
  },
  {
    slug: "inland-haulage",
    icon: Truck,
    title: "Inland Haulage",
    short: "Efficient inland transport across every destination",
    desc: "Door-to-door trucking, container drayage, multi-modal connections, and last-mile distribution covering Egypt and connecting to regional corridors.",
    bullets: ["Container drayage & trucking", "Multi-modal rail & road", "Refrigerated transport", "Last-mile distribution"],
  },
  {
    slug: "project-cargo",
    icon: Layers,
    title: "Project & Heavy Lift",
    short: "Engineered moves for oversized cargo",
    desc: "Specialized handling for over-dimensional, heavy-lift, and turnkey project shipments — route surveys, permits, lifting plans, and on-site supervision.",
    bullets: ["Route & feasibility surveys", "Heavy-lift cranes & SPMT", "Permits & escort coordination", "On-site supervision"],
  },
  {
    slug: "reefer",
    icon: Snowflake,
    title: "Reefer & Cold Chain",
    short: "Temperature-controlled global shipping",
    desc: "Specialist reefer desk for perishables and pharma — pre-cooling, continuous monitoring, controlled atmosphere and end-to-end visibility.",
    bullets: ["Pre-cooling & monitoring", "Controlled atmosphere", "Pharma-grade compliance", "Cold-chain warehousing"],
  },
  {
    slug: "warehousing",
    icon: PackageOpen,
    title: "Warehousing & 3PL",
    short: "Smart storage and fulfilment",
    desc: "Bonded and general warehousing with inventory management, value-added services and integrated fulfilment for ecommerce and B2B distribution.",
    bullets: ["Bonded & general warehousing", "Inventory & WMS", "Pick-pack and labelling", "Cross-docking"],
  },
  {
    slug: "digital",
    icon: Cpu,
    title: "Digital Business Solutions",
    short: "Technology-driven smarter logistics",
    desc: "Real-time shipment visibility, e-booking, digital documentation and API integrations that connect your supply chain to ours.",
    bullets: ["Live tracking portal", "E-booking & quoting", "EDI / API integration", "Analytics & reporting"],
  },
] as const;

export const industries = [
  { icon: Factory, name: "Manufacturing & Industrial", desc: "Raw materials, machinery and finished goods on schedule." },
  { icon: Wheat, name: "Agriculture & Commodities", desc: "Bulk grains, cotton, and Egyptian agri-exports." },
  { icon: Pill, name: "Pharmaceuticals & Healthcare", desc: "GDP-compliant temperature-controlled lanes." },
  { icon: Car, name: "Automotive", desc: "Parts, CKD kits and finished vehicle logistics." },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Fast, scalable fulfilment for omnichannel brands." },
  { icon: Chip, name: "Technology & Electronics", desc: "High-value, time-critical and secure handling." },
  { icon: Building2, name: "Construction & EPC", desc: "Project cargo, materials and site logistics." },
  { icon: Globe2, name: "Oil, Gas & Energy", desc: "Specialized equipment and turnaround support." },
] as const;

export const stats = [
  { value: "42", suffix: "+", label: "Years in business" },
  { value: "120", suffix: "+", label: "Countries served" },
  { value: "50", suffix: "K+", label: "Shipments handled" },
  { value: "97", suffix: "%", label: "On-time performance" },
] as const;

export const carrierPartners = [
  "CMA CGM", "MSC", "Hapag-Lloyd", "Evergreen", "COSCO", "ONE", "Maersk", "Yang Ming",
] as const;

export const trustBadges = ["ISO 9001:2015", "FIATA Member", "42 Years", "AEO Compliant"] as const;

export const testimonials = [
  { quote: "Blue Ocean Marine has been our trusted forwarder out of Alexandria for over a decade. Their reefer desk is best-in-class.", name: "Hassan A.", role: "Head of Supply Chain, Agri Exporter" },
  { quote: "Customs clearance times dropped significantly after we moved our Egypt operations to BOM. Truly hands-on team.", name: "Maria L.", role: "Logistics Director, EU Pharma" },
  { quote: "From port call to inland delivery — one window, zero surprises. That's what large project shipments need.", name: "Dimitri K.", role: "Project Manager, EPC Contractor" },
];

export const news = [
  { slug: "future-of-maritime-shipping", date: "Apr 9, 2026", category: "Industry Insights", title: "The Future of Maritime Shipping: AI, Automation & 2026", excerpt: "How artificial intelligence, port automation and digital twins are reshaping ocean trade lanes." },
  { slug: "project-cargo-egypt", date: "Apr 10, 2026", category: "Guides", title: "Project Cargo from Egypt: Heavy-Lift Shipping Complete Guide", excerpt: "Everything exporters need to know about moving oversized equipment from Egyptian ports." },
  { slug: "export-documents-egypt-2026", date: "May 5, 2026", category: "Compliance", title: "Export Documents from Egypt — The 2026 Checklist", excerpt: "The complete list of documentation required to export from Egypt this year." },
];

export const certifications = ["FIATA Member", "IATA Accredited", "WCA Network", "ISO 9001:2015", "AEO Compliant", "IMDG Certified"];
