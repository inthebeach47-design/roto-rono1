import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";

import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { PHONE_NUMBER, WHATSAPP_BASE, getWhatsAppLink } from "@/data/products";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", location: "", subject: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = [
      `Hello Roto Tanks, my name is ${form.name}.`,
      form.subject ? `Subject: ${form.subject}.` : "",
      form.message,
      form.location ? `Location: ${form.location}.` : "",
      form.phone ? `Phone: ${form.phone}.` : "",
    ]
      .filter(Boolean)
      .join(" ");
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call sales",
      detail: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER}`,
      note: "Best for urgent price and availability checks.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp quote",
      detail: "Send product inquiry",
      href: getWhatsAppLink(),
      note: "Best for sending tank size, location, and use case.",
    },
    {
      icon: MapPin,
      title: "Service area",
      detail: "Kenya",
      href: "/delivery",
      note: "Delivery planning is confirmed during quotation.",
    },
  ];

  return (
    <Layout>
      <PageIntro
        eyebrow="Contact"
        title="Contact routes built around quick sales action."
        description="The contact page now acts like a conversion desk: direct call, WhatsApp quote, location context, and a guided message form."
        highlights={["Call", "WhatsApp", "Quote form", "Delivery context"]}
        metrics={[
          { label: "Fastest action", value: "WhatsApp" },
          { label: "Sales phone", value: PHONE_NUMBER },
          { label: "Best info", value: "Size + location" },
          { label: "Coverage", value: "Kenya" },
        ]}
      />

      <section className="section-space">
        <div className="container grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-4">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <card.icon className="h-8 w-8 text-primary" />
                <h2 className="mt-4 text-2xl font-heading">{card.title}</h2>
                <p className="mt-2 font-bold text-foreground/80">{card.detail}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.note}</p>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel-surface p-6 md:p-8"
          >
            <h2 className="text-3xl font-heading">Send a prepared WhatsApp message</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Fill the fields and we will open WhatsApp with a structured message for the sales desk.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {[
                { label: "Full name", key: "name", type: "text", required: true },
                { label: "Phone number", key: "phone", type: "tel", required: true },
                { label: "Location", key: "location", type: "text", required: false },
                { label: "Subject", key: "subject", type: "text", required: false },
              ].map((field) => (
                <label key={field.key} className="block">
                  <span className="mb-2 block text-sm font-bold text-foreground">
                    {field.label} {field.required && <span className="text-primary">*</span>}
                  </span>
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(event) => setForm({ ...form, [field.key]: event.target.value })}
                    required={field.required}
                    className="form-field"
                  />
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-foreground">Message</span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="form-field min-h-[9rem] resize-none py-4"
                  required
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-7 w-full py-4">
              <Send className="h-5 w-5" /> Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
}
