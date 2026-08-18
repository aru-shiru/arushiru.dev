export interface Work {
  /** URL-safe identifier used for the detail page route: /works/<slug> */
  slug: string;
  name: string;
  /** Short one-line summary used on cards. */
  summary: string;
  /** Slightly longer explanation used on the works index page. */
  description: string;
  /** Full narrative shown on the detail page, one entry per paragraph. */
  overview: string[];
  /** Key contributions / outcomes shown as bullets on the detail page. */
  highlights: string[];
  /** Short labels shown as chips on cards. */
  tags: string[];
  /** Full technology stack shown on the detail page. */
  stack: string[];
  /** Headline metric shown as a badge. */
  metric: string;
  /** High-level category, e.g. "Mobile", "Web", "Backend". */
  category: string;
  /** Whether this work appears in the "Selected work" section on the homepage. */
  featured: boolean;
}

export const works: Work[] = [
  {
    slug: "e-partai",
    name: "e-Partai",
    summary:
      "Political party management system serving 1.6M members with 50K+ Play Store installs.",
    description:
      "A large-scale membership and party operations platform combining a Flutter mobile app with a modular NestJS backend, serving 1.6 million members.",
    overview: [
      "e-Partai is a nationwide political party management system built to onboard, verify, and coordinate a membership base of over 1.6 million people. The mobile application has surpassed 50,000 installs on the Play Store.",
      "The backend is organised as an Nx monorepo composed of 15 independent API modules, using functional error handling patterns to keep failure paths explicit and predictable across services.",
      "The platform integrates an AI analytics chatbot for surfacing membership insights, and uses Meilisearch to deliver fast, typo-tolerant search across the large member dataset.",
    ],
    highlights: [
      "Architected an Nx monorepo with 15 modular API services",
      "Adopted functional error handling for predictable failure paths",
      "Integrated an AI-powered analytics chatbot",
      "Delivered fast member search with Meilisearch",
    ],
    tags: ["Flutter", "NestJS", "Nx", "Meilisearch", "AI"],
    stack: ["Flutter", "NestJS", "Nx", "Meilisearch", "PostgreSQL", "AI/LLM"],
    metric: "1.6M members",
    category: "Mobile & Backend",
    featured: true,
  },
  {
    slug: "pantau-relawan",
    name: "Pantau Relawan",
    summary:
      "Electoral volunteer management platform coordinating 300K volunteers across 40 organizations.",
    description:
      "An offline-first volunteer coordination platform that keeps 300,000 field volunteers across 40 organizations in sync, even on unreliable networks.",
    overview: [
      "Pantau Relawan coordinates a network of 300,000 electoral volunteers spread across 40 partner organizations, giving each organization its own isolated view of its people and activity.",
      "The Flutter mobile app is built around Riverpod for state management and an offline-first SQLite sync layer, so volunteers can keep working in the field and reconcile data once connectivity returns.",
      "A multi-tenant Firebase architecture underpins the platform, isolating data per organization while sharing a common operational core.",
    ],
    highlights: [
      "Built an offline-first SQLite sync layer for field reliability",
      "Managed complex app state with Riverpod",
      "Designed a multi-tenant Firebase architecture",
      "Scaled coordination to 300K volunteers across 40 organizations",
    ],
    tags: ["Flutter", "Riverpod", "Firebase", "SQLite"],
    stack: ["Flutter", "Riverpod", "Firebase", "SQLite", "Offline-first"],
    metric: "300K volunteers",
    category: "Mobile",
    featured: true,
  },
  {
    slug: "e-watch-lsi",
    name: "e-Watch LSI",
    summary:
      "Political fieldwork monitoring platform processing 500K+ submissions with real-time dashboards.",
    description:
      "A field-monitoring platform that ingests 500,000+ submissions and turns them into real-time dashboards and automated reports.",
    overview: [
      "e-Watch LSI is a fieldwork monitoring platform that has processed more than 500,000 submissions from the field, giving analysts a live picture of activity as it happens.",
      "The web experience is a real-time Nuxt dashboard with automated report generation, letting stakeholders move from raw submissions to shareable reports without manual collation.",
      "On mobile, an offline-first queue captures submissions in low-connectivity environments and flushes them reliably once a connection is available.",
    ],
    highlights: [
      "Built a real-time Nuxt/Vue analytics dashboard",
      "Automated report generation from live submissions",
      "Implemented an offline-first mobile submission queue",
      "Processed 500K+ field submissions",
    ],
    tags: ["Nuxt", "Vue", "Offline-first", "Real-time"],
    stack: ["Nuxt", "Vue", "Real-time", "Offline-first"],
    metric: "500K submissions",
    category: "Web & Mobile",
    featured: true,
  },
  {
    slug: "narrative-phone",
    name: "Narrative Phone",
    summary:
      "iOS/Android healthcare video calling application built with the Zoom Video SDK.",
    description:
      "A cross-platform native healthcare video calling app built on the Zoom Video SDK for reliable clinician–patient communication.",
    overview: [
      "Narrative Phone is a healthcare video calling application for iOS and Android, built to support dependable communication between clinicians and patients.",
      "The app is built natively with Swift and Kotlin and integrates the Zoom Video SDK to deliver a high-quality, low-friction calling experience.",
      "I led the native development effort across both platforms, aligning the iOS and Android implementations on a shared feature set.",
    ],
    highlights: [
      "Led native iOS (Swift) and Android (Kotlin) development",
      "Integrated the Zoom Video SDK for healthcare calls",
      "Delivered a consistent experience across both platforms",
    ],
    tags: ["Swift", "Kotlin", "Zoom SDK", "Healthcare"],
    stack: ["Swift", "Kotlin", "Zoom Video SDK"],
    metric: "Healthcare",
    category: "Mobile",
    featured: true,
  },
  {
    slug: "sds",
    name: "SDS",
    summary: "Building services management platform with 2K+ daily active users.",
    description:
      "A building services management platform with 2,000+ daily active users and hardware biometric integration.",
    overview: [
      "SDS is a building services management platform used daily by more than 2,000 people to manage on-site operations.",
      "The mobile app is built with React Native and Expo on top of a Supabase backend, keeping the stack lean while supporting real-time data needs.",
      "It integrates directly with biometric scanner hardware via the iClock protocol, bridging physical access devices with the digital platform.",
    ],
    highlights: [
      "Built with React Native + Expo on a Supabase backend",
      "Integrated biometric scanners via the iClock protocol",
      "Supported 2K+ daily active users",
    ],
    tags: ["React Native", "Expo", "Supabase", "Biometrics"],
    stack: ["React Native", "Expo", "Supabase", "iClock protocol"],
    metric: "2K+ daily users",
    category: "Mobile",
    featured: true,
  },
  {
    slug: "simplepol",
    name: "SimplePol",
    summary:
      "Health check management system replacing a legacy app with 1.5M installs.",
    description:
      "A health check management system that modernised a legacy application with a 1.5M-install user base.",
    overview: [
      "SimplePol is a health check management system built to replace a legacy application that had reached 1.5 million installs, carrying that user base into a modern experience.",
      "It uses passwordless authentication to lower sign-in friction, and AI-powered OCR to read ID cards and reduce manual data entry.",
      "The backend is built on Laravel, providing a maintainable foundation for the health check workflows.",
    ],
    highlights: [
      "Replaced a legacy app with a 1.5M-install user base",
      "Implemented passwordless authentication",
      "Added AI-powered ID card OCR",
      "Built a Laravel backend architecture",
    ],
    tags: ["Laravel", "AI/OCR", "Passwordless Auth"],
    stack: ["Laravel", "AI/OCR", "Passwordless Auth"],
    metric: "1.5M legacy users",
    category: "Mobile & Backend",
    featured: true,
  },
  {
    slug: "e-hibah-polri",
    name: "e-Hibah Polri",
    summary: "Grant management system for the Indonesian National Police.",
    description:
      "A grant management system for the Indonesian National Police, featuring multi-level approvals and a full UI rewrite.",
    overview: [
      "e-Hibah Polri is a grant management system built for the Indonesian National Police to administer grant workflows end to end.",
      "It implements multi-level approval workflows so that requests move through the appropriate chain of sign-off before being finalised.",
      "Security is reinforced with TOTP-based two-factor authentication, and the interface was fully rewritten using Livewire for a more responsive experience.",
    ],
    highlights: [
      "Designed multi-level approval workflows",
      "Added TOTP-based two-factor authentication",
      "Delivered a full Livewire-based UI rewrite",
    ],
    tags: ["Laravel", "Livewire", "TOTP 2FA"],
    stack: ["Laravel", "Livewire", "TOTP 2FA"],
    metric: "Government",
    category: "Web",
    featured: false,
  },
  {
    slug: "advansia",
    name: "Advansia",
    summary:
      "Agricultural sales force automation handling 50K+ records with supply chain tracking.",
    description:
      "An offline-first agricultural sales force automation app handling 50,000+ records with end-to-end supply chain tracking.",
    overview: [
      "Advansia is a sales force automation platform for the agricultural sector, managing over 50,000 records while tracking activity across the supply chain.",
      "The React Native mobile app is offline-first, so field sales teams can keep operating without a reliable connection.",
      "Behind it sits an architecture of 17 Firebase microservices that together cover the complete agricultural workflow.",
    ],
    highlights: [
      "Built an offline-first React Native field app",
      "Architected 17 Firebase microservices",
      "Tracked the complete agricultural supply chain workflow",
      "Managed 50K+ records",
    ],
    tags: ["React Native", "Firebase", "Offline-first"],
    stack: ["React Native", "Firebase", "Offline-first"],
    metric: "50K+ records",
    category: "Mobile",
    featured: false,
  },
];

export const featuredWorks = works.filter((w) => w.featured);
