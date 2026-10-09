"use client";

import { ArrowForward as ArrowForwardIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { GITHUB_URL, SUBHEADLINE } from "@/utils/site";

export function HeroSection() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 14 },
        pb: { xs: 8, md: 14 },
        background:
          "radial-gradient(50% 60% at 50% 0%, rgba(79, 70, 229, 0.22) 0%, transparent 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: { md: "1.05fr 0.95fr" },
            alignItems: "center",
          }}
        >
          <Box>
            <motion.div {...fade(0)}>
              <Chip
                label="Open source · .NET synthetic data"
                size="small"
                color="primary"
                variant="outlined"
                sx={{ mb: 3 }}
              />
            </motion.div>

            <motion.div {...fade(0.1)}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Forge Realistic Data.{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #818CF8 0%, #06B6D4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Build Reliable Software.
                </Box>
              </Typography>
            </motion.div>

            <motion.div {...fade(0.2)}>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.125rem" }, mb: 4, maxWidth: 560 }}>
                {SUBHEADLINE}
              </Typography>
            </motion.div>

            <motion.div {...fade(0.3)} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
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
            </motion.div>
          </Box>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            <Box
              sx={{
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                overflow: "hidden",
                bgcolor: "background.paper",
                boxShadow: "0 24px 60px -30px rgba(99, 102, 241, 0.55)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                {["#EF4444", "#F59E0B", "#22C55E"].map((color) => (
                  <Box
                    key={color}
                    sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color }}
                  />
                ))}
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontFamily: "var(--font-mono)" }}
                >
                  demo.gif
                </Typography>
              </Box>
              <Image
                src="/demo.gif"
                alt="DataForger generating country-specific synthetic data"
                width={1400}
                height={788}
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
