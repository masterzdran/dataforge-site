"use client";

import {
  Code as CodeIcon,
  Extension as ExtensionIcon,
  Fingerprint as FingerprintIcon,
  Public as PublicIcon,
  Speed as SpeedIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import type { Feature } from "@/types";
import { Reveal } from "@/components/Reveal";

const ICONS: Record<string, typeof CodeIcon> = {
  Public: PublicIcon,
  Fingerprint: FingerprintIcon,
  Extension: ExtensionIcon,
  Verified: VerifiedIcon,
  Speed: SpeedIcon,
  Code: CodeIcon,
};

export function FeatureCard({ feature, index = 0 }: { feature: Feature; index?: number }) {
  const Icon = ICONS[feature.icon] ?? CodeIcon;
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <Card
        sx={{
          height: "100%",
          transition: "border-color 0.2s, transform 0.2s",
          "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)" },
        }}
      >
        <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              bgcolor: "rgba(99, 102, 241, 0.15)",
              color: "primary.light",
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Typography variant="h6" component="h3" sx={{ fontSize: "1.1rem", mb: 1 }}>
            {feature.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: feature.details ? 1.5 : 0 }}>
            {feature.description}
          </Typography>
          {feature.details && (
            <Box
              component="ul"
              sx={{
                m: 0,
                pl: 2.5,
                "& li": { color: "text.secondary", fontSize: "0.85rem", mb: 0.5 },
              }}
            >
              {feature.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Reveal>
  );
}
