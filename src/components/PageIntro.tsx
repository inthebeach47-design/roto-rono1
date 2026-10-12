import { motion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IntroMetric {
  label: string;
  value: string;
}

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
  metrics?: IntroMetric[];
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  highlights = [],
  metrics = [],
  actions,
  aside,
  tone = "dark",
  className,
}: PageIntroProps) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        dark
          ? "border-white/10 bg-[linear-gradient(135deg,rgba(5,22,34,1),rgba(11,39,58,0.96))] text-white"
          : "border-border bg-[linear-gradient(180deg,rgba(239,246,249,0.92),rgba(248,250,252,1))] text-foreground",
        className,
      )}
    >
      <div className={cn("absolute inset-0", dark ? "grid-fade opacity-35" : "opacity-20")} />
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-1/2 blur-3xl",
          dark ? "bg-primary/20" : "bg-primary/10",
        )}
      />
      <div className="container relative z-10 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className={cn("eyebrow", dark ? "text-primary-foreground/80" : "text-primary")}>
              {eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-heading leading-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-7 md:text-lg",
                dark ? "text-white/75" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
            {highlights.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]",
                      dark
                        ? "border-white/10 bg-white/5 text-white/80"
                        : "border-border bg-white/75 text-foreground/70",
                    )}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {aside ?? (
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={cn(
                      "rounded-[1.75rem] border p-5",
                      dark
                        ? "border-white/10 bg-white/10 backdrop-blur"
                        : "border-border bg-white/90",
                    )}
                  >
                    <p
                      className={cn(
                        "text-xs uppercase tracking-[0.26em]",
                        dark ? "text-white/60" : "text-muted-foreground",
                      )}
                    >
                      {metric.label}
                    </p>
                    <p className="mt-3 text-2xl font-heading">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
