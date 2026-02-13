'use client'

import Image from "next/image";
import Link from "next/link";
import {Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";
import {RxDownload} from "react-icons/rx";
import "@/app/i18n";
import {useTranslation} from "react-i18next";

const ResumeCard = () => {

    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;

    const toggleLanguage = async () => {
        const newLang = currentLanguage === "es" ? "en" : "es";
        await i18n.changeLanguage(newLang);
    };

    return (
        <Card className="lg:col-span-2 lg:row-span-2 p-4">
            <CardHeader className="flex justify-between items-center">
                <button
                    className="py-1 font-bold uppercase cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={toggleLanguage}
                    aria-label={`Change language to ${currentLanguage === "es" ? "English" : "Spanish"}`}
                >
                    {currentLanguage === "es" ? "EN" : "ES"}
                </button>
                <p className="px-3 py-1 border-2 border-success rounded-2xl text-md font-bold text-success">
                    <span className="animate-pulse size-2.5 inline-block bg-success rounded-full mr-2"></span>
                    {t("Availability")}
                </p>
            </CardHeader>
            <CardBody className="flex flex-wrap justify-center items-center gap-4 text-center">
                <Image
                    alt="Leonardo Becerril Profile Picture"
                    width={750}
                    height={750}
                    className="rounded-full w-1/2 pointer-events-none self-center"
                    src="/images/profile.webp"
                    priority
                />
                <h1 className="text-3xl font-extrabold">Leonardo Yael Bazan Becerril</h1>
                <h2 className="text-xl font-bold">{t("Personal Title")}</h2>
            </CardBody>
            <CardFooter>
                <Button
                    as={Link}
                    href={t("Download Link")}
                    target="_blank"
                    rel="noreferrer"
                    variant="solid"
                    color="primary"
                    className="w-full transition-all font-bold"
                >
                    {t("Download Button")} <RxDownload className="text-lg"/>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ResumeCard;