'use client'
import Image from "next/image";
import {Button} from "@heroui/button";
import {Card, CardBody, CardHeader} from "@heroui/card";
import Link from "next/link";

const EducationCard = () => {
    return (
        <Card className="lg:col-span-2 md:row-span-2 p-4">
            <CardHeader>
                <h1 className={'text-2xl font-bold'}>Leonardo Yael Bazán Becerril</h1>
            </CardHeader>
            <CardBody className="text-center gap-y-2">
                Lista con las escuelas y certificados, agrega una columna de iconos de accion para ver los archivos de las certificaciones
            </CardBody>
        </Card>
    );
};

export default EducationCard;