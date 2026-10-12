import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { WHATSAPP_BASE, products } from "@/data/products";

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tankSize: "",
    location: "",
    use: "",
    service: "",
    notes: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = [
      `Hello Roto Tanks, I would like a quote for a ${form.tankSize}L tank.`,
      `Location: ${form.location}.`,
      form.use ? `Intended use: ${form.use}.` : "",
      form.service ? `Service needed: ${form.service}.` : "",
      `Name: ${form.name}.`,
      `Phone: ${form.phone}.`,
      form.notes ? `Notes: ${form.notes}.` : "",
    ]
      .filter(Boolean)
      .join(" ");
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <Layout>
      <PageIntro
        eyebrow="Quote request"
        title="Send sales the right details the first time."
        description="This page turns the quote process into a simple guided intake so the WhatsApp message already includes size, location, use case, and service needs."
        highlights={["WhatsApp submission", "Size guided", "Location aware"]}
        metrics={[
          { label: "Required fields", value: "4" },
          { label: "Tank options", value: `${products.length}` },
          { label: "Submit method", value: "WhatsApp" },
          { label: "Best for", value: "Fast quote" },
        ]}
      />

      <section className="section-space">
        <div className="container grid gap-8 lg:grid-cols-[0.72fr_0.38fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel-surface p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" required>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  required
                  className="form-field"
                />
              </Field>
              <Field label="Phone number" required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  required
                  className="form-field"
                />
              </Field>
              <Field label="Preferred tank size" required>
                <select
                  value={form.tankSize}
                  onChange={(event) => setForm({ ...form, tankSize: event.target.value })}
                  required
                  className="form-field"
                >
                  <option value="">Select capacity</option>
                  {products.map((product) => (
                    <option key={product.litres} value={product.litres}>
                      {product.litres.toLocaleString()}L - Ksh {product.priceKsh.toLocaleString()}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Delivery location" required>
                <input
                  type="text"
                  value={form.location}
                  onChange={(event) => setForm({ ...form, location: event.target.value })}
                  required
                  placeholder="e.g. Nairobi, Nakuru, Kisumu"
                  className="form-field"
                />
              </Field>
              <Field label="Intended use">
                <select
                  value={form.use}
                  onChange={(event) => setForm({ ...form, use: event.target.value })}
                  className="form-field"
                >
                  <option value="">Select use case</option>
                  {["Home", "Rental property", "School", "Farm", "Business", "Institution", "Industrial", "Other"].map((use) => (
                    <option key={use} value={use}>
                      {use}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Service needed">
                <select
                  value={form.service}
                  onChange={(event) => setForm({ ...form, service: event.target.value })}
                  className="form-field"
                >
                  <option value="">Select service</option>
                  {["Tank purchase only", "Purchase and delivery", "Project quotation", "General inquiry"].map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Notes" className="md:col-span-2">
                <textarea
                  rows={5}
                  value={form.notes}
                  onChange={(event) => setForm({ ...form, notes: event.target.value })}
                  className="form-field resize-none"
                  placeholder="Tell us about access, preferred delivery date, multiple tanks, or base preparation."
                />
              </Field>
            </div>
            <button type="submit" className="btn-primary mt-7 w-full py-4 text-base">
              <Send className="h-5 w-5" /> Submit via WhatsApp
            </button>
          </motion.form>

          <aside className="panel-surface-dark p-7">
            <MessageCircle className="h-10 w-10 text-accent" />
            <h2 className="mt-5 text-2xl font-heading">What happens next?</h2>
            <div className="mt-5 grid gap-4">
              {[
                "Your form opens WhatsApp with a prepared message.",
                "Sales confirms tank size, price, and delivery details.",
                "You can approve the quotation and schedule dispatch.",
              ].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Step 0{index + 1}</span>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
