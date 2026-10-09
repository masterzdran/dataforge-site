"use client";

import { ArrowForward as ArrowForwardIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { GITHUB_URL, NAV_LINKS } from "@/utils/site";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      slotProps={{ paper: { "aria-label": "Mobile navigation" } as never }}
      sx={{ display: { md: "none" } }}
    >
      <Box sx={{ width: 280, pt: 2 }} role="presentation" onClick={onClose}>
        <Box sx={{ px: 2, pb: 2 }}>
          <Logo />
        </Box>
        <Divider />
        <List>
          {NAV_LINKS.map((link) => (
            <ListItemButton key={link.href} component={Link} href={link.href} sx={{ py: 1.5 }}>
              <ListItemText primary={link.label} />
              <ArrowForwardIcon fontSize="small" sx={{ color: "text.secondary" }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, display: "grid", gap: 1.5 }}>
          <Button
            component="a"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<GitHubIcon />}
            fullWidth
          >
            View on GitHub
          </Button>
          <Button component={Link} href="/docs/getting-started/" variant="outlined" fullWidth>
            Get Started
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
