import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Route, Truck } from "lucide-react";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { processSteps, regions } from "@/data/products";

export default function Delivery() {
  const prep = [
    "Confirm tank size and delivery location",
    "Prepare a flat, stable base before arrival",
    "Check access route for truck movement",
    "Keep someone available to receive the tank",
  ];

  return (
    <Layout>
      <PageIntro
        eyebrow="Delivery"
        title="Delivery is presented as part of the purchase confidence."
        description="Buyers need to know what happens after quote approval. This page turns delivery into a clear planning sequence instead of a small afterthought."
        highlights={["Route planning", "Base preparation", "Major towns", "Dispatch support"]}
        metrics={[
          { label: "Planning steps", value: "5" },
          { label: "Listed towns", value: `${regions.length}` },
          { label: "Buyer focus", value: "No surprises" },
          { label: "Support", value: "Before dispatch" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeader
            tag="Process"
            title="From inquiry to tank arrival."
            description="The process uses a more operational layout, helping customers understand what to prepare and when to expect coordination."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.7rem] border border-border bg-white p-5"
              >
                <span className="text-5xl font-heading text-primary/20">0{step.step}</span>
                <h3 className="-mt-3 text-xl font-heading">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="panel-surface-dark p-7">
            <Truck className="h-10 w-10 text-accent" />
            <h2 className="mt-5 text-3xl font-heading">Site readiness checklist</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              A professional delivery page should reduce failed delivery friction. These are the practical checks buyers should complete.
            </p>
            <div className="mt-6 grid gap-3">
              {prep.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel-surface p-7">
            <div className="flex items-center gap-3">
              <Route className="h-7 w-7 text-primary" />
              <h2 className="text-3xl font-heading">Coverage examples</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Delivery cost depends on your route, tank size, and dispatch plan. These towns show the type of coverage supported.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {regions.map((region) => (
                <span key={region} className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground/75">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Confirm your delivery location before purchase."
        description="Send the town, estate, or project site so sales can advise on the right tank and delivery route."
      />
    </Layout>
  );
}
