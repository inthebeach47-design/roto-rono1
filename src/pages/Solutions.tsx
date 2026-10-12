import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Building2, Home, Landmark, School, Sprout } from "lucide-react";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { capacityBands, getWhatsAppLink, solutions } from "@/data/products";

const icons = {
  home: Home,
  building: Building2,
  school: School,
  sprout: Sprout,
  briefcase: BriefcaseBusiness,
  landmark: Landmark,
};

export default function Solutions() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Use cases"
        title="Water storage decisions organized by how customers actually buy."
        description="Different buyers need different reassurance. This page separates homes, rentals, farms, schools, businesses, and institutions into clear sales paths."
        highlights={["Home backup", "Rental supply", "Farm reserve", "Project planning"]}
        metrics={[
          { label: "Main buyer paths", value: "6" },
          { label: "Capacity guidance", value: "4 bands" },
          { label: "Quote action", value: "Per use case" },
          { label: "Support", value: "Sales desk" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeader
            tag="Buyer paths"
            title="Choose your situation, then ask for the right tank."
            description="The design avoids a one-size-fits-all grid. Each use case explains the buyer outcome, recommended range, and next quote action."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = icons[solution.icon];
              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-[2rem] border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white transition group-hover:bg-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {solution.sizes}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-heading">{solution.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{solution.description}</p>
                  <div className="mt-5 rounded-2xl border border-border bg-muted/60 p-4 text-sm font-semibold text-foreground/75">
                    {solution.outcome}
                  </div>
                  <a
                    href={getWhatsAppLink({ use: solution.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    Quote for {solution.title} <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="container">
          <SectionHeader
            tag="Capacity guide"
            title="Recommended ranges by demand level."
            description="Visitors can decide from use case and capacity band before opening WhatsApp or the quote form."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capacityBands.map((band) => (
              <div key={band.id} className="rounded-[1.7rem] border border-border bg-background p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{band.label}</p>
                <h3 className="mt-3 text-2xl font-heading text-primary">{band.range}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{band.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell us your use case and location."
        description="We will recommend a tank size before sending a confirmed price and delivery next step."
      />
    </Layout>
  );
}
