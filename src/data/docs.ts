import type { Doc } from "@/types";

export const DOCS: Doc[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "What DataForge is, how it fits into your workflow, and your first generated entity.",
    blocks: [
      {
        type: "p",
        text: "DataForge is a .NET library for generating realistic, deterministic, country-specific synthetic data. Use it to seed databases, mock APIs, power demos, and feed load tests without ever touching production data.",
      },
      { type: "h2", text: "How it works" },
      {
        type: "list",
        items: [
          "Pick a country provider with `ForCountry`.",
          "Describe the entity as a plain C# class.",
          "Call `Create<T>()` — DataForge fills every supported property.",
        ],
      },
      { type: "h2", text: "First example" },
      {
        type: "code",
        lang: "csharp",
        code: `var person = DataForge
    .ForCountry(Country.PT)
    .Create<Person>();

// Name: Ana Martins
// City: Lisboa
// Phone: +351 912 345 678`,
      },
      {
        type: "note",
        text: "Next: install the package, then read Basic Usage to learn the core API.",
      },
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Install DataForge from NuGet with the .NET CLI.",
    blocks: [
      { type: "p", text: "DataForge ships as a single NuGet package." },
      {
        type: "code",
        lang: "bash",
        code: `dotnet add package DataForge`,
      },
      { type: "h2", text: "Requirements" },
      {
        type: "list",
        items: [".NET 8 or later", "No additional configuration or services required"],
      },
      { type: "h2", text: "Verify the install" },
      {
        type: "code",
        lang: "csharp",
        code: `using DataForge;

var person = DataForge.ForCountry(Country.PT).Create<Person>();`,
      },
      {
        type: "note",
        text: "DataForge is a plain library: no database, no API keys, no runtime dependencies.",
      },
    ],
  },
  {
    slug: "basic-usage",
    title: "Basic Usage",
    description: "The core fluent API: ForCountry, Create, and chaining.",
    blocks: [
      {
        type: "p",
        text: "Every generation starts with a country provider and ends with `Create<T>()`.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `var person = DataForge
    .ForCountry(Country.PT)
    .Create<Person>();`,
      },
      { type: "h2", text: "Creating one entity" },
      {
        type: "p",
        text: "`Create<T>()` returns a single instance with every mapped property populated.",
      },
      { type: "h2", text: "Creating many entities" },
      {
        type: "code",
        lang: "csharp",
        code: `var customers = DataForge
    .ForCountry(Country.US)
    .Create<Customer>(100);`,
      },
      { type: "h2", text: "Chaining" },
      {
        type: "p",
        text: "The builder is immutable and chainable — add options in any order before calling `Create<T>()`.",
      },
    ],
  },
  {
    slug: "country-providers",
    title: "Country Providers",
    description:
      "Supported countries, their enum values, and what localization each provider applies.",
    blocks: [
      {
        type: "p",
        text: "A country provider localizes names, addresses, phone formats, postal codes, and national identifiers.",
      },
      { type: "h2", text: "Available countries" },
      {
        type: "code",
        lang: "csharp",
        code: `Country.PT // Portugal
Country.ES // Spain
Country.FR // France
Country.DE // Germany
Country.GB // United Kingdom
Country.US // United States
Country.BR // Brazil`,
      },
      { type: "h2", text: "Selecting a provider" },
      {
        type: "code",
        lang: "csharp",
        code: `var order = DataForge
    .ForCountry(Country.DE)
    .Create<Order>();`,
      },
      {
        type: "note",
        text: "The provider applies country-specific validation rules, so generated identifiers such as NIF or CPF match their real check-digit formats.",
      },
    ],
  },
  {
    slug: "entity-generators",
    title: "Entity Generators",
    description: "How DataForge maps your POCOs and which property types it fills.",
    blocks: [
      {
        type: "p",
        text: "Entities are ordinary C# classes. DataForge matches properties by name and type and fills them with localized values.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `public class Person
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public Address Address { get; set; }
}`,
      },
      { type: "h2", text: "Supported property types" },
      {
        type: "list",
        items: [
          "`string` — names, emails, addresses, identifiers",
          "Numeric types — ids, quantities, amounts",
          "`DateTime` — dates inside a sensible range",
          "Nested classes — recursively generated",
          "Enums — randomly picked from your own values",
        ],
      },
      { type: "h2", text: "Naming convention" },
      {
        type: "p",
        text: "Property names drive generator selection: `PostalCode`, `CompanyName`, and `VatNumber` each resolve to a country-aware generator automatically.",
      },
    ],
  },
  {
    slug: "collection-generation",
    title: "Collection Generation",
    description: "Generate lists and large datasets in a single call.",
    blocks: [
      {
        type: "p",
        text: "Pass a count to `Create<T>()` to generate a collection.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `var users = DataForge
    .ForCountry(Country.GB)
    .Create<User>(1_000);`,
      },
      { type: "h2", text: "Uniqueness" },
      {
        type: "p",
        text: "Collection members are generated with distinct values per property, so keys and identifiers stay unique across the set.",
      },
      { type: "h2", text: "Performance" },
      {
        type: "p",
        text: "Generation runs fully in memory. Tens of thousands of entities generate in milliseconds — large enough for load tests and search indexing.",
      },
    ],
  },
  {
    slug: "deterministic-generation",
    title: "Deterministic Generation",
    description: "Use seeds to get identical data on every run.",
    blocks: [
      {
        type: "p",
        text: "Call `WithSeed()` to make generation reproducible. The same seed and country always produce the same data.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `var customer = DataForge
    .ForCountry(Country.BR)
    .WithSeed(123)
    .Create<Customer>();

// Run it anywhere, any number of times:
// identical customer every time`,
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "list",
        items: [
          "Snapshot tests stay stable across machines",
          "Failing CI runs reproduce exactly",
          "Seed data survives migrations and rebuilds",
        ],
      },
      {
        type: "note",
        text: "Without a seed, DataForge picks a random one — each run gives fresh data.",
      },
    ],
  },
  {
    slug: "custom-generators",
    title: "Custom Generators",
    description: "Extend DataForge with generators for your own domain values.",
    blocks: [
      {
        type: "p",
        text: "When a built-in generator does not cover your domain, register your own for a type or property.",
      },
      {
        type: "code",
        lang: "csharp",
        code: `public class LicensePlateGenerator : Generator<string>
{
    public override string Generate(GeneratorContext context)
        => $"XX-{context.Random.Next(1000, 9999)}";
}

var vehicles = DataForge
    .ForCountry(Country.PT)
    .Use(new LicensePlateGenerator())
    .Create<Vehicle>(50);`,
      },
      { type: "h2", text: "When to use custom generators" },
      {
        type: "list",
        items: [
          "Domain-specific codes and SKUs",
          "Company-internal identifiers",
          "Overriding a built-in generator for one project",
        ],
      },
      {
        type: "note",
        text: "Custom generators participate in seeded generation, so they stay deterministic too.",
      },
    ],
  },
  {
    slug: "api-reference",
    title: "API Reference",
    description: "Every method on the DataForge builder, at a glance.",
    blocks: [
      { type: "h2", text: "Builder methods" },
      {
        type: "list",
        items: [
          "`ForCountry(Country country)` — selects the country provider and returns a builder",
          "`WithSeed(int seed)` — makes all following generation deterministic",
          "`Use(Generator<T> generator)` — registers a custom generator",
          "`Create<T>()` — generates one instance of `T`",
          "`Create<T>(int count)` — generates a collection of `T`",
        ],
      },
      { type: "h2", text: "Country enum" },
      {
        type: "list",
        items: [
          "`Country.PT`, `Country.ES`, `Country.FR`, `Country.DE`",
          "`Country.GB`, `Country.US`, `Country.BR`",
        ],
      },
      { type: "h2", text: "Example" },
      {
        type: "code",
        lang: "csharp",
        code: `var orders = DataForge
    .ForCountry(Country.FR)
    .WithSeed(42)
    .Create<Order>(500);`,
      },
    ],
  },
];

export const DOCS_SLUGS = DOCS.map((doc) => doc.slug);
