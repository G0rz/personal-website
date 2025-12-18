'use client'
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure
} from "@heroui/react";
import { FaEye } from "react-icons/fa";
import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useCallback} from "react";
import {Button} from "@heroui/button";

export const columns = [

    {name: "SCHOOL", uid: "school"},
    {name: "GADUATION DATE", uid: "finish_date"},
    {name: "", uid: "actions"},
];
export const education = [
    {
        id: 4,
        school: "Google Developer Groups - Lerma de Villada",
        degree: "Organizer for GDG Lerma",
        start_date: "August 2021",
        finish_date: "January 2024",
        assets: []
    },
    {
        id: 3,
        school: "Instituto Tecnológico de Toluca - CLE",
        degree: "TOEFL ITP Certification - CEFR Level B1",
        start_date: "",
        finish_date: "May 2023",
        assets: []
    },
    {
        id: 2,
        school: "Think-e English Courses",
        degree: "English language",
        start_date: "July 2021",
        finish_date: "November 2022",
        assets: []
    },
    {
        id: 1,
        school: "Instituto Tecnológico de Toluca",
        degree: "Computer Systems Engineering",
        start_date: "August 2015",
        finish_date: "June 2021",
        assets: []
    },
];


const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const renderCell = useCallback((element: any, columnKey:any) => {
        const cellValue = element[columnKey];
        switch (columnKey) {
            case "school":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{element.degree}</p>
                    </div>
                );
            case "actions":
                if (element.assets.length > 0) {
                    return (<div className=" flex items-center justify-center">
                        <Tooltip content="Details">
                            <Button
                                className="capitalize"
                                color="primary"
                                variant="flat"
                                isIconOnly
                                aria-label="Details"
                                onPress={() => onOpen()}
                            >
                                <FaEye />
                            </Button>
                        </Tooltip>
                    </div>)
                } else {
                    return
                }
            default:
                return cellValue;
        }
    }, []);

    return (<>
            <Drawer backdrop="opaque" placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Log in</DrawerHeader>
                            <DrawerBody>

                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
            <Table aria-label="Example table with custom cells" className="lg:col-span-2 md:row-span-3">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "finish_date" ? "center" : "start" }>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={education}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
};

export default EducationCard;