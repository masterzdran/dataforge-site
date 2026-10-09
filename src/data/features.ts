import type { Feature } from "@/types";

export const FEATURES: Feature[] = [
  {
    title: "Country Aware",
    description:
      "Localized names, addresses, phone numbers, and identifiers for each supported country.",
    icon: "Public",
    details: [
      "Seven country providers built in",
      "Locale-correct formats and validation rules",
      "Country-specific identifiers such as NIF, CPF, and SSN",
    ],
  },
  {
    title: "Deterministic",
    description: "Repeatable generation using seeds. The same seed always produces the same data.",
    icon: "Fingerprint",
    details: [
      "Seeded pseudo-random generation",
      "Stable output across machines and runs",
      "Ideal for snapshots, diffs, and reproducible tests",
    ],
  },
  {
    title: "Extensible",
    description: "Custom generators plug into the pipeline when you need domain-specific values.",
    icon: "Extension",
    details: [
      "Register generators per type or property",
      "Override built-in behavior per country",
      "Composable with existing providers",
    ],
  },
  {
    title: "Enterprise Ready",
    description:
      "Built for professional software development: predictable, typed, and maintainable.",
    icon: "Verified",
    details: [
      "Strongly typed POCO mapping",
      "No runtime surprises or dynamic proxies",
      "Fits CI/CD and regulated environments",
    ],
  },
  {
    title: "High Performance",
    description: "Generate thousands of entities quickly without slowing down your test suite.",
    icon: "Speed",
    details: [
      "Fast in-memory generation",
      "Scales to large collections",
      "Zero allocation overhead where possible",
    ],
  },
  {
    title: "Open Source",
    description: "Community-driven development with a public roadmap and open issue tracker.",
    icon: "Code",
    details: ["MIT licensed", "Public roadmap and issues", "Contributions welcome"],
  },
];
