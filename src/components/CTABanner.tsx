import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { PHONE_NUMBER, getWhatsAppLink } from "@/data/products";

interface CTABannerProps {
  title?: string;
  description?: string;
  eyebrow?: string;
}

export default function CTABanner({
  eyebrow = "Ready when you are",
  title = "Get a tank recommendation and quote before you buy.",
  description = "Tell us your location, intended use, and preferred capacity. We will help you confirm the right size and the next delivery step.",
}: CTABannerProps) {
  return (
    <section className="px-4 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container section-bridge p-8 text-white md:p-12 lg:p-14"
      >
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end">
          <div>
            <span className="eyebrow text-white/75">{eyebrow}</span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-heading leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link to="/quote" className="btn-primary bg-white text-foreground hover:text-foreground">
              Request quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white/30 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <Phone className="h-4 w-4" /> {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
