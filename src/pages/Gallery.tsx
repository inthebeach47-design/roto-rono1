import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { galleryItems } from "@/data/products";

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <Layout>
      <PageIntro
        eyebrow="Gallery"
        title="Product visuals presented as a professional sales portfolio."
        description="The gallery now uses stronger framing, filters, and larger visual blocks so imagery feels less like a generic thumbnail grid."
        highlights={["Products", "Range", "Delivery", "Use cases"]}
        metrics={[
          { label: "Categories", value: `${categories.length - 1}` },
          { label: "Visual style", value: "Portfolio" },
          { label: "Action", value: "Click to view" },
          { label: "Goal", value: "Trust" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  active === category
                    ? "bg-navy text-white"
                    : "border border-border bg-white text-foreground/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((item, index) => (
              <motion.button
                key={`${item.caption}-${index}`}
                type="button"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                onClick={() => setLightbox(index)}
                className={`group overflow-hidden rounded-[2rem] border border-border bg-white text-left transition hover:-translate-y-1 hover:border-primary/40 ${
                  index % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={item.src} alt={item.caption} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{item.category}</p>
                  <p className="mt-2 font-heading text-lg">{item.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-navy/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-foreground"
              onClick={() => setLightbox(null)}
              aria-label="Close image preview"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.caption}
              className="max-h-[82vh] max-w-full rounded-[2rem] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
