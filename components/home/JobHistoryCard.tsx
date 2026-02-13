'use client'

import {useState} from "react";
import {useTranslation} from "react-i18next";
import {
    Button,
    Card,
    CardBody,
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

interface JobAward {
    description: string;
}

interface Job {
    position: string;
    job: string;
    timeframe: string;
    tech_stack: string[];
    awards: JobAward[];
}

const JobHistoryCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const [selectedItem, setSelectedItem] = useState<JobAward[]>([])

    const jobs = t("Jobs Array", {returnObjects: true}) as Job[];

    const handleOpenDrawer = (awards: JobAward[]) => {
        setSelectedItem(awards);
        onOpen();
    };

    return (
        <>
            <Drawer backdrop="blur" placement="right" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader
                                className="text-xl font-extrabold uppercase">{t("Jobs.Responsabilities")}</DrawerHeader>
                            <DrawerBody>
                                <ul className="list-disc px-6 flex flex-col gap-2">
                                    {selectedItem && selectedItem.map((element, index) => (
                                        <li className="leading-relaxed" key={index}>
                                            {element.description}
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
            <Card className="lg:col-span-2 lg:row-span-3 p-4">
                <CardHeader>
                    <h3 className="text-xl font-extrabold uppercase">{t("Jobs Title")}</h3>
                </CardHeader>
                <CardBody className="gap-6">
                    {jobs && Array.isArray(jobs) && jobs.map((element, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <p className="text-lg font-extrabold text-primary-500">{element.position}</p>
                                    <p className="text-md font-semibold">{element.job}</p>
                                    <p className="text-sm font-bold uppercase tracking-wider text-default-500">{element.timeframe}</p>
                                </div>
                                {element.awards && element.awards.length > 0 && (
                                    <Tooltip content={t("Details Button")}>
                                        <Button
                                            color="primary"
                                            variant="light"
                                            isIconOnly
                                            aria-label={t("Details Button")}
                                            onPress={() => handleOpenDrawer(element.awards)}
                                        >
                                            <FaEye/>
                                        </Button>
                                    </Tooltip>
                                )}
                            </div>
                            <div className="mt-2">
                                <p className="text-sm">
                                    <span className="font-bold">Tech Stack: </span>
                                    {element.tech_stack.join(", ")}
                                </p>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </>
    );
};

export default JobHistoryCard;