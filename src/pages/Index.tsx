import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Droplets,
  Factory,
  Home,
  Landmark,
  MessageCircle,
  Phone,
  School,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import {
  PHONE_NUMBER,
  capacityBands,
  faqs,
  formatPrice,
  formatTankSize,
  getWhatsAppLink,
  processSteps,
  products,
  regions,
  solutions,
  testimonials,
  trustItems,
} from "@/data/products";

const solutionIcons = {
  home: Home,
  building: Building2,
  school: School,
  sprout: Sprout,
  briefcase: BriefcaseBusiness,
  landmark: Landmark,
};


function HeroSection() {
  const heroStats = [
    { label: "Capacity range", value: "1000L - 24000L" },
    { label: "Buyer types", value: "Homes to industry" },
    { label: "Sales support", value: "Call or WhatsApp" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy pt-32 text-white md:pt-40">
      <div className="absolute inset-0 md:hidden">
        <img
          src="/images/tank-range.jpg"
          alt=""
          className="h-full w-full object-cover opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,34,0.74),rgba(5,22,34,0.5)_44%,rgba(5,22,34,0.9))]" />
        <img
          src="/images/hero-tank.png"
          alt=""
          className="absolute bottom-6 right-[-28%] h-[26rem] w-[26rem] object-contain opacity-80 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_62%,rgba(232,25,33,0.2),transparent_35%)]" />
      </div>
      <div className="absolute inset-0 grid-fade opacity-35" />
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow text-white/75">Roto tank suppliers in Kenya</span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-heading leading-[0.95] md:text-7xl lg:text-8xl">
              Your trusted source for Roto water tanks.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              We supply Roto water storage tanks for homes, farms, schools, and businesses across Kenya. Compare sizes, get practical buying advice, and request a delivery quote from our sales team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className="btn-primary">
                Browse tank range <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/quote" className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white/30 hover:text-white">
                Request a quote
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white/30 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp sales
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="btn-secondary border-white/20 bg-white text-foreground">
                <Phone className="h-4 w-4" /> Call now
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/50">{stat.label}</p>
                  <p className="mt-2 font-heading text-xl">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-5 rounded-[2.5rem] bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-[0_45px_120px_-70px_rgba(0,0,0,0.85)] backdrop-blur">
              <div className="rounded-[2rem] bg-[linear-gradient(160deg,#ffffff,#f6e8e9)] p-7 text-foreground">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
                      Roto tank supply
                    </p>
                    <h2 className="mt-2 text-2xl font-heading">Tank sizing desk</h2>
                  </div>
                  <span className="rounded-full bg-navy px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Live inquiry
                  </span>
                </div>
                <div className="relative mt-8">
                  <div className="absolute inset-x-10 bottom-3 h-20 rounded-full bg-primary/20 blur-2xl" />
                  <motion.img
                    src="/images/hero-tank.png"
                    alt="Roto Tanks water storage tank"
                    className="relative mx-auto h-[320px] w-full object-contain md:h-[420px]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Popular", "2000L"],
                    ["Best value", "5000L"],
                    ["Max reserve", "24000L"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-border bg-white p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
                      <p className="mt-2 text-xl font-heading text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductGateway() {
  const gateways = [
    {
      title: "Small home tanks",
      range: "1000L - 3000L",
      description: "Start here for home backup, kiosks, and compact compounds.",
    },
    {
      title: "Family and rental tanks",
      range: "4000L - 8000L",
      description: "Compare the popular sizes used for busy homes and rental units.",
    },
    {
      title: "Farm and project tanks",
      range: "10000L - 24000L",
      description: "Go straight to high-capacity tanks for farms, schools, estates, and businesses.",
    },
  ];

  return (
    <section className="px-4 pt-12">
      <div className="container section-bridge p-6 text-white md:p-8">
        <div className="absolute inset-0 grid-fade opacity-30" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow text-white/75">Start with products</span>
            <h2 className="mt-4 text-3xl font-heading md:text-4xl">Find the tank size before you request a quote.</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Start with the tank catalog to compare capacity, price anchors, use cases, and inquiry actions
              before speaking to sales.
            </p>
            <Link to="/products" className="btn-primary mt-6 bg-white text-foreground hover:text-foreground">
              Open full products page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {gateways.map((gateway) => (
              <Link
                key={gateway.title}
                to="/products"
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{gateway.range}</p>
                <h3 className="mt-3 text-xl font-heading">{gateway.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{gateway.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                  View products <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustLedger() {
  return (
    <section className="relative z-10 -mt-8 px-4">
      <div className="container rounded-[2rem] border border-border bg-white p-3 shadow-[0_28px_90px_-65px_rgba(8,25,40,0.85)]">
        <div className="grid gap-3 md:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-border bg-muted/60 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{item.title}</p>
              <p className="mt-2 text-xl font-heading text-foreground">{item.stat}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapacityPlanner() {
  return (
    <section className="section-space">
      <div className="container">
        <SectionHeader
          tag="Capacity planning"
          title="A practical buying path for every water demand level."
          description="Instead of forcing visitors through a generic product grid first, the new experience helps them identify the right capacity band before they ask for a quote."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {capacityBands.map((band, index) => (
            <motion.div
              key={band.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group rounded-[2rem] border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Droplets className="h-6 w-6" />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">{band.label}</p>
              <h3 className="mt-2 text-2xl font-heading">{band.range}</h3>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{band.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {band.recommended.map((size) => (
                  <span key={size} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-bold text-foreground/70">
                    {formatTankSize(size)}
                  </span>
                ))}
              </div>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Compare tanks <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullRangeProducts() {
  return (
    <section id="tank-range" className="bg-[linear-gradient(180deg,transparent,rgba(229,239,244,0.65),transparent)] py-20 md:py-28">
      <div className="container">
        <SectionHeader
          tag="The tank range"
          title="Find your tank. Get a quote in a tap."
          description="Compare every available capacity, see indicative pricing, and message our sales team directly about the tank that suits your needs."
        />
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5">
          <div>
            <p className="font-semibold text-foreground">Not sure which size to choose?</p>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what you need water for and we’ll help you find the right fit.</p>
          </div>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.litres} product={product} index={index} compact />
            ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Built for long outdoor service",
      desc: "UV-stabilized material and ribbed walls support demanding Kenyan climate conditions.",
    },
    {
      icon: Truck,
      title: "Delivery planning included",
      desc: "Buyers get guidance on location, route, access, and base preparation before dispatch.",
    },
    {
      icon: Factory,
      title: "Residential and project ready",
      desc: "The range supports single homes, landlords, schools, farms, SMEs, and large sites.",
    },
  ];

  return (
    <section className="section-space">
      <div className="container">
        <div className="section-bridge p-8 text-white md:p-12">
          <div className="absolute inset-0 grid-fade opacity-35" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeader
              tag="Why buyers trust us"
              title="The site now sells reliability before it sells litres."
              description="A serious tank buyer needs confidence in quality, delivery, sizing, and after-sale support. This layout makes those proof points visible early."
              light
            />
            <div className="grid gap-4 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <reason.icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-5 text-lg font-heading">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="section-space pt-0">
      <div className="container">
        <SectionHeader
          tag="Use cases"
          title="Clear paths for different Kenyan buyers."
          description="Homes, rentals, institutions, farms, and businesses do not buy tanks the same way. The redesign separates the decision paths clearly."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solutionIcons[solution.icon];
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
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {solution.sizes}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-heading">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{solution.description}</p>
                <div className="mt-5 rounded-2xl border border-border bg-muted/60 p-4 text-sm font-semibold text-foreground/75">
                  {solution.outcome}
                </div>
                <a
                  href={getWhatsAppLink({ use: solution.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Quote this use case <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-space bg-white/70">
      <div className="container">
        <SectionHeader
          tag="Ordering process"
          title="A cleaner route from inquiry to delivery."
          description="The redesigned flow repeats the contact options, then explains exactly what happens after the customer reaches out."
        />
        <div className="grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative rounded-[1.7rem] border border-border bg-background p-5"
            >
              <span className="text-5xl font-heading text-primary/20">0{step.step}</span>
              <h3 className="-mt-3 text-xl font-heading">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryStrip() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="panel-surface grid gap-8 p-7 md:p-10 lg:grid-cols-[0.55fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Coverage</span>
            <h2 className="mt-4 text-3xl font-heading md:text-4xl">Delivery planning across major towns.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Buyers can quickly see that service is not limited to one city, while still being directed to confirm
              delivery costs through the quote process.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.slice(0, 18).map((region) => (
              <span key={region} className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground/70">
                {region}
              </span>
            ))}
            <Link to="/delivery" className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">
              View delivery details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-space bg-[linear-gradient(180deg,rgba(229,239,244,0.7),transparent)]">
      <div className="container">
        <SectionHeader
          tag="Proof"
          title="Trust indicators without the generic badge wall."
          description="Customer stories are presented as serious procurement feedback, reinforcing quality, response speed, and delivery support."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[2rem] border border-border bg-white p-6"
            >
              <div className="flex gap-1 text-accent" aria-label="5 star rating">
                {[...Array(5)].map((_, ratingIndex) => (
                  <span key={ratingIndex}>*</span>
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-7 text-muted-foreground">"{testimonial.text}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {testimonial.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-space">
      <div className="container grid gap-10 lg:grid-cols-[0.55fr_1fr]">
        <div>
          <SectionHeader
            tag="FAQ"
            title="Fast answers before the call."
            description="A buyer should not need to contact sales for every basic question. The FAQ reduces friction while still leading back to quote actions."
          />
          <Link to="/faq" className="btn-dark">
            View all questions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-3">
          {faqs.slice(0, 5).map((faq, index) => (
            <div key={faq.q} className="overflow-hidden rounded-[1.5rem] border border-border bg-white">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-heading text-lg"
              >
                {faq.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground">{faq.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceAnchor() {
  const sample = products[4];

  return (
    <section className="px-4 pb-8">
      <div className="container rounded-[2rem] border border-border bg-white p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">Pricing reference</p>
            <h2 className="mt-2 text-2xl font-heading md:text-3xl">
              Example: {formatTankSize(sample.litres)} from {formatPrice(sample.priceKsh)}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prices can vary with delivery location and order requirements. Use this as a quick anchor, then request
              a confirmed quotation.
            </p>
          </div>
          <Link to="/pricing" className="btn-primary">
            View full pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <FullRangeProducts />
      <TrustLedger />
      <ProductGateway />
      <CapacityPlanner />
      <WhyChooseSection />
      <UseCasesSection />
      <PriceAnchor />
      <ProcessSection />
      <DeliveryStrip />
      <TestimonialsSection />
      <FAQPreview />
      <CTABanner />
    </Layout>
  );
}
