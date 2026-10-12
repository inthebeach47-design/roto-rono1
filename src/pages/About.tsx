import { motion } from "framer-motion";
import { BadgeCheck, Headphones, Landmark, ShieldCheck } from "lucide-react";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  const stats = [
    { value: "11", label: "Tank sizes" },
    { value: "47", label: "County reach" },
    { value: "15+", label: "Years target service" },
    { value: "24K", label: "Max litres" },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Durability first",
      desc: "The brand experience now leads with strength, weather resistance, and long-term water security.",
    },
    {
      icon: Headphones,
      title: "Responsive sales support",
      desc: "Clear phone, WhatsApp, and quote routes make it easy for buyers to get practical answers.",
    },
    {
      icon: BadgeCheck,
      title: "Straightforward pricing",
      desc: "Price anchors help customers understand budget before they ask for a delivery-adjusted quotation.",
    },
    {
      icon: Landmark,
      title: "Project-ready thinking",
      desc: "The content now supports homes, landlords, institutions, farms, and commercial buyers with equal seriousness.",
    },
  ];

  return (
    <Layout>
      <PageIntro
        eyebrow="About Roto Tanks"
        title="A more serious brand presence for practical water storage buyers."
        description="The redesign positions Roto Tanks as a reliable sales and supply partner, not just a catalog of blue tank cards."
        highlights={["Professional supply", "Kenyan buyers", "Homes to projects"]}
        metrics={[
          { label: "Product range", value: "1000L - 24000L" },
          { label: "Sales channel", value: "Call + WhatsApp" },
          { label: "Buyer focus", value: "Reliable storage" },
          { label: "Brand tone", value: "Industrial premium" },
        ]}
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.3rem] border border-border bg-white p-6"
          >
            <div className="absolute inset-x-10 bottom-8 h-28 rounded-full bg-primary/10 blur-2xl" />
            <img src="/images/tank-range.jpg" alt="Roto Tanks product range" className="relative w-full rounded-[1.7rem] object-cover" />
          </motion.div>

          <div>
            <SectionHeader
              tag="Brand story"
              title="Built around confidence, clarity, and conversion."
              description="The new site language focuses on what buyers care about: the correct size, credible quality, price expectations, delivery planning, and fast human response."
            />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.6rem] border border-border bg-white p-5">
                  <p className="text-3xl font-heading text-primary">{stat.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="container">
          <SectionHeader
            tag="What we stand for"
            title="A trust system instead of generic claims."
            description="The values are framed as buying assurances, giving customers more confidence to contact sales."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-border bg-background p-6"
              >
                <value.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-xl font-heading">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Talk to a sales desk that understands your use case."
        description="Whether you are buying for a home, rental property, school, farm, or business, the quote path is designed to capture the right details."
      />
    </Layout>
  );
}
