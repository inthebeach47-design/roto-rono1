import { MessageCircle, Phone } from "lucide-react";

import { PHONE_NUMBER, getWhatsAppLink } from "@/data/products";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-navy text-white shadow-[0_18px_45px_-25px_rgba(8,25,40,0.9)] transition hover:-translate-y-1 hover:bg-primary"
        aria-label="Call Roto Tanks"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-[0_18px_45px_-25px_rgba(8,25,40,0.9)] transition hover:-translate-y-1 hover:bg-[#168247]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
