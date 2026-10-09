"use client";

import {
  CheckCircleOutlined as CheckIcon,
  GitHub as GitHubIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { Box, Button, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { CodeShowcase } from "@/components/CodeShowcase";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { SectionContainer } from "@/components/SectionContainer";
import { COUNTRIES } from "@/data/countries";
import { CODE_EXAMPLES, USE_CASES, WHY_POINTS } from "@/data/examples";
import { FEATURES } from "@/data/features";
import { GITHUB_URL } from "@/utils/site";

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <Reveal>
      <Box sx={{ mb: 5, maxWidth: 720 }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ fontSize: { xs: "1.6rem", md: "2.1rem" }, mb: 1.5 }}
        >
          {title}
        </Typography>
        {description && (
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Reveal>
  );
}

export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <SectionHeading
        title="Everything you need for realistic test data"
        description="Six capabilities that make DataForger a drop-in replacement for hand-written fixtures."
      />
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        }}
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </Box>
    </SectionContainer>
  );
}

export function CountriesSection() {
  return (
    <SectionContainer sx={{ borderTop: "1px solid", borderColor: "divider" }}>
      <SectionHeading
        title="Seven country providers"
        description="Localized names, addresses, formats, and national identifiers — out of the box."
      />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
        {COUNTRIES.map((country) => (
          <Reveal key={country.code}>
            <Card
              component={Link}
              href="/countries/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.5,
                py: 1.5,
                textDecoration: "none",
                color: "text.primary",
                transition: "border-color 0.2s",
                "&:hover": { borderColor: "secondary.main" },
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={country.flag}
                alt=""
                width={28}
                height={19}
                loading="lazy"
                style={{ borderRadius: 2, objectFit: "cover" }}
              />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {country.name}
              </Typography>
            </Card>
          </Reveal>
        ))}
      </Box>
      <Button component={Link} href="/countries/" endIcon={<LanguageIcon />}>
        Explore all countries
      </Button>
    </SectionContainer>
  );
}

export function ExamplesSection() {
  const [tab, setTab] = useState(0);
  return (
    <SectionContainer sx={{ borderTop: "1px solid", borderColor: "divider" }}>
      <SectionHeading
        title="One fluent API"
        description="Pick a country, describe your entity, call Create. Language-aware examples below."
      />
      <Reveal>
        <Tabs
          value={tab}
          onChange={(_, value: number) => setTab(value)}
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="Code examples"
          sx={{ mb: 2.5 }}
        >
          {CODE_EXAMPLES.map((example) => (
            <Tab key={example.id} label={example.label} id={`example-tab-${example.id}`} />
          ))}
        </Tabs>
        <Box role="tabpanel" aria-labelledby={`example-tab-${CODE_EXAMPLES[tab].id}`}>
          <CodeShowcase example={CODE_EXAMPLES[tab]} />
        </Box>
      </Reveal>
    </SectionContainer>
  );
}

export function WhySection() {
  return (
    <SectionContainer sx={{ borderTop: "1px solid", borderColor: "divider" }}>
      <SectionHeading
        title="Why DataForger"
        description="Test data should be a solved problem, not a maintenance burden."
      />
      <Box
        sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}
      >
        {WHY_POINTS.map((point, index) => (
          <Reveal key={point.title} delay={(index % 2) * 0.08}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CheckIcon color="success" sx={{ mt: 0.25 }} />
              <Box>
                <Typography variant="h6" component="h3" sx={{ fontSize: "1.05rem", mb: 0.5 }}>
                  {point.title}
                </Typography>
                <Typography variant="body2">{point.description}</Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </SectionContainer>
  );
}

export function UseCasesSection() {
  return (
    <SectionContainer sx={{ borderTop: "1px solid", borderColor: "divider" }}>
      <SectionHeading
        title="Enterprise use cases"
        description="Where synthetic data earns its place in professional pipelines."
      />
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        }}
      >
        {USE_CASES.map((useCase, index) => (
          <Reveal key={useCase.title} delay={(index % 3) * 0.08}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
                <Typography variant="h6" component="h3" sx={{ fontSize: "1rem", mb: 1 }}>
                  {useCase.title}
                </Typography>
                <Typography variant="body2">{useCase.description}</Typography>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </Box>
    </SectionContainer>
  );
}

export function OpenSourceSection() {
  return (
    <SectionContainer sx={{ borderTop: "1px solid", borderColor: "divider" }}>
      <Reveal>
        <Card
          sx={{
            background:
              "linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(6,182,212,0.08) 100%)",
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 }, textAlign: "center", "&:last-child": { pb: 4 } }}>
            <GitHubIcon sx={{ fontSize: 40, mb: 2, color: "text.primary" }} />
            <Typography
              component="h2"
              variant="h3"
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, mb: 1.5 }}
            >
              Open source at heart
            </Typography>
            <Typography sx={{ maxWidth: 640, mx: "auto", mb: 3 }}>
              DataForger is MIT licensed and developed in the open. Report issues, propose country
              providers, or ship custom generators — the roadmap lives on GitHub.
            </Typography>
            <Button
              href={GITHUB_URL}
              variant="contained"
              startIcon={<GitHubIcon />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </Button>
          </CardContent>
        </Card>
      </Reveal>
    </SectionContainer>
  );
}
