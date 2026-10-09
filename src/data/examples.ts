import type { CodeExample } from "@/types";

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: "person",
    label: "Person",
    filename: "PersonDemo.cs",
    lang: "csharp",
    code: `var person = DataForge
    .ForCountry(Country.PT)
    .Create<Person>();

Console.WriteLine(person.Name);
// Ana Martins`,
  },
  {
    id: "company",
    label: "Company",
    filename: "CompanyDemo.cs",
    lang: "csharp",
    code: `var companies = DataForge
    .ForCountry(Country.US)
    .Create<Company>(500);

// 500 localized US companies`,
  },
  {
    id: "seeded",
    label: "Seeded",
    filename: "SeededDemo.cs",
    lang: "csharp",
    code: `var customer = DataForge
    .ForCountry(Country.BR)
    .WithSeed(123)
    .Create<Customer>();

// Same seed -> identical customer, every run`,
  },
];

export const HERO_EXAMPLE: CodeExample = {
  id: "hero",
  label: "Quick start",
  filename: "Program.cs",
  lang: "csharp",
  code: `var customers =
    DataForge
        .ForCountry(Country.PT)
        .Create<Customer>(100);`,
};

export const USE_CASES = [
  {
    title: "Development & Testing",
    description:
      "Seed databases with realistic fixtures instead of hand-written rows and brittle CSV files.",
  },
  {
    title: "API Mocking",
    description: "Return believable, schema-correct responses that mirror production data shapes.",
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Deterministic seeds keep integration tests reproducible across every pipeline run.",
  },
  {
    title: "Demos & Prototypes",
    description:
      "Populate demos with locale-accurate data so stakeholders recognize their own market.",
  },
  {
    title: "Load & Performance Testing",
    description: "Generate thousands of unique entities to stress indexes, queries, and search.",
  },
  {
    title: "Privacy-Safe Workflows",
    description:
      "Synthetic data carries no PII, simplifying sharing across teams and environments.",
  },
];

export const WHY_POINTS = [
  {
    title: "No more hand-written fixtures",
    description: "Replace scattered seed files and hardcoded test data with one fluent API.",
  },
  {
    title: "Locales that actually match",
    description:
      "Names, addresses, formats, and identifiers follow each country's real conventions.",
  },
  {
    title: "Reproducible by design",
    description: "Seeded generation means a failing test fails for the same reason, every time.",
  },
  {
    title: "Zero runtime footprint",
    description: "A plain .NET library. No database, no service, no external API calls.",
  },
];
