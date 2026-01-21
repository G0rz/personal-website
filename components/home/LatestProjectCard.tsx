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

interface Project {
    name: string;
    description: string;
    tech_stack: string[];
}

const LatestProjectCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    const latest_project = t("Latest Project Array", {returnObjects: true}) as Project[];

    return (
        <>
            <Drawer backdrop="blur" placement="left" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            {latest_project && Array.isArray(latest_project) && latest_project.map((element, index) => (
                                <div key={index} className="h-full flex flex-col">
                                    <DrawerHeader className="flex flex-col gap-1 font-bold uppercase">
                                        {element.name}
                                    </DrawerHeader>
                                    <DrawerBody>
                                       <p className="text-lg">{element.description}</p>
                                        <div className="mt-4">
                                            <p className="text-sm italic font-bold mb-2">TECH STACK:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {element.tech_stack.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-default-100 rounded-md text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </DrawerBody>
                                    <DrawerFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                            {t("Close Button")}
                                        </Button>
                                    </DrawerFooter>
                                </div>
                            ))}
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Card
                className="lg:col-span-2 lg:row-span-1 bg-[url('/images/latest_project.webp')] bg-cover bg-top bg-no-repeat group"
            >
                <CardHeader className="bg-black/60 backdrop-blur-sm transition-colors">
                    <h5 className="font-bold text-white uppercase">{t("Latest Project Title")}</h5>
                </CardHeader>
                <CardBody className="h-[10vh]" />
                <CardFooter className="flex items-center justify-end gap-2 bg-black/40 backdrop-blur-sm">
                    <Tooltip content={t("Details Button")}>
                        <Button
                            variant="flat"
                            className="text-white font-bold hover:bg-white/20"
                            isIconOnly
                            aria-label={t("Details Button")}
                            onPress={onOpen}
                        >
                            <FaEye size={20} />
                        </Button>
                    </Tooltip>
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
        </>
    );
};

export default LatestProjectCard;