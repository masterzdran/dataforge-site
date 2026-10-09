"use client";

import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";

export function SectionContainer({
  children,
  id,
  sx,
}: {
  children: ReactNode;
  id?: string;
  sx?: object;
}) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
