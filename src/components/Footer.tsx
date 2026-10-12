import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { PHONE_NUMBER, getWhatsAppLink } from "@/data/products";

const productLinks = [
  { to: "/products", label: "Tank range" },
  { to: "/pricing", label: "Pricing" },
  { to: "/solutions", label: "Use cases" },
  { to: "/quality", label: "Quality and warranty" },
];

const companyLinks = [
  { to: "/about", label: "About Roto Tanks" },
  { to: "/delivery", label: "Delivery planning" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 grid-fade opacity-25" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="container relative z-10 px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_0.7fr_0.7fr_0.9fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white p-2">
                <img src="/images/logo.png" alt="" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block font-heading text-xl text-white">Roto Tanks</span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
                  Roto tank suppliers in Kenya
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Your source for Roto water storage tanks in Kenya. Compare capacities and get help with pricing and delivery for homes, rentals, institutions, farms, and businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quote" className="btn-primary">
                Request quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white/20 bg-white/10 text-white hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.28em] text-white/40">Products</h4>
            <div className="mt-5 grid gap-3">
              {productLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.28em] text-white/40">Company</h4>
            <div className="mt-5 grid gap-3">
              {companyLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.28em] text-white/40">Direct sales desk</h4>
            <div className="mt-5 grid gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                {PHONE_NUMBER}
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                WhatsApp quotation support
              </a>
              <span className="flex items-center gap-3 text-sm text-white/70">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </span>
                Serving buyers across Kenya
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Roto Tanks. All rights reserved.</p>
          <p>Built for clear quotes, fast inquiries, and confident water storage decisions.</p>
        </div>
      </div>
    </footer>
  );
}
