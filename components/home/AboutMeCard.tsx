'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";
import {useTranslation} from "react-i18next";

const AboutMeCard = () => {

    const {t} = useTranslation();

    return (
        <Card className="lg:col-span-2 lg:row-span-1 p-4">
            <CardHeader className="pb-2">
                <h3 className="text-xl font-extrabold uppercase">{t("About Me Title")}</h3>
            </CardHeader>
            <CardBody className="flex justify-center items-center">
                <p className="lg:text-lg leading-relaxed text-default-700">{t("About Me")}</p>
            </CardBody>
        </Card>
    );
};

export default AboutMeCard;