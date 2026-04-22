'use client'

import {Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";
import Link from "next/link";
import {CiLink} from "react-icons/ci";
import {Tooltip} from "@heroui/react";
import {useTranslation} from "react-i18next";
import SpotlightCard from "@/components/ui/SpotlightCard";


const OtherProjectsCard = () => {

    const {t} = useTranslation();

    return (<>
            <Card
                as="section"
                className="lg:col-span-2 lg:row-span-1 bg-[url('/images/latest_project.webp')] bg-cover bg-center bg-no-repeat group"
            >
                <CardHeader className="bg-black/60 backdrop-blur-sm">
                    <h2 className="font-bold text-white uppercase">{t("Working On")}</h2>
                </CardHeader>
                <CardBody className="h-[10vh]" />
                <CardFooter className="flex items-center justify-end gap-2 ">
                    <Tooltip content={t("Preview Button")}>
                        <Button
                            as={Link}
                            href="https://pablo-marte.com/"
                            target="_blank"
                            rel="noreferrer"
                            variant="light"
                            className="text-white font-bold hover:bg-white/20"
                            isIconOnly
                            aria-label={t("Preview Button")}
                        >
                            <CiLink size={24} />
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
        <SpotlightCard className="lg:col-span-2 lg:row-span-1 relative min-h-[175px]" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Link href="/projects" className="absolute left-1/2 top-1/2 -translate-1/2 text-xl font-extrabold uppercase hover:underline hover:underline-offset-4">{t("Other Projects")}</Link>
        </SpotlightCard>
        </>
    );
};

export default OtherProjectsCard;