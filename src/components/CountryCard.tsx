"use client";

import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import type { Country } from "@/types";
import { Reveal } from "@/components/Reveal";

export function CountryCard({ country, index = 0 }: { country: Country; index?: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Card
        sx={{
          height: "100%",
          transition: "border-color 0.2s",
          "&:hover": { borderColor: "secondary.main" },
        }}
      >
        <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            {/* ponytail: emoji-style flag via CDN png — no icon dependency */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              width={40}
              height={27}
              loading="lazy"
              style={{ borderRadius: 3, objectFit: "cover" }}
            />
            <Box>
              <Typography variant="h6" component="h3" sx={{ fontSize: "1.05rem", lineHeight: 1.2 }}>
                {country.name}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Country.{country.code}
              </Typography>
            </Box>
          </Box>

          <Typography variant="overline" sx={{ color: "text.secondary", display: "block" }}>
            Generators
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2 }}>
            {country.generators.map((generator) => (
              <Chip key={generator} label={generator} size="small" variant="outlined" />
            ))}
          </Box>

          <Typography variant="overline" sx={{ color: "text.secondary", display: "block" }}>
            Identifiers
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2 }}>
            {country.identifiers.map((identifier) => (
              <Chip
                key={identifier}
                label={identifier}
                size="small"
                color="secondary"
                variant="outlined"
              />
            ))}
          </Box>

          <Divider sx={{ my: 1.5 }} />

          <Box sx={{ display: "grid", gap: 1 }}>
            {country.sample.map((row) => (
              <Box key={row.label} sx={{ display: "flex", gap: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", minWidth: 64, pt: "2px" }}
                >
                  {row.label}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "text.primary", fontFamily: "var(--font-mono)" }}
                >
                  {row.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Reveal>
  );
}
