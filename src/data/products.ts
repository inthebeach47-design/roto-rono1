export interface Product {
  litres: number;
  priceKsh: number;
  use: string;
  category: string;
  profile: string;
  leadTime: string;
  benefits: string[];
  badge?: string;
}

export interface Solution {
  title: string;
  description: string;
  icon: "home" | "building" | "school" | "sprout" | "briefcase" | "landmark";
  sizes: string;
  outcome: string;
}

export const PHONE_NUMBER = "+254762165989";
export const WHATSAPP_BASE = `https://wa.me/${PHONE_NUMBER.replace(/^\+/, "")}`;

export const products: Product[] = [
  {
    litres: 1000,
    priceKsh: 6500,
    use: "Compact reserve for starter homes and kiosks",
    category: "Domestic",
    profile: "Daily backup",
    leadTime: "Fast local dispatch",
    benefits: ["Compact footprint", "Easy base preparation", "Ideal for single-family compounds"],
  },
  {
    litres: 2000,
    priceKsh: 10500,
    use: "Balanced storage for family homes and rentals",
    category: "Residential",
    profile: "Best seller",
    leadTime: "Fast local dispatch",
    benefits: ["Popular household size", "Fits most compounds", "Great for 5 to 8 people"],
    badge: "Popular",
  },
  {
    litres: 3000,
    priceKsh: 14500,
    use: "Extended reserve for larger homes",
    category: "Residential",
    profile: "Longer reserve",
    leadTime: "Stock dependent",
    benefits: ["Longer storage cycle", "Low maintenance finish", "UV-stabilized shell"],
  },
  {
    litres: 4000,
    priceKsh: 18500,
    use: "Reliable supply for rentals and staff housing",
    category: "Rental",
    profile: "Multi-unit support",
    leadTime: "Stock dependent",
    benefits: ["Serves multiple occupants", "Durable ribbed wall design", "Built for repeat daily use"],
  },
  {
    litres: 5000,
    priceKsh: 24500,
    use: "Workhorse capacity for busy homes and SMEs",
    category: "Commercial",
    profile: "Value capacity",
    leadTime: "Stock dependent",
    benefits: ["Strong price-to-capacity value", "Heavy-duty structure", "Stable for long storage cycles"],
    badge: "Best Value",
  },
  {
    litres: 6000,
    priceKsh: 27500,
    use: "Reliable storage for businesses and institutions",
    category: "Commercial",
    profile: "Business ready",
    leadTime: "Planned dispatch",
    benefits: ["High-volume daily supply", "Stable base design", "Suitable for schools and car washes"],
  },
  {
    litres: 8000,
    priceKsh: 32500,
    use: "Large community reserve for compounds and campuses",
    category: "Institutional",
    profile: "Institution scale",
    leadTime: "Planned dispatch",
    benefits: ["Supports shared usage", "Industrial-grade strength", "Low maintenance over time"],
  },
  {
    litres: 10000,
    priceKsh: 45500,
    use: "Heavy outdoor storage for farms and projects",
    category: "Agriculture",
    profile: "Farm favorite",
    leadTime: "Planned dispatch",
    benefits: ["Supports irrigation cycles", "Reliable livestock supply", "Rugged outdoor shell"],
    badge: "Farm Favourite",
  },
  {
    litres: 16000,
    priceKsh: 67500,
    use: "Large reserve for estates, projects, and production sites",
    category: "Industrial",
    profile: "High-volume reserve",
    leadTime: "Scheduled logistics",
    benefits: ["Massive reserve capacity", "Thick industrial-grade walls", "Strong long-term value"],
  },
  {
    litres: 20000,
    priceKsh: 98500,
    use: "Estate and commercial backup for serious demand",
    category: "Industrial",
    profile: "Estate scale",
    leadTime: "Scheduled logistics",
    benefits: ["Estate-level storage", "Backed by warranty support", "Suitable for emergency reserve planning"],
  },
  {
    litres: 24000,
    priceKsh: 135000,
    use: "Maximum capacity for institutions and public projects",
    category: "Industrial",
    profile: "Maximum capacity",
    leadTime: "Scheduled logistics",
    benefits: ["Large infrastructure reserve", "Heavy-duty ribbed walls", "Built for long-term projects"],
  },
];

export interface WhatsAppParams {
  tankSize?: number | string;
  name?: string;
  location?: string;
  use?: string;
  service?: string;
  notes?: string;
  message?: string;
}

