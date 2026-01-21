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

interface Award {
    title: string;
    role: string;
    description: string;
}

interface EducationItem {
    degree: string;
    school: string;
    timeframe: string;
    awards: Award[];
}

const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState<Award[]>([])

    const education = t("Education Array", {returnObjects: true}) as EducationItem[];

    const handleOpenDrawer = (awards: Award[]) => {
        setSelectedItem(awards);
        onOpen();
    };

    return (
        <>
            <Drawer backdrop="blur" placement="left" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="font-bold uppercase">{t("Awards & Achievements")}</DrawerHeader>
                            <DrawerBody>
                                <div className="flex flex-col gap-6">
                                    {selectedItem && selectedItem.map((element, index) => (
                                        <div key={index} className="p-4 bg-default-50 rounded-lg">
                                            <p className="text-xl font-bold text-primary">{element.title}</p>
                                            <p className="text-md font-semibold text-default-500 mb-2">{element.role}</p>
                                            <p className="text-default-700 leading-relaxed">{element.description}</p>
                                        </div>
                                    ))}
                                </div>
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
            <Card className="lg:col-span-2 lg:row-span-1 p-4">
                <CardHeader>
                    <h3 className="font-bold uppercase">{t("Education Title")}</h3>
                </CardHeader>
                <CardBody className="gap-4">
                    {education && Array.isArray(education) && education.map((element, index) => (
                        <div key={index} className="flex items-start justify-between p-2 rounded-lg transition-colors">
                            <div className="flex flex-col gap-1 w-3/4">
                                <p className="text-lg font-bold leading-tight">{element.degree}</p>
                                <p className="text-md text-default-500 font-medium">{element.school}</p>
                                <p className="text-sm font-bold text-primary">{element.timeframe}</p>
                            </div>
                            {element.awards && element.awards.length > 0 && (
                                <Tooltip content={t("Details Button")}>
                                    <Button
                                        className="mt-1"
                                        color="primary"
                                        variant="flat"
                                        isIconOnly
                                        aria-label={t("Details Button")}
                                        onPress={() => handleOpenDrawer(element.awards)}
                                    >
                                        <FaEye />
                                    </Button>
                                </Tooltip>
                            )}
                        </div>
                    ))}
                </CardBody>
            </Card>
        </>
    );
};

export default EducationCard;