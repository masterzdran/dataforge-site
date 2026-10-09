"use client";

import { Close as CloseIcon, GitHub as GitHubIcon, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Tooltip } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { MobileDrawer } from "@/components/MobileDrawer";
import { GITHUB_URL, NAV_LINKS } from "@/utils/site";

export function AppNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" component="header">
        <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
          <Logo />

          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}
          >
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                color="inherit"
                variant="text"
                sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              GitHub
            </Button>
            <Tooltip title={open ? "Close menu" : "Open menu"}>
              <IconButton
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                sx={{ display: { md: "none" }, color: "text.primary" }}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