export function buildWhatsAppMessage(params: WhatsAppParams = {}) {
  if (params.message) {
    return params.message.trim();
  }

  const opener = params.tankSize
    ? `Hello Roto Tanks, I would like a quote for a ${params.tankSize}L water tank.`
    : "Hello Roto Tanks, I would like help choosing the right water tank.";

  const details = [
    params.location ? `Location: ${params.location}.` : "",
    params.use ? `Intended use: ${params.use}.` : "",
    params.service ? `Service needed: ${params.service}.` : "",
    params.name ? `Name: ${params.name}.` : "",
    params.notes ? `Notes: ${params.notes}.` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `${opener}${details ? ` ${details}` : ""}`;
}

export function getWhatsAppLink(params: WhatsAppParams = {}) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(buildWhatsAppMessage(params))}`;
}

export const testimonials = [
  {
    name: "James Mwangi",
    role: "Homeowner, Nakuru",
    text: "We installed a 5000L tank before the dry season and it completely changed how we manage supply. The quote process was quick and the tank has been solid.",
  },
  {
    name: "Grace Wanjiku",
    role: "Landlord, Nairobi",
    text: "I needed dependable storage for rental units, not marketing talk. Roto Tanks gave clear pricing, helped with sizing, and delivered a setup that works.",
  },
  {
    name: "Peter Ochieng",
    role: "School Administrator, Kisumu",
    text: "We chose a 10000L tank for our school compound. The team guided us through the right capacity and delivery planning, and the installation day was smooth.",
  },
  {
    name: "Sarah Kimani",
    role: "Farmer, Nyandarua",
    text: "The farm tank handles irrigation and livestock needs with no stress. It feels properly built for outdoor use and the support team was responsive.",
  },
  {
    name: "David Njoroge",
    role: "Business Owner, Thika",
    text: "Fast WhatsApp response, fair pricing, and clear advice on which size would fit our operations. It felt like dealing with a serious supplier.",
  },
];

export const faqs = [
  {
    q: "What tank sizes are available?",
    a: "We offer tanks from 1000L to 24000L so you can match the right capacity to a home, rental property, school, farm, or commercial site.",
  },
  {
    q: "How do I get an accurate quote?",
    a: "Send us your preferred tank size, location, and intended use by WhatsApp or through the quote form. We use that to guide pricing and delivery planning.",
  },
  {
    q: "Do you deliver across Kenya?",
    a: "Yes. We coordinate delivery planning across major towns and counties in Kenya. Final delivery cost depends on route and tank size.",
  },
  {
    q: "What base should I prepare?",
    a: "A flat, level concrete or well-compacted platform is recommended so the tank sits evenly and performs correctly over the long term.",
  },
  {
    q: "Are the tanks suitable for direct sun?",
    a: "Yes. The tanks are built from UV-stabilized polyethylene designed for Kenyan outdoor conditions.",
  },
  {
    q: "How long can I expect the tank to last?",
    a: "With proper installation and maintenance, these tanks are built to deliver 15 to 25 years of service or more.",
  },
  {
    q: "Can I use the tank for rainwater harvesting?",
    a: "Yes. Many customers use these tanks with guttering and harvesting systems for home, farm, and commercial water collection.",
  },
  {
    q: "Do you support institutions and project buyers?",
    a: "Yes. We help schools, businesses, estates, and project teams choose the right capacity and delivery plan for larger storage needs.",
  },
];

export const solutions: Solution[] = [
  {
    title: "Homes",
    description: "Reliable daily backup for family compounds, borehole storage, and rainwater harvesting setups.",
    icon: "home",
    sizes: "1000L - 5000L",
    outcome: "Built for predictable household reserve",
  },
  {
    title: "Apartments and Rentals",
    description: "Support multiple units with stronger capacity planning and fewer supply interruptions for tenants.",
    icon: "building",
    sizes: "2000L - 10000L",
    outcome: "Keeps multi-unit properties operational",
  },
  {
    title: "Schools",
    description: "Larger-capacity tanks for school compounds where dependable daily access is non-negotiable.",
    icon: "school",
    sizes: "5000L - 16000L",
    outcome: "Supports students, kitchens, and sanitation blocks",
  },
  {
    title: "Farms",
    description: "Outdoor-ready tanks for irrigation, livestock, spray water, and general farm operations.",
    icon: "sprout",
    sizes: "5000L - 24000L",
    outcome: "Engineered for demanding outdoor use",
  },
  {
    title: "Businesses",
    description: "Commercial storage for car washes, hospitality sites, retail premises, workshops, and service yards.",
    icon: "briefcase",
    sizes: "3000L - 10000L",
    outcome: "Protects daily business continuity",
  },
  {
    title: "Institutions",
    description: "High-volume water reserve for hospitals, churches, offices, and community facilities.",
    icon: "landmark",
    sizes: "8000L - 24000L",
    outcome: "Sized for compound-wide reliability",
  },
];

export const capacityBands = [
  {
    id: "home",
    label: "Home reserve",
    range: "1000L - 3000L",
    summary: "Best for daily household backup, borehole reserve, and rainwater storage.",
    recommended: [1000, 2000, 3000],
  },
  {
    id: "rental",
    label: "Rental support",
    range: "2000L - 6000L",
    summary: "Designed for compounds serving tenants, staff houses, and multi-use homes.",
    recommended: [2000, 4000, 5000, 6000],
  },
  {
    id: "business",
    label: "Business continuity",
    range: "5000L - 10000L",
    summary: "Built for schools, SMEs, hospitality, and commercial water demand.",
    recommended: [5000, 6000, 8000, 10000],
  },
  {
    id: "industrial",
    label: "Heavy-demand reserve",
    range: "16000L - 24000L",
    summary: "Large reserve planning for estates, industrial sites, and institutional compounds.",
    recommended: [16000, 20000, 24000],
  },
];

export const trustItems = [
  {
    title: "11 stocked sizes",
    desc: "A clear capacity ladder from compact domestic tanks to industrial reserve units.",
    stat: "1000L to 24000L",
  },
  {
    title: "Weather-ready build",
    desc: "UV-stabilized polyethylene designed for demanding Kenyan outdoor conditions.",
    stat: "15 to 25 years",
  },
  {
    title: "Sales support that replies",
    desc: "Fast quote guidance through WhatsApp and phone without a complicated buying process.",
    stat: "Same-day response",
  },
  {
    title: "Delivery planning",
    desc: "We coordinate routing and site details so buyers know what to prepare before dispatch.",
    stat: "47-county reach",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Share your need",
    desc: "Tell us the tank size you want or describe the site and we will guide you to the right capacity.",
  },
  {
    step: 2,
    title: "Confirm pricing",
    desc: "We prepare a quotation using size, location, and any delivery or service requirements.",
  },
  {
    step: 3,
    title: "Prepare the site",
    desc: "We confirm base requirements and delivery access so installation day runs without surprises.",
  },
  {
    step: 4,
    title: "Approve and schedule",
    desc: "Once you approve the order, we schedule dispatch and confirm the next delivery step.",
  },
  {
    step: 5,
    title: "Receive your tank",
    desc: "Your tank is delivered with the planning support you need to complete the purchase smoothly.",
  },
];

export const regions = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Nyeri",
  "Meru",
  "Machakos",
  "Kiambu",
  "Nanyuki",
  "Naivasha",
  "Malindi",
  "Kilifi",
  "Kajiado",
  "Kitale",
  "Bungoma",
  "Kakamega",
  "Embu",
  "Garissa",
];

export const galleryItems = [
  { src: "/images/product.png", category: "Product", caption: "Single tank profile ready for quoting" },
  { src: "/images/hero-tank.png", category: "Product", caption: "Flagship product visual for sales pages" },
  { src: "/images/tank-range.jpg", category: "Range", caption: "Full lineup overview across capacities" },
  { src: "/images/product.png", category: "Homes", caption: "Domestic water storage setup" },
  { src: "/images/hero-tank.png", category: "Commercial", caption: "Commercial capacity presentation" },
  { src: "/images/tank-range.jpg", category: "Delivery", caption: "Delivery-ready product lineup" },
  { src: "/images/product.png", category: "Farms", caption: "Agricultural reserve planning" },
  { src: "/images/hero-tank.png", category: "Installations", caption: "Project-ready tank presentation" },
];

export function formatPrice(priceKsh: number) {
  return `Ksh ${priceKsh.toLocaleString()}`;
}

export function formatTankSize(litres: number) {
  return `${litres.toLocaleString()}L`;
}
