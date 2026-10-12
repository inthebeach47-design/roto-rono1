import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Phone, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { PHONE_NUMBER, getWhatsAppLink } from "@/data/products";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/products", label: "Tanks" },
  { to: "/pricing", label: "Pricing" },
  { to: "/solutions", label: "Use Cases" },
  { to: "/delivery", label: "Delivery" },
  { to: "/quality", label: "Quality" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={cn(
          "mx-auto max-w-[1480px] overflow-hidden rounded-[1.35rem] border transition duration-300",
          scrolled || menuOpen
            ? "border-border bg-white/95 shadow-[0_20px_70px_-48px_rgba(8,25,40,0.9)] backdrop-blur-xl"
            : "border-white/20 bg-navy/75 text-white shadow-none backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "hidden items-center justify-between border-b px-5 py-2 text-xs md:flex",
            scrolled || menuOpen ? "border-border text-muted-foreground" : "border-white/10 text-white/70",
          )}
        >
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Premium water storage supply for homes, institutions, farms, and businesses
          </span>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="font-semibold transition hover:text-primary">
              {PHONE_NUMBER}
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="font-semibold transition hover:text-primary">
              WhatsApp quote
            </a>
          </div>
        </div>

        <nav className="flex h-[4.25rem] items-center justify-between px-4 py-3 md:h-20 md:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Roto Tanks home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white p-2 shadow-sm">
              <img src="/images/logo.png" alt="" className="h-full w-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className={cn("block font-heading text-lg", scrolled || menuOpen ? "text-foreground" : "text-white")}>
                Roto Tanks
              </span>
              <span className={cn("block text-[10px] font-bold uppercase tracking-[0.28em]", scrolled || menuOpen ? "text-muted-foreground" : "text-white/60")}>
                Kenya supply
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-primary text-white"
                      : scrolled || menuOpen
                        ? "text-foreground/70 hover:bg-muted hover:text-foreground"
                        : "text-white/75 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition",
                scrolled || menuOpen
                  ? "border-border bg-white text-foreground hover:border-primary/40 hover:text-primary"
                  : "border-white/20 bg-white/10 text-white hover:border-white/30",
              )}
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <Link to="/quote" className="btn-primary px-5 py-2.5">
              Get quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
              scrolled || menuOpen ? "border-border bg-white text-foreground" : "border-white/20 bg-white/10 text-white",
            )}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-white lg:hidden"
            >
              <div className="grid gap-2 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-bold transition",
                      location.pathname === link.to ? "bg-primary text-white" : "bg-muted text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a href={`tel:${PHONE_NUMBER}`} className="btn-dark justify-center py-3">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center py-3">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
                <Link to="/quote" className="btn-secondary justify-center">
                  Request full quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
