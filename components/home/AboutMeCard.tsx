'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";
import {useTranslation} from "react-i18next";

const AboutMeCard = () => {

    const {t} = useTranslation();

    return (
        <Card className="md:col-span-2 p-4 flex items-center justify-center">
            <CardHeader>
                <h3 className="text-2xl font-bold">{t("About Me Title")}</h3>
            </CardHeader>
            <CardBody>
                <p className="text-md">{t("About Me")}</p>
            </CardBody>
        </Card>
    );
};

export default AboutMeCard;