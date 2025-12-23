'use client'

import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    Tooltip,
    useDisclosure,
    Button, DrawerHeader
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState([{title: "", role: "", description: ""}])

    let education = t("Education Array", {returnObjects: true});

    return (<>
            <Drawer backdrop="opaque" placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                        <p className="font-extrabold text-lg">{element.title} - <span className="font-bold text-default-400">{element.role}</span></p>
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
            <Card className="lg:col-span-2 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold">{t("Education Title")}</h3>
                </CardHeader>
                <CardBody>
                    {education && Array.isArray(education) && education.map((element, index) => {
                        return <div key={index} className="flex flex-wrap items-center justify-start">
                            <div className="w-3/4 mb-4">
                                <p className="font-extrabold">{element.degree}</p>
                                <p className="font-bold text-default-400">{element.school}</p>
                                <p className="text-sm">{element.timeframe}</p>
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

export default EducationCard;