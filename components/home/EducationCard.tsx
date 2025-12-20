'use client'
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Tooltip,
    useDisclosure,
    Button
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {useEffect, useState} from "react";

interface EducationObject {
    id: number,
    school: string,
    degree: string,
    start_date: string,
    finish_date: string,
    awards: {
        title: string,
        description: string
    }[]
}

export const education = [
    {
        id: 4,
        school: "Google Developer Groups - Lerma de Villada",
        degree: "Organizer for GDG Lerma",
        start_date: "August 2021",
        finish_date: "January 2024",
        awards: [{
            title: " Ponente / Charla Técnica ",
            description: "Devfest 2021 - Flutter/Dart"
        }, {
            title: " Participante",
            description: "Hashcode 2022"
        }, {
            title: " Taller / Charla Técnica ",
            description: "Devfest 2022 - Diseño web UX-UI/mobile first and responsive design/ creating a real-time chat example with ReactJS and Firebase simulating the interface of whatsapp.  / prenderemos un poco sobre Firebase y algunas de las herrmientas que nos ofrece para la creacion de proyectos profesionales"
        },
            {
                title: " Organizador / Charla Técnica ",
                description: "Google I/O : charla sobre las novedades de android, google AI y google cloud"
            },]
    },
    {
        id: 3,
        school: "Instituto Tecnológico de Toluca - CLE",
        degree: "TOEFL ITP Certification - CEFR Level B1",
        start_date: "",
        finish_date: "May 2023",
        awards: []
    },
    {
        id: 2,
        school: "Think-e English Courses",
        degree: "English language",
        start_date: "July 2021",
        finish_date: "November 2022",
        awards: []
    },
    {
        id: 1,
        school: "Instituto Tecnológico de Toluca",
        degree: "Computer Systems Engineering",
        start_date: "August 2015",
        finish_date: "June 2021",
        awards: [{
            title: "School Project",
            description: "Collaborated in the research and development of the theoretical framework for a web application to create a virtual newspaper archive and a tutoring platform, reducing the failure rate of students in the program by 30%."
        }, {
            title: "School Project",
            description: ""
        },
            {
                title: "Staff member | FLISOL 2019",
                description: "Participated in the “Installfest,” promoting the use of free software and assisting with the installation of various Linux distributions."
            }]
    },
];


const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [selectedItem, setSelectedItem] = useState([{title: "", description: ""}])

    return (<>
            <Drawer backdrop="opaque" placement="right" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerBody>
                                {selectedItem !== undefined && selectedItem.map((element: {
                                    title: string,
                                    description: string
                                }, index: number) => {
                                    return <div key={index}>
                                        <p>{element.title}</p>
                                        <p>{element.description}</p>
                                    </div>
                                })}
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Card className="lg:col-span-2 md:row-span-2 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold">Education</h3>
                </CardHeader>
                <CardBody>
                    {education.length > 0 && education.map((element: EducationObject, index: number) => {
                        return <div key={index} className="flex flex-wrap items-center justify-start">
                            <div className="w-3/4 mb-4">
                                <p className="text-bold capitalize">{element.degree}</p>
                                <p className="text-bold capitalize text-default-400">{element.school}</p>
                                <p className="text-bold text-sm">{element.start_date !== "" ? element.start_date + " - " : ""}{element.finish_date}</p>
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