"use client";

import { GitHub as GitHubIcon } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { GITHUB_URL, NAV_LINKS, SITE_URL, TAGLINE } from "@/utils/site";

const DOC_LINKS = [
  { label: "Getting Started", href: "/docs/getting-started/" },
  { label: "Installation", href: "/docs/installation/" },
  { label: "Basic Usage", href: "/docs/basic-usage/" },
  { label: "API Reference", href: "/docs/api-reference/" },
];

const RESOURCE_LINKS = [
  { label: "Features", href: "/features/" },
  { label: "Countries", href: "/countries/" },
  { label: "About", href: "/about/" },
  { label: "Docs Home", href: "/docs/" },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: "1px solid", borderColor: "divider", bgcolor: "#090E1A" }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          }}
        >
          <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
            <Logo />
            <Typography variant="body2" sx={{ maxWidth: 280 }}>
              {TAGLINE}
            </Typography>
            <IconButton
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DataForge on GitHub"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                "&:hover": { borderColor: "primary.main", bgcolor: "rgba(99,102,241,0.1)" },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Box component="nav" aria-label="Footer navigation">
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", display: "block", mb: 1.5 }}
            >
              Product
            </Typography>
            <Stack spacing={1}>
              {NAV_LINKS.map((link) => (
                <MuiLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                  color="text.secondary"
                  underline="hover"
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box component="nav" aria-label="Documentation links">
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", display: "block", mb: 1.5 }}
            >
              Documentation
            </Typography>
            <Stack spacing={1}>
              {[...DOC_LINKS, ...RESOURCE_LINKS.slice(3)].map((link) => (
                <MuiLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                  color="text.secondary"
                  underline="hover"
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "space-between" }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            © 2026 DataForge contributors. MIT License.{" "}
            {/* ponytail: static year, cacheComponents forbids new Date() */}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {SITE_URL.replace(/^https:\/\//, "")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
