'use client'
import {Button} from "@heroui/button";
import {FaEye} from "react-icons/fa";
import {CiLink} from "react-icons/ci";
import {
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
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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
                                <p>My Role and Process</p>
                                <p>Solutions</p>
                                <p>Outcomes/Impact</p>
                                <p>Answer the "who, what, why, how"</p>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Card
                className="col-span-full lg:col-span-2 row-span-1 bg-[url('/images/latest_project.png')] bg-cover bg-top bg-no-repeat">
                <CardHeader className="bg-black/40">
                    <h3 className="text-2xl font-bold text-white">Latest Project</h3>
                </CardHeader>
                <CardBody className="h-[20vh]">

                </CardBody>
                <CardFooter className="flex items-center justify-end gap-2">
                    <Tooltip content="Details">
                        <Button
                            variant="flat"
                            className="text-white font-bold"
                            isIconOnly
                            aria-label="Details"
                            onPress={() => onOpen()}
                        >
                            <FaEye/>
                        </Button>
                    </Tooltip>
                    <Tooltip content="Preview">
                        <Button
                            as={Link}
                            href="https://pablo-marte.com/"
                            target="_blank"
                            rel="noreferrer"
                            variant="flat"
                            className="text-white font-bold"
                            isIconOnly
                            aria-label="Preview"
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