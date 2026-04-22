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
                            <DrawerHeader
                                className="text-xl font-extrabold uppercase">{t("Education.Goals")}</DrawerHeader>
                            <DrawerBody>
                                <ul className="flex flex-col gap-6">
                                    {selectedItem && selectedItem.map((element, index) => (
                                        <li key={index} className="px-6">
                                            <article>
                                                <p className="text-lg font-extrabold text-primary-500">{element.title}</p>
                                                <p className="text-md font-semibold">{element.role}</p>
                                                <p className="text-sm font-bold tracking-wider text-default-500">{element.description}</p>
                                            </article>
                                        </li>
                                    ))}
                                </ul>
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
            <Card as="section" className="lg:col-span-2 lg:row-span-1 p-4">
                <CardHeader>
                    <h2 className="text-xl font-bold uppercase">{t("Education Title")}</h2>
                </CardHeader>
                <CardBody className="gap-4">
                    <ul className="flex flex-col gap-4">
                        {education && Array.isArray(education) && education.map((element, index) => (
                            <li key={index}>
                                <article className="flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-lg font-extrabold text-primary-500">{element.degree}</p>
                                            <p className="text-md font-semibold">{element.school}</p>
                                            <p className="text-sm font-bold uppercase tracking-wider text-default-500">{element.timeframe}</p>
                                        </div>
                                        {element.awards && element.awards.length > 0 && (
                                            <Tooltip content={t("Details Button")}>
                                                <Button
                                                    className="mt-1"
                                                    color="primary"
                                                    variant="light"
                                                    isIconOnly
                                                    aria-label={t("Details Button")}
                                                    onPress={() => handleOpenDrawer(element.awards)}
                                                >
                                                    <FaEye />
                                                </Button>
                                            </Tooltip>
                                        )}
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </>
    );
};

export default EducationCard;