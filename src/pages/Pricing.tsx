import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { PHONE_NUMBER, formatPrice, formatTankSize, getWhatsAppLink, products } from "@/data/products";

export default function Pricing() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Pricing"
        title="Transparent price anchors with a clear path to final quote."
        description="The pricing page is now structured like a procurement sheet: size, category, use case, price, dispatch note, and quote action are easy to scan."
        highlights={["Ksh price anchors", "Quote confirmation", "Delivery variable"]}
        metrics={[
          { label: "Entry tank", value: formatPrice(products[0].priceKsh) },
          { label: "Popular size", value: "2000L" },
          { label: "Best value", value: "5000L" },
          { label: "Max capacity", value: "24000L" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_30px_90px_-65px_rgba(8,25,40,0.75)]">
            <div className="hidden lg:block">
              <table className="w-full border-collapse">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[0.26em]">Tank</th>
                    <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[0.26em]">Price from</th>
                    <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[0.26em]">Best fit</th>
                    <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[0.26em]">Dispatch</th>
                    <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-[0.26em]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <motion.tr
                      key={product.litres}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.025 }}
                      className="border-b border-border transition hover:bg-muted/60"
                    >
                      <td className="px-6 py-5">
                        <p className="text-2xl font-heading text-foreground">{formatTankSize(product.litres)}</p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">{product.category}</p>
                      </td>
                      <td className="px-6 py-5 text-xl font-heading text-primary">{formatPrice(product.priceKsh)}</td>
                      <td className="max-w-sm px-6 py-5 text-sm leading-6 text-muted-foreground">{product.use}</td>
                      <td className="px-6 py-5 text-sm font-semibold text-foreground/75">{product.leadTime}</td>
                      <td className="px-6 py-5 text-right">
                        <a
                          href={getWhatsAppLink({ tankSize: product.litres, use: product.category })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary px-4 py-2.5"
                        >
                          Quote <ArrowRight className="h-4 w-4" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 p-4 lg:hidden">
              {products.map((product, index) => (
                <motion.article
                  key={product.litres}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[1.5rem] border border-border bg-muted/40 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-2xl font-heading">{formatTankSize(product.litres)}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                    <span className="text-xl font-heading text-primary">{formatPrice(product.priceKsh)}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.use}</p>
                  <ul className="mt-4 grid gap-2">
                    {product.benefits.slice(0, 2).map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                    <a
                      href={getWhatsAppLink({ tankSize: product.litres })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center"
                    >
                      <MessageCircle className="h-4 w-4" /> Quote
                    </a>
                    <a href={`tel:${PHONE_NUMBER}`} className="btn-secondary px-4" aria-label="Call sales">
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="text-sm leading-6 text-muted-foreground">
              Prices are displayed as buying anchors. Final quotation may vary based on location, delivery route,
              current availability, and service requirements.
            </p>
            <Link to="/quote" className="btn-dark">
              Request confirmed quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a project or bulk tank quotation?"
        description="Share the site, capacity range, and delivery location so sales can advise on the best configuration."
      />
    </Layout>
  );
}
