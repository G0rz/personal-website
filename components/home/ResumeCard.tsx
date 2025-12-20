'use client'
import Image from "next/image";
import {Button} from "@heroui/button";
import {Card, CardBody} from "@heroui/card";
import Link from "next/link";
import {RxDownload} from "react-icons/rx";
import "@/app/i18n";
import {useTranslation} from "react-i18next";

const ResumeCard = () => {

    const {t, i18n} = useTranslation()
    const currentLanguage = i18n.language;
    const resolvedLanguage = i18n.resolvedLanguage;

    return (
        <Card className="md:col-span-2 md:row-span-2 p-4">
            <CardBody className="relative flex flex-wrap justify-around items-start gap-4">
                <p className="absolute top-0 right-0 px-3 py-1 border-1 border-success rounded-2xl text-sm font-bold text-success">
                    <span className="animate-pulse size-2 inline-block bg-success rounded-full mr-2"></span>AVALIBLE FOR
                    WORK
                </p>
                <button className="absolute top-0 left-0" onClick={currentLanguage === "es" ? async () => await i18n.changeLanguage("en") : async () => await i18n.changeLanguage("es")}>{currentLanguage}</button>
                <Image
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="rounded-full object-cover w-1/2"
                    loading="eager"
                    src="https://avatars.githubusercontent.com/u/63682340?v=4"
                />
                <h1 className={'text-2xl font-bold'}>Leonardo Yael Bazan Becerril</h1>
                <h2 className={'text-xl'}>{t("Personal Title")}</h2>

                <Button as={Link} href="/files/LeonardoBecerril-CV-2026.pdf" download variant="solid" color="primary"
                        className="w-full  transition-all font-bold">DOWNLOAD
                    RESUME <RxDownload/>
                </Button>
            </CardBody>
        </Card>
    );
};

export default ResumeCard;