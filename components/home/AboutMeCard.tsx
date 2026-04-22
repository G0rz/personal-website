'use client'

import {useTranslation} from "react-i18next";
import {Card, CardBody, CardHeader} from "@heroui/react";

const AboutMeCard = () => {

    const {t} = useTranslation();

    return (
        <Card as="section" className="lg:col-span-2 lg:row-span-1 p-4">
            <CardHeader>
                <h2 className="text-xl font-extrabold uppercase">{t("About Me Title")}</h2>
            </CardHeader>
            <CardBody>
                <p className="lg:text-lg">{t("About Me")}</p>
            </CardBody>
        </Card>
    );
};

export default AboutMeCard;