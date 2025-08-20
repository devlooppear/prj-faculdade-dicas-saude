"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { Languages, SUPPORTED_LANGUAGES } from "@/enum/languages";

const DEFAULT_NAMESPACES = ["common", "tips"];

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: Languages.PT,
    fallbackLng: Languages.PT,
    supportedLngs: SUPPORTED_LANGUAGES,
    defaultNS: "common",
    ns: DEFAULT_NAMESPACES,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
