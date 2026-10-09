"use client";

import { Box, Chip, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const reduce = useReducedMotion();
  return (
    <Box
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 6 },
        borderBottom: "1px solid",
        borderColor: "divider",
        background:
          "radial-gradient(60% 100% at 50% 0%, rgba(79, 70, 229, 0.18) 0%, transparent 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Chip label={eyebrow} color="primary" variant="outlined" size="small" sx={{ mb: 2 }} />
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 1.5 }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{ fontSize: { xs: "1.05rem", md: "1.25rem" }, maxWidth: 760 }}
          >
            {description}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
