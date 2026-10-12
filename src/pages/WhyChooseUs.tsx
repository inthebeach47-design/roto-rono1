import { motion } from "framer-motion";
import { BadgeCheck, Banknote, Headphones, Ruler, ShieldCheck, Truck, Users, Wrench } from "lucide-react";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Quality-led positioning",
      desc: "Durability and weather resistance now sit at the center of the buying experience.",
    },
    {
      icon: Banknote,
      title: "Clear price anchors",
      desc: "Visitors can compare budget expectations before requesting a delivery-adjusted quote.",
    },
    {
      icon: Ruler,
      title: "Better size guidance",
      desc: "Capacity bands help buyers avoid choosing too small or too large a tank.",
    },
    {
      icon: Headphones,
      title: "Direct human support",
      desc: "Every major section routes buyers to call, WhatsApp, or request a quote.",
    },
    {
      icon: Truck,
      title: "Delivery planning",
      desc: "The experience explains logistics and preparation instead of hiding them at the end.",
    },
    {
      icon: Users,
      title: "Multiple buyer types",
      desc: "Homes, rentals, farms, schools, and businesses each get a relevant path.",
    },
    {
      icon: Wrench,
      title: "Practical installation advice",
      desc: "Base preparation and site readiness are part of the conversion story.",
    },
    {
      icon: BadgeCheck,
      title: "Professional brand feel",
      desc: "The redesign replaces soft generic cards with a stronger manufacturing-inspired identity.",
    },
  ];

  return (
    <Layout>
      <PageIntro
        eyebrow="Why choose us"
        title="A trust-first sales experience built to convert serious buyers."
        description="This page explains why the new brand system should feel more credible, practical, and conversion-focused for Kenyan water storage customers."
        highlights={["Trust", "Clarity", "Conversion", "Support"]}
        metrics={[
          { label: "Reasons", value: "8" },
          { label: "Primary action", value: "Quote" },
          { label: "Secondary action", value: "Call" },
          { label: "Visual tone", value: "Premium industrial" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeader
            tag="Decision support"
            title="Every reason points toward a confident inquiry."
            description="The cards are written as sales objections answered upfront: quality, price, size, delivery, installation, and support."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.8rem] border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <reason.icon className="h-8 w-8 text-primary" />
                <h2 className="mt-5 text-xl font-heading">{reason.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to compare tank sizes and prices?"
        description="Use the quote form or WhatsApp button and sales will help you choose based on your actual site."
      />
    </Layout>
  );
}
