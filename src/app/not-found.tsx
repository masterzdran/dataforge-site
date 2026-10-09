"use client";

import { Home as HomeIcon, SearchOff as SearchOffIcon } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 14 }, textAlign: "center" }}>
      <SearchOffIcon sx={{ fontSize: 48, color: "primary.light", mb: 2 }} />
      <Typography
        component="h1"
        variant="h2"
        sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: 1.5 }}
      >
        Page not found
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for does not exist or has moved.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
        <Button component={Link} href="/" variant="contained" startIcon={<HomeIcon />}>
          Back home
        </Button>
        <Button component={Link} href="/docs/" variant="outlined">
          Browse docs
        </Button>
      </Box>
    </Container>
  );
}
