import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import CTABanner from "@/components/CTABanner";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { products } from "@/data/products";

const filters = ["All", "Domestic", "Residential", "Rental", "Commercial", "Institutional", "Agriculture", "Industrial"];

export default function Products() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = active === "All" || product.category === active;
      const query = `${product.litres} ${product.use} ${product.category} ${product.profile}`.toLowerCase();
      const matchesSearch = !search || query.includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [active, search]);

  return (
    <Layout>
      <PageIntro
        eyebrow="Tank catalog"
        title="Choose from a cleaner, more technical product range."
        description="The catalog has been redesigned around capacity, buyer type, quote action, and dispatch context so visitors can move from browsing to inquiry faster."
        highlights={["1000L - 24000L", "Quote-ready cards", "Buyer filters"]}
        metrics={[
          { label: "Available sizes", value: "11" },
          { label: "Starting from", value: "Ksh 6,500" },
          { label: "Largest tank", value: "24000L" },
          { label: "Direct actions", value: "Call + WhatsApp" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <div className="panel-surface mb-8 p-4 md:p-5">
            <div className="grid gap-4 lg:grid-cols-[360px_1fr_auto] lg:items-center">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search by size, use, or category"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="h-[3.25rem] w-full rounded-full border border-border bg-muted pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActive(filter)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      active === filter
                        ? "bg-navy text-white"
                        : "border border-border bg-white text-foreground/70 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                <SlidersHorizontal className="h-4 w-4" />
                {filtered.length} matches
              </div>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filtered.map((product, index) => (
                <ProductCard key={product.litres} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="panel-surface mx-auto max-w-xl p-8 text-center"
            >
              <h2 className="text-2xl font-heading">No matching tanks found</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Try a broader search or request help choosing the right capacity.
              </p>
              <Link to="/quote" className="btn-primary mt-6">
                Ask for sizing help
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="container">
          <SectionHeader
            tag="Catalog design"
            title="Every tank card now behaves like a sales assistant."
            description="Cards prioritize price anchor, capacity, category, dispatch note, benefits, and inquiry actions. This helps users compare without losing the next step."
          />
        </div>
      </section>

      <CTABanner
        title="Not sure which tank size fits your property?"
        description="Send your use case and location. We will guide you to the correct capacity before quoting."
      />
    </Layout>
  );
}
