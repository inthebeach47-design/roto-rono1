import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { faqs } from "@/data/products";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Layout>
      <PageIntro
        eyebrow="FAQ"
        title="Answers designed to remove buying friction before sales contact."
        description="The FAQ is now part of the conversion flow: it handles sizing, delivery, base preparation, material confidence, and project support."
        highlights={["Sizing", "Delivery", "Base prep", "Warranty"]}
        metrics={[
          { label: "Questions", value: `${faqs.length}` },
          { label: "Main goal", value: "Reduce friction" },
          { label: "Next step", value: "Quote" },
          { label: "Support channel", value: "WhatsApp" },
        ]}
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="panel-surface-dark h-fit p-7 lg:sticky lg:top-32">
            <HelpCircle className="h-10 w-10 text-accent" />
            <h2 className="mt-5 text-3xl font-heading">Still unsure?</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              If the answer depends on your location, use case, or preferred tank size, the fastest path is to request
              a quote or WhatsApp the sales desk.
            </p>
          </aside>

          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                className="overflow-hidden rounded-[1.6rem] border border-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-heading"
                >
                  {faq.q}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${open === index ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-7 text-muted-foreground">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need an answer specific to your site?" />
    </Layout>
  );
}
