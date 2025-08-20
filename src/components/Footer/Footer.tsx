"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo variant="h6">
          <FooterLogoLink href="/">{t("title")}</FooterLogoLink>
        </FooterLogo>

        <FooterLinks>
          <Link href="/">{t("navbar.home")}</Link>
          <Link href="/dicas">{t("navbar.tips")}</Link>
          <Link href="/about">{t("navbar.about")}</Link>
          <Link href="/contact">{t("navbar.contact")}</Link>
        </FooterLinks>

        <SocialIcons>
          <SocialIconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </SocialIconButton>
          <SocialIconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </SocialIconButton>
          <SocialIconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </SocialIconButton>
          <SocialIconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </SocialIconButton>
        </SocialIcons>
      </FooterWrapper>

      <FooterDivider />

      <FooterCopy variant="body2">
        © {currentYear} {t("title")}
      </FooterCopy>
    </FooterContainer>
  );
}
