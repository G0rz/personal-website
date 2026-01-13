'use client'

import {useState} from "react";
import {useTranslation} from "react-i18next";
import {
    Card, CardBody, CardHeader,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    Tooltip,
    useDisclosure,
    Button, DrawerHeader
} from "@heroui/react";
import {FaEye} from "react-icons/fa";

const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState([{title: "", role: "", description: ""}])

    let education = t("Education Array", {returnObjects: true});

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
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Card className="md:col-span-2 md:row-span-1 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold uppercase">{t("Education Title")}</h3>
                </CardHeader>
                <CardBody>
                    {education && Array.isArray(education) && education.map((element, index) => {
                        return <div key={index} className="flex flex-wrap items-center justify-start">
                            <div className="w-3/4 mb-4">
                                <p className="text-xl font-bold">{element.degree}</p>
                                <p className="text-lg font-bold text-default-400">{element.school}</p>
                                <p className="font-bold">{element.timeframe}</p>
                            </div>
                            {element.awards.length !== 0 && <Tooltip content={t("Details Button")}>
                                <Button
                                    className="self-start ms-auto"
                                    color="primary"
                                    variant="flat"
                                    isIconOnly
                                    aria-label={t("Details Button")}
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