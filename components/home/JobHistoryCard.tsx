'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";
import {Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure} from "@heroui/react";
import React from "react";
import {Button} from "@heroui/button";
import {useTranslation} from "react-i18next";

interface DrawerType {
    backdrop: "opaque" | "blur" | "transparent";
}

const JobHistoryCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    return (<>
            <Drawer backdrop="opaque" placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
                            <DrawerBody>

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
            <Card className="md:col-span-2 row-span-3 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold">Jobs History</h3>
                </CardHeader>
                <CardBody>
                    Acordion con los trabajos
                    <Button
                        className="capitalize"
                        color="primary"
                        variant="flat"
                        onPress={onOpen}
                    >
                        Abrir
                    </Button>
                </CardBody>
            </Card>
        </>
    );
};

export default JobHistoryCard;