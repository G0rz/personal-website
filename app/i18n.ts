'use client'
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import es from "../public/locales/es/common.json"
import en from "../public/locales/en/common.json"

const resources = {
    en: {
        translation: en
    },
    es: {
        translation: es
    }
};

const DETECTION_OPTIONS = {
    order: ['navigator']
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: DETECTION_OPTIONS, resources,
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;