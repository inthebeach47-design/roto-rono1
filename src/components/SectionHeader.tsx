import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  kicker?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
  centered = false,
  light = false,
  kicker,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-10 md:mb-14", centered && "text-center")}
    >
      {tag && (
        <span className={cn("eyebrow", centered && "justify-center", light ? "text-white/75" : "text-primary")}>
          {tag}
        </span>
      )}
      <div className={cn("mt-4 grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end", centered && "block")}>
        <div>
          {kicker && (
            <p className={cn("mb-3 text-sm font-semibold uppercase tracking-[0.24em]", light ? "text-accent" : "text-muted-foreground")}>
              {kicker}
            </p>
          )}
          <h2 className={cn("text-balance text-3xl font-heading leading-tight md:text-4xl lg:text-5xl", light ? "text-white" : "text-foreground")}>
            {title}
          </h2>
        </div>
        {description && (
          <p className={cn("max-w-xl text-base leading-7", centered && "mx-auto mt-4", light ? "text-white/70" : "text-muted-foreground")}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
