'use client'
import Image from "next/image";
import {Button} from "@heroui/button";
import {Card, CardBody, CardHeader} from "@heroui/card";
import Link from "next/link";

const LatestProjectCard = () => {
    return (
        <>
            <Card className="col-span-full lg:col-span-2 row-span-1">
                <CardHeader>
                    <Image
                        alt="Profile Picture"
                        width={250}
                        height={250}
                        className="rounded-full object-cover w-1/2 mx-auto"
                        loading="lazy"
                        src="https://avatars.githubusercontent.com/u/63682340?v=4"
                    />
                </CardHeader>
                <CardBody className="text-center gap-y-2">

                </CardBody>
            </Card>
        </>
    );
};

export default LatestProjectCard;