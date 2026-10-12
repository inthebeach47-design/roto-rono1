import { motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";

import { Product, PHONE_NUMBER, formatPrice, formatTankSize, getWhatsAppLink } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
  quoteHref?: string;
  phoneNumber?: string;
  compact?: boolean;
}

export default function ProductCard({ product, index, quoteHref, phoneNumber, compact = false }: ProductCardProps) {
  const resolvedQuoteHref = quoteHref ?? getWhatsAppLink({ tankSize: product.litres, use: product.category });
  const resolvedPhoneNumber = phoneNumber ?? PHONE_NUMBER;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group relative overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_28px_80px_-62px_rgba(8,25,40,0.65)] transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_35px_90px_-58px_rgba(8,25,40,0.78)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80" />
      <div className="grid min-h-full grid-rows-[auto_1fr]">
        <div className={cn("relative overflow-hidden bg-[linear-gradient(145deg,#eef6f8,#ffffff)]", compact ? "p-4" : "p-6")}>
          <div className="absolute right-4 top-4 rounded-full border border-foreground/10 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/60 backdrop-blur">
            {product.category}
          </div>
          <div className="absolute -bottom-14 left-1/2 h-36 w-52 -translate-x-1/2 rounded-[50%] bg-primary/10 blur-2xl" />
          <img
            src="/images/product.png"
            alt={`Roto Tanks ${formatTankSize(product.litres)} water tank`}
            className={cn(
              "relative mx-auto object-contain transition duration-500 group-hover:scale-105",
              compact ? "h-32" : "h-40",
            )}
          />
        </div>

        <div className={cn("flex flex-col p-6", compact && "p-5")}>
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{product.profile}</p>
              <h3 className="mt-2 text-3xl font-heading text-foreground">{formatTankSize(product.litres)}</h3>
            </div>
            {product.badge && (
              <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">
                {product.badge}
              </span>
            )}
          </div>

          <p className="min-h-[3rem] text-sm leading-6 text-muted-foreground">{product.use}</p>

          <div className="my-5 rounded-2xl border border-border bg-muted/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">From</span>
              <span className="text-xl font-heading text-primary">{formatPrice(product.priceKsh)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>Dispatch</span>
              <span className="font-semibold text-foreground/75">{product.leadTime}</span>
            </div>
          </div>

          <ul className="mb-6 grid gap-2">
            {product.benefits.slice(0, compact ? 2 : 3).map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid grid-cols-[1fr_auto] gap-2">
            <a href={resolvedQuoteHref} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-3">
              <MessageCircle className="h-4 w-4" /> Quote
            </a>
            <a
              href={`tel:${resolvedPhoneNumber}`}
              aria-label={`Call about ${formatTankSize(product.litres)} tank`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-primary transition hover:border-primary/40 hover:bg-primary/5"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
          <a
            href={resolvedQuoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
          >
            Send exact tank inquiry <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
