"use client";

import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { Box, Button, Chip, Container, Divider, Typography } from "@mui/material";
import { CallToAction } from "@/components/CallToAction";
import { CodeBlock } from "@/components/CodeShowcase";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { GITHUB_URL } from "@/utils/site";

const ROADMAP = [
  {
    status: "done",
    label: "v1.0",
    text: "Core fluent API, seven country providers, seeded generation",
  },
  {
    status: "done",
    label: "v1.1",
    text: "Collection generation, uniqueness guarantees, performance pass",
  },
  {
    status: "next",
    label: "Next",
    text: "Custom generator registry, more entity generators (IBAN, license plates)",
  },
  { status: "later", label: "Later", text: "Additional countries, EF Core seeding helpers, CLI" },
] as const;

const MOTIVATION = [
  "Hand-written fixtures rot the moment the schema changes.",
  "Random data generators ignore locale rules — addresses and identifiers stop looking real.",
  "Most solutions either hit a network service or bring a database dependency.",
  "Tests that generate different data on every run cannot be reproduced or debugged.",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 7 }}>
      <Typography
        component="h2"
        variant="h3"
        sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, mb: 2.5 }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Why DataForge exists"
        description="A synthetic data library built the way enterprise .NET teams actually work."
      />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Reveal>
          <Section title="Vision">
            <Typography sx={{ lineHeight: 1.8, maxWidth: 760 }}>
              Make realistic test data a one-liner. DataForge should be the default first import a
              .NET team reaches for when a database, mock, or demo needs believable data — with zero
              services to run and zero privacy exposure.
            </Typography>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Motivation">
            <Box
              component="ul"
              sx={{
                pl: 3,
                maxWidth: 760,
                "& li": { mb: 1.5, color: "text.secondary", lineHeight: 1.7 },
              }}
            >
              {MOTIVATION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Box>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Architecture">
            <Typography sx={{ mb: 2.5, maxWidth: 760, lineHeight: 1.8 }}>
              Feature-based structure with a fluent builder at the core: country providers supply
              localized datasets, generators map them onto your POCOs, and the seed engine keeps
              everything reproducible.
            </Typography>
            <CodeBlock
              lang="bash"
              filename="Project structure"
              code={`DataForge/
├── Builder/        # fluent API: ForCountry, WithSeed, Create
├── Countries/      # PT ES FR DE GB US BR providers
├── Generators/     # built-in entity generators
├── Extensibility/  # custom generator hooks
└── Seeding/        # deterministic seed engine`}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Roadmap">
            <Box sx={{ display: "grid", gap: 2 }}>
              {ROADMAP.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    bgcolor: "background.paper",
                  }}
                >
                  <Chip
                    label={item.label}
                    size="small"
                    color={
                      item.status === "done"
                        ? "success"
                        : item.status === "next"
                          ? "primary"
                          : "default"
                    }
                    variant={item.status === "later" ? "outlined" : "filled"}
                  />
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Contributing">
            <Typography sx={{ mb: 2.5, maxWidth: 760, lineHeight: 1.8 }}>
              Contributions are welcome: new country providers, generators, docs, or bug reports.
              Start by reading the contributing guide, then open an issue or pull request on GitHub.
            </Typography>
            <Divider sx={{ mb: 2.5 }} />
            <Button
              href={GITHUB_URL}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </Button>
          </Section>
        </Reveal>
      </Container>
      <CallToAction />
    </>
  );
}
