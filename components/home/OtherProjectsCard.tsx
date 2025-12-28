'use client'

import Image from "next/image";
import {Button} from "@heroui/button";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import Link from "next/link";
import {IoLocationOutline} from "react-icons/io5";
import {CiLink, CiMail} from "react-icons/ci";
import {Tooltip} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const OtherProjectsCard = () => {

    const {t} = useTranslation();

    return (
        <>
            <Card
                className="md:col-span-2 md:row-span-1 bg-[url('/images/latest_project.png')] bg-cover bg-top bg-no-repeat">
                <CardHeader className="bg-black/40">
                    <h5 className="text-2xl font-bold text-white/80 uppercase">{t("Working On")}</h5>
                </CardHeader>
                <CardBody className="h-[20vh]">

                </CardBody>
                <CardFooter className="flex items-center justify-end gap-2">
                    <Tooltip content={t("Preview Button")}>
                        <Button
                            as={Link}
                            href="https://pablo-marte.com/"
                            target="_blank"
                            rel="noreferrer"
                            variant="flat"
                            className="text-white font-bold"
                            isIconOnly
                            aria-label={t("Preview Button")}
                        >
                            <CiLink/>
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
            <Card
                className="md:col-span-2 md:row-span-1 bg-[url('/images/latest_project.png')] bg-cover bg-top bg-no-repeat">
                <CardHeader className="bg-black/40">
                    <h5 className="text-2xl font-bold text-white/80 uppercase">{t("Other Projects")}</h5>
                </CardHeader>
                <CardBody className="h-[20vh]">

                </CardBody>
                <CardFooter className="flex items-center justify-end gap-2">
                    <Tooltip content={t("Preview Button")}>
                        <Button
                            as={Link}
                            href="https://pablo-marte.com/"
                            target="_blank"
                            rel="noreferrer"
                            variant="flat"
                            className="text-white font-bold"
                            isIconOnly
                            aria-label={t("Preview Button")}
                        >
                            <CiLink/>
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
        </>
    );
};

export default OtherProjectsCard;