import type { SiteConfig } from "@/lib/types";

const P = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "Redline Signature Detailing",
  tagline: "Premium mobile auto detailing in Toronto and the GTA. Interior, exterior, paint correction and ceramic coatings.",
  category: "Mobile auto detailing",
  schemaType: "AutoWash",
  area: "Toronto and GTA, ON",
  siteUrl: "https://redline-signature-detailing.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c0262d" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mobile detailing in Toronto and the GTA",
    headline: "Premium detailing, brought to your driveway",
    subhead: "Interior deep cleans, exterior details, paint correction and ceramic coatings, done at your location. Send a DM to book your appointment.",
    images: [
      { src: "/images/post-1.jpg", alt: "Mercedes GLE 450 after a full detail and paint correction" },
      { src: "/images/post-5.jpg", alt: "BMW 230i Convertible after a full detail" },
      { src: "/images/post-4.jpg", alt: "Jet ski before and after a full detail" },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: ["Mobile, we come to you", "Paint correction and ceramic coating", "Cars, boats and jet skis", "Book by Instagram DM"],

  about: {
    title: "Detailing that comes to you",
    body: [
      "Redline Signature Detailing is a professional mobile auto detailing service, brought directly to your location across Toronto and the GTA.",
      "From deep interior cleaning and exterior detailing to paint correction and ceramic protection, every vehicle gets the attention to detail that makes the difference.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Lexus RX interior before and after a deep clean" },
  },

  menu: {
    label: "Services",
    title: "Detailing services",
    intro: "Every job is quoted by DM based on your vehicle and its condition.",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM with your vehicle and the service you want for a quote.",
    groups: [
      {
        title: "Interior and exterior",
        items: [
          { name: "Interior deep clean", description: "Deep cleaning, detailed vacuuming and leather care.", href: P + "DeppjekDwbO/" },
          { name: "Exterior detail", description: "Exterior wash, deep cleaning and wheels.", href: P + "DdKQUlcj0DQ/" },
          { name: "Full detail packages", description: "Complete interior and exterior detail.", href: P + "Depz57aFkby/" },
        ],
      },
      {
        title: "Paint and protection",
        items: [
          { name: "Paint correction", description: "Paint enhancement to bring the finish back.", href: P + "Depz57aFkby/" },
          { name: "Ceramic coating", description: "Ceramic protection for a lasting finish." },
        ],
      },
      {
        title: "Marine",
        items: [
          { name: "Boat and jet ski detailing", description: "Full detail, one step polish and ceramic protection.", href: P + "DdKYJkoj7Q6/" },
        ],
      },
    ],
  },

  gallery: {
    title: "Before and after",
    items: [
      { src: "/images/post-1.jpg", width: 512, height: 682, alt: "Mercedes GLE 450 full detail", caption: "GLE 450 full detail and paint correction", href: P + "Depz57aFkby/" },
      { src: "/images/post-2.jpg", width: 1312, height: 1198, alt: "BMW 330 interior before and after", caption: "BMW 330 interior deep clean", href: P + "DeppjekDwbO/" },
      { src: "/images/post-4.jpg", width: 1024, height: 1365, alt: "Jet ski before and after", caption: "Jet ski full detail and ceramic", href: P + "DdKYJkoj7Q6/" },
      { src: "/images/post-5.jpg", width: 1536, height: 1024, alt: "BMW 230i Convertible full detail", caption: "BMW 230i Convertible full detail", href: P + "DdKQUlcj0DQ/" },
      { src: "/images/post-3.jpg", width: 1122, height: 1402, alt: "Work van interior before and after", caption: "Work van interior deep clean", href: P + "Depm5w_DxQM/" },
      { src: "/images/post-6.jpg", width: 1024, height: 682, alt: "Lexus RX interior before and after", caption: "Lexus RX interior detail", href: P + "DcVCTVpDfEE/" },
      { src: "/images/post-7.jpg", width: 1024, height: 682, alt: "GLE interior before and after", caption: "GLE interior refresh", href: P + "DcU8FRDjdZ6/" },
    ],
  },

  instagram: {
    handle: "redlinesignaturedetailing",
    embeds: ["https://www.instagram.com/p/Depz57aFkby/"],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Redline Signature Detailing! I would like to book a detail.\nVehicle:\nService:\nPreferred date:\nLocation (city):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Do you come to me?", a: "Yes. Redline Signature Detailing is a mobile service across Toronto and the GTA, brought directly to your location." },
    { q: "How do I book?", a: "Send a DM on Instagram with your vehicle, the service you want and your preferred date." },
    { q: "Do you detail boats and jet skis?", a: "Yes. Jet skis and boats can get a full detail, polish and ceramic protection." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto and the GTA, Ontario",
  },

  seo: {
    title: "Redline Signature Detailing | Mobile auto detailing in Toronto",
    description: "Premium mobile auto detailing in Toronto and the GTA: interior deep cleans, exterior details, paint correction and ceramic coatings. DM on Instagram to book.",
    keywords: ["mobile detailing Toronto", "ceramic coating GTA", "paint correction Toronto", "car detailing York Region"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
