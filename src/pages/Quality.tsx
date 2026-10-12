import { motion } from "framer-motion";
import { Award, Clock, CloudRain, Layers, Shield, Sun } from "lucide-react";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";

export default function Quality() {
  const features = [
    {
      icon: Shield,
      title: "Ribbed structural strength",
      desc: "Reinforced wall geometry supports pressure distribution and long outdoor service.",
    },
    {
      icon: Sun,
      title: "UV-stabilized material",
      desc: "Built to stand up to direct sun exposure across Kenyan climate zones.",
    },
    {
      icon: Layers,
      title: "Stable storage profile",
      desc: "Designed for practical placement on prepared bases for homes and projects.",
    },
    {
      icon: Clock,
      title: "Long service horizon",
      desc: "With proper installation and care, tanks are built for many years of use.",
    },
    {
      icon: CloudRain,
      title: "Rainwater ready",
      desc: "Suitable for borehole reserve, rainwater harvesting, and daily backup supply.",
    },
    {
      icon: Award,
      title: "Warranty support",
      desc: "Sales can advise on the warranty details attached to your selected tank.",
    },
  ];

  return (
    <Layout>
      <PageIntro
        eyebrow="Quality and warranty"
        title="Quality is positioned as a buying decision, not a small feature list."
        description="This page explains durability in practical terms so customers understand why the tank is suitable for Kenyan outdoor use."
        highlights={["UV stabilized", "Ribbed strength", "Warranty support"]}
        metrics={[
          { label: "Service horizon", value: "15 to 25 years" },
          { label: "Material focus", value: "Polyethylene" },
          { label: "Build profile", value: "Ribbed walls" },
          { label: "Use case", value: "Outdoor storage" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeader
            tag="Build confidence"
            title="Durability proof points buyers can scan quickly."
            description="The page uses larger technical panels and plain-language descriptions instead of a generic icon grid."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-border bg-white p-6"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-heading">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="container panel-surface-dark p-8 md:p-12">
          <span className="eyebrow text-white/70">Quality promise</span>
          <h2 className="mt-5 max-w-3xl text-3xl font-heading md:text-5xl">
            A better tank buying experience should make reliability obvious.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">
            The new visual direction uses industrial surfaces, technical spacing, and proof-led copy to make the brand feel
            more established, trustworthy, and project-ready.
          </p>
        </div>
      </section>

      <CTABanner title="Ask sales about the right tank for your site conditions." />
    </Layout>
  );
}
