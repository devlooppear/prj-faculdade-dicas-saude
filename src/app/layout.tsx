import I18nProvider from "@/provider/i18n/I18nProvider";
import { MainLayout } from "@/template";
import ThemeRegistry from "@/provider/theme/ThemeRegistry";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dicas Saúde",
  description:
    "Health tips project created for the university extension program to help communities live healthier lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <I18nProvider>
            <MainLayout>{children}</MainLayout>
          </I18nProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
