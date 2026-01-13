'use client'

import Image from "next/image";
import Link from "next/link";
import {Button, Card, CardBody, Tooltip} from "@heroui/react";
import {RxDownload} from "react-icons/rx";
import "@/app/i18n";
import {useTranslation} from "react-i18next";

const ResumeCard = () => {

    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;

    return (
        <Card className="md:col-span-2 md:row-span-2 p-4">
            <CardBody className="relative flex flex-wrap justify-center items-start gap-4">
                <button className="absolute top-0 left-4 py-1 font-extrabold uppercase cursor-pointer"
                        onClick={currentLanguage === "es" ? async () => await i18n.changeLanguage("en") : async () => await i18n.changeLanguage("es")}>{currentLanguage === "es" ? "EN" : "ES"}</button>
                <p className="absolute top-0 right-0 px-3 py-1 border-2  border-success rounded-2xl text-sm font-bold text-success">
                    <span className="animate-pulse size-2.5 inline-block bg-success rounded-full mr-2"></span>
                    {t("Availability")}
                </p>
                <Image
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="rounded-full w-1/2 pointer-events-none"
                    loading="eager"
                    src="https://avatars.githubusercontent.com/u/63682340?v=4"
                />
                <h1 className={'text-2xl font-extrabold'}>Leonardo Yael Bazan Becerril</h1>
                <h2 className={'text-xl font-bold'}>{t("Personal Title")}</h2>

                <Button as={Link} href={t("Download Link")} target="_blank" rel="noreferrer"
                        variant="solid" color="primary"
                        className="w-full  transition-all font-bold">{t("Download Button")}<RxDownload/>
                </Button>
            </CardBody>
        </Card>
    );
};

export default ResumeCard;