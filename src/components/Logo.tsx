"use client";

import { DataObject as DataObjectIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      aria-label="DataForge home"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        textDecoration: "none",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 60%, #06B6D4 160%)",
          color: "#fff",
        }}
      >
        <DataObjectIcon fontSize="small" />
      </Box>
      <Typography
        variant="h6"
        component="span"
        sx={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.01em" }}
      >
        Data
        <Box component="span" sx={{ color: "primary.light" }}>
          Forge
        </Box>
      </Typography>
    </Box>
  );
}
