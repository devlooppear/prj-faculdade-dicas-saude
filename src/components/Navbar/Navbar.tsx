"use client";

import React from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  NavbarAppBar,
  NavbarToolbar,
  NavbarLogoWrapper,
  NavbarLogo,
  NavbarLogoLink,
  NavbarMenu,
  NavbarButton,
  NavbarMenuIconButton,
  NavbarDrawer,
  DrawerContent,
  DrawerTitle,
} from "./Navbar.style";
import systemColors from "@/common/constants/systemColors";

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: t("navbar.home"), path: "/" },
    { label: t("navbar.tips"), path: "/dicas" },
    { label: t("navbar.about"), path: "/about" },
    { label: t("navbar.contact"), path: "/contact" },
  ];

  const drawer = (
    <DrawerContent onClick={handleDrawerToggle}>
      <DrawerTitle variant="h6">
        <HealthAndSafetyIcon sx={{ color: systemColors.green[700] }} />
        {t("title")}
      </DrawerTitle>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerContent>
  );

  return (
    <>
      <NavbarAppBar position="sticky">
        <NavbarToolbar>
          <NavbarLogoWrapper>
            <HealthAndSafetyIcon
              sx={{ color: systemColors.green[700], fontSize: 30 }}
            />
            <NavbarLogo variant="h6">
              <NavbarLogoLink href="/">{t("title")}</NavbarLogoLink>
            </NavbarLogo>
          </NavbarLogoWrapper>

          <NavbarMenu>
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <NavbarButton>{item.label}</NavbarButton>
              </Link>
            ))}
          </NavbarMenu>

          <NavbarMenuIconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </NavbarMenuIconButton>
        </NavbarToolbar>
      </NavbarAppBar>

      <NavbarDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </NavbarDrawer>
    </>
  );
}
