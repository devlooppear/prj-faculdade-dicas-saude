"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
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
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { Routes } from "@/common/constants/routes";

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: t("navbar.home"), path: Routes.HOME, icon: <HomeIcon /> },
    {
      label: t("navbar.tips"),
      path: Routes.TIPS,
      icon: <TipsAndUpdatesIcon />,
    },
    { label: t("navbar.about"), path: Routes.ABOUT, icon: <InfoIcon /> },
  ];

  const handleNavigate = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const drawer = (
    <DrawerContent onClick={handleDrawerToggle}>
      <DrawerTitle variant="h6">
        <HealthAndSafetyIcon sx={{ color: systemColors.green[700], mr: 1 }} />
        {t("title")}
      </DrawerTitle>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => handleNavigate(item.path)}
              sx={{ textAlign: "left" }}
            >
              <ListItemIcon
                sx={{ minWidth: 36, color: systemColors.green[700] }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: "center" }}>
            <LanguageSwitcher />
          </ListItemButton>
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <>
      <NavbarAppBar position="sticky">
        <NavbarToolbar>
          <NavbarLogoWrapper onClick={() => handleNavigate("/")}>
            <HealthAndSafetyIcon
              sx={{
                color: systemColors.green[700],
                fontSize: 30,
                cursor: "pointer",
              }}
            />
            <NavbarLogo variant="h6" sx={{ cursor: "pointer" }}>
              <NavbarLogoLink>{t("title")}</NavbarLogoLink>
            </NavbarLogo>
          </NavbarLogoWrapper>

          <NavbarMenu>
            {menuItems.map((item) => (
              <NavbarButton
                key={item.path}
                startIcon={item.icon}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </NavbarButton>
            ))}

            <LanguageSwitcher />
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
