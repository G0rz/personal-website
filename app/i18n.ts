'use client'
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
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

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;