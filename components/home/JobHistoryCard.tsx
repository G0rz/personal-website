'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";
import {
    Accordion,
    AccordionItem,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader, Tooltip,
    useDisclosure
} from "@heroui/react";
import React, {useState} from "react";
import {Button} from "@heroui/button";
import {useTranslation} from "react-i18next";
import {FaEye} from "react-icons/fa";

const JobHistoryCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState([{title: "", role: "", description: ""}])

    let jobs = t("Jobs Array", {returnObjects: true});

    return (<>
            <Drawer backdrop="blur" placement="left" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader></DrawerHeader>
                            <DrawerBody>
                                {selectedItem !== undefined && selectedItem.map((element: {
                                    title: string,
                                    role: string,
                                    description: string
                                }, index: number) => {
                                    return <div key={index}>
                                        <p className="text-xl font-bold">{element.title}</p>
                                        <p className="text-lg font-bold text-default-400">{element.role}</p>
                                        <p>{element.description}</p>
                                    </div>
                                })}
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Card className="lg:col-span-2 md:row-span-3 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold">{t("Jobs Title")}</h3>
                </CardHeader>
                <CardBody>
                    {jobs && Array.isArray(jobs) && jobs.map((element, index) => {
                        return <div key={index} className="flex flex-wrap items-center justify-start">
                            <div className="w-3/4 mb-4">
                                <p className="text-xl font-bold">{element.position}</p>
                                <p className="text-lg font-bold text-default-400">{element.job}</p>
                                <p className="font-bold">{element.timeframe}</p>
                                <p className="text-sm italic"><span className="font-bold">Tech Stack:</span> {element.tech_stack.join(", ")}</p>
                            </div>
                            {element.awards.length !== 0 && <Tooltip content="Details">
                                <Button
                                    className="self-start ms-auto"
                                    color="primary"
                                    variant="flat"
                                    isIconOnly
                                    aria-label="Details"
                                    onPress={() => {
                                        onOpen();
                                        return setSelectedItem(element.awards);
                                    }
                                    }
                                >
                                    <FaEye/>
                                </Button>
                            </Tooltip>}
                        </div>

                    })}
                </CardBody>
            </Card>
        </>
    );
};

export default JobHistoryCard;