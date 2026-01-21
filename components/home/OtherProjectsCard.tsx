'use client'

import {Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";
import Link from "next/link";
import {CiLink} from "react-icons/ci";
import {Tooltip} from "@heroui/react";
import {useTranslation} from "react-i18next";


const OtherProjectsCard = () => {

    const {t} = useTranslation();

    return (
        <Card
            className="lg:col-span-2 lg:row-span-1 bg-[url('/images/latest_project.webp')] bg-cover bg-center bg-no-repeat group"
        >
            <CardHeader className="bg-black/60 backdrop-blur-sm">
                <h5 className="font-bold text-white uppercase">{t("Working On")}</h5>
            </CardHeader>
            <CardBody className="h-[10vh]" />
            <CardFooter className="flex items-center justify-end gap-2 bg-black/40 backdrop-blur-sm">
                <Tooltip content={t("Preview Button")}>
                    <Button
                        as={Link}
                        href="https://pablo-marte.com/"
                        target="_blank"
                        rel="noreferrer"
                        variant="flat"
                        className="text-white font-bold hover:bg-white/20"
                        isIconOnly
                        aria-label={t("Preview Button")}
                    >
                        <CiLink size={24} />
                    </Button>
                </Tooltip>
            </CardFooter>
        </Card>
    );
};

export default OtherProjectsCard;