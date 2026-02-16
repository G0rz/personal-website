import {Geist, JetBrains_Mono, VT323} from "next/font/google";
import CustomFont from "next/font/local";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

export const vt323 = VT323({
    weight: "400",
    variable: "--font-fallout",
    subsets: ["latin"],
    display: "swap",
});

export const customFont = CustomFont({
    src: "/../public/fonts/NIS-JTC-Win-M9.woff2",
    variable: "--font-custom",
    display: "swap",
});