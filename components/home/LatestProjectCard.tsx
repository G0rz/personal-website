'use client'

import Link from "next/link";
import {useTranslation} from "react-i18next";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Tooltip,
    useDisclosure
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {CiLink} from "react-icons/ci";

const LatestProjectCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    return (
        <>
            <Drawer backdrop="blur" placement="left" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Pablo Marte - Website</DrawerHeader>
                            <DrawerBody>
                                <p>Problem/Goal</p>
                                <p>My Role and Process: Fui el diseñador y desarrollador del sitio web, siempre
                                    consultando a Pablo Marte sobre su preferencia respecto a los elementos que se
                                    mostraban y el orden. LLegue a diseñar dos propuestas, una más simple que la otra
                                    apostando por el minimalismo y el dinamismo que las imagenes expresan.</p>
                                <p>Solutions: Create a landing page for show some pictures and a</p>
                                <p>Outcomes/Impact</p>
                                <p>Answer the "who:Me and Pablou Marte, what:Create a landing page, why:for been more
                                    close to their fans and share with the world passion, how:designing and developing
                                    an modern interface"</p>
                                <p className="text-sm italic"><span className="font-bold"> TECH STACK: </span>React
                                    18.3.1, MUI 5.15.19, Tailwind 3.4.X/4.0, Stripe, Firebase, Google Cloud, Docker,
                                    MongoDB, Git</p>
                                "IMPLEMENTAR UNA GALERIA DE IMAGENES CON CAPTURAS DE PANTALLA DEL RESULTADO FINAL O DE
                                HOT POINTS"
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Card
                className="md:col-span-2 md:row-span-1 bg-[url('/images/latest_project.webp')] bg-cover bg-top bg-no-repeat">
                <CardHeader className="bg-black/40">
                    <h5 className="text-2xl font-bold text-white/80 uppercase">{t("Latest Project")}</h5>
                </CardHeader>
                <CardBody className="h-[10vh]">

                </CardBody>
                <CardFooter className="flex items-center justify-end gap-2">
                    <Tooltip content={t("Details Button")}>
                        <Button
                            variant="flat"
                            className="text-white font-bold"
                            isIconOnly
                            aria-label={t("Details Button")}
                            onPress={() => onOpen()}
                        >
                            <FaEye/>
                        </Button>
                    </Tooltip>
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

export default LatestProjectCard;