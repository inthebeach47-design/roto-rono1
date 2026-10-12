import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { PHONE_NUMBER, getWhatsAppLink } from "@/data/products";
import { cn } from "@/lib/utils";

interface SalesPanelProps {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  quoteTo?: string;
  whatsappText?: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function SalesPanel({
  eyebrow = "Quote support",
  title,
  description,
  bullets = [],
  quoteTo = "/quote",
  whatsappText,
  tone = "light",
  className,
}: SalesPanelProps) {
  const dark = tone === "dark";

  return (
    <div className={cn(dark ? "panel-surface-dark" : "panel-surface", "p-7 md:p-8", className)}>
      <span className={cn("eyebrow", dark ? "text-primary-foreground/80" : "text-primary")}>
        {eyebrow}
      </span>
      <h3 className="mt-4 text-2xl font-heading md:text-[2rem]">{title}</h3>
      <p className={cn("mt-3 leading-7", dark ? "text-white/70" : "text-muted-foreground")}>
        {description}
      </p>
      {bullets.length > 0 && (
        <ul className="mt-6 grid gap-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className={cn(
                "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
                dark
                  ? "border-white/10 bg-white/5 text-white/80"
                  : "border-border bg-background/80 text-muted-foreground",
              )}
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-7 flex flex-wrap gap-3">
        <Link to={quoteTo} className="btn-primary">
          Request quote <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={getWhatsAppLink({ message: whatsappText })}
          target="_blank"
          rel="noopener noreferrer"
          className={dark ? "btn-secondary bg-white/95" : "btn-secondary"}
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp sales
        </a>
      </div>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className={cn("mt-5 inline-flex items-center gap-2 text-sm font-semibold", dark ? "text-white/80" : "text-foreground")}
      >
        <Phone className="h-4 w-4 text-primary" />
        Call {PHONE_NUMBER}
      </a>
    </div>
  );
}
