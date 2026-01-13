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
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const LatestProjectCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    let latest_project = t("Latest Project Array", {returnObjects: true});

    return (
        <>
            <Drawer backdrop="blur" placement="left" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            {latest_project && Array.isArray(latest_project) && latest_project.map((element, index) => {
                                return <div key={index}>
                                    <DrawerHeader
                                        className="flex flex-col gap-1">{element.name}</DrawerHeader>
                                    <DrawerBody>
                                       <p>{element.description}</p>
                                        <p className="text-sm italic"><span className="font-bold"> TECH STACK: </span>
                                            {element.tech_stack.join(", ")}
                                        </p>
                                    </DrawerBody>
                                    <DrawerFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                            {t("Close Button")}
                                        </Button>
                                    </DrawerFooter>
                                </div>
                            })}
                        </>
                    )
                    }
                </DrawerContent>
            </Drawer>
            <Card
                className="md:col-span-2 md:row-span-1 bg-[url('/images/latest_project.webp')] bg-cover bg-top bg-no-repeat">
                <CardHeader className="bg-black/40">
                    <h5 className="text-2xl font-bold text-white/80 uppercase">{t("Latest Project Title")}</h5>
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
    )
        ;
};

export default LatestProjectCard;