"use client";

import { ArrowForward as ArrowForwardIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { GITHUB_URL, TAGLINE } from "@/utils/site";
import { Reveal } from "@/components/Reveal";

export function CallToAction() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: "1px solid",
        borderColor: "divider",
        background:
          "radial-gradient(70% 100% at 50% 100%, rgba(6, 182, 212, 0.12) 0%, transparent 100%)",
      }}
    >
      <Container maxWidth="md">
        <Reveal>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: 2 }}
            >
              {TAGLINE}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 560, mx: "auto" }}>
              Start generating realistic, deterministic test data in minutes.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                href="/docs/getting-started/"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
              <Button
                href={GITHUB_URL}
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
