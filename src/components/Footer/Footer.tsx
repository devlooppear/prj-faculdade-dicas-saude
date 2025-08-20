"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Routes } from "@/common/constants/routes";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterLinks,
  SocialIcons,
  SocialIconButton,
  FooterDivider,
  FooterCopy,
  FooterLogoLink,
} from "./Footer.style";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/devlooppear",
      icon: <GitHubIcon />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/iago-silva-42130b209/",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      href: "https://iago-silva-myportfoli.vercel.app/",
      icon: <LanguageIcon />,
      label: "Portfolio",
    },
  ];

  const navLinks = [
    { href: Routes.HOME, label: t("navbar.home") },
    { href: Routes.TIPS, label: t("navbar.tips") },
    { href: Routes.ABOUT, label: t("navbar.about") }
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo variant="h6">
          <FooterLogoLink href={Routes.HOME}>{t("title")}</FooterLogoLink>
        </FooterLogo>

        <FooterLinks>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </FooterLinks>

        <SocialIcons>
          {socialLinks.map(({ href, icon, label }) => (
            <SocialIconButton
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
            </SocialIconButton>
          ))}
        </SocialIcons>
      </FooterWrapper>

      <FooterDivider />

      <FooterCopy variant="body2">
        © {currentYear} {t("title")}
      </FooterCopy>
    </FooterContainer>
  );
}
