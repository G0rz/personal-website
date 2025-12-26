'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Tooltip,
    useDisclosure
} from "@heroui/react";
import {useState} from "react";
import {Button} from "@heroui/button";
import {useTranslation} from "react-i18next";
import {FaEye} from "react-icons/fa";

const JobHistoryCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState([{description: ""}])

    let jobs = t("Jobs Array", {returnObjects: true});

    return (<>
            <Drawer backdrop="blur" placement="right" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader>{t("Jobs.Responsabilities")}</DrawerHeader>
                            <DrawerBody>
                                <ul className="list-disc px-4">
                                    {selectedItem !== undefined && selectedItem.map((element: {
                                        description: string
                                    }, index: number) => {
                                        return <li className="p-2" key={index}>
                                            {element.description}
                                        </li>
                                    })}
                                </ul>
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
            <Card className="md:col-span-2 md:row-span-3 p-4">
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
                                <p className="text-sm italic"><span
                                    className="font-bold">Tech Stack:</span> {element.tech_stack.join(", ")}</p>
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