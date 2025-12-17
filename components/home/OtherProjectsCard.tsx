'use client'
import Image from "next/image";
import {Button} from "@heroui/button";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import Link from "next/link";
import {IoLocationOutline} from "react-icons/io5";
import {CiMail} from "react-icons/ci";

const OtherProjectsCard = () => {
    return (
        <>
            <Card isFooterBlurred className="border-none col-span-full lg:col-span-2" radius="lg">
                <Link href="https://maps.app.goo.gl/gDpKmfCMR4EPe7Qo7" target="_blank" rel="noreferrer">
                    <Image
                        alt="Woman listing to music"
                        className="object-cover bg-gradient-to-t from-black/80 to-transparent"
                        height={200}
                        width={200}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnGTFDQw9LjHfzZctAfmuCtThqENGzilgU7L3ebmDC6kP6VJOz82Hbs7hNQaHW2TGQbiw7znlFEt5c8tnpsTte1SY3RcQnuAhn4SEig2lwd1P1N8gMKRTUBQ4EEAWnywpe9De5KRXrZM_uUDzuTZaECEnJDWv4uaqTUMQSonzQO3fQRdtErPorDmFnCUJ7cy_2WAzHPFaBv84L0iNRPNjslBdNJ57CerJpUiN7XMHY9ieNXcliDdwkZ75A8tHG7spWup5G2kiP2oY"
                    />
                </Link>
                <CardFooter
                    className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <IoLocationOutline/><p className="text-tiny text-white/80">Based in Toluca, México.</p>
                </CardFooter>
            </Card>
            <Card isFooterBlurred className="border-none col-span-full lg:col-span-2" radius="lg">
                <Link href="https://maps.app.goo.gl/gDpKmfCMR4EPe7Qo7" target="_blank" rel="noreferrer">
                    <Image
                        alt="Woman listing to music"
                        className="object-cover bg-gradient-to-t from-black/80 to-transparent"
                        height={200}
                        width={200}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnGTFDQw9LjHfzZctAfmuCtThqENGzilgU7L3ebmDC6kP6VJOz82Hbs7hNQaHW2TGQbiw7znlFEt5c8tnpsTte1SY3RcQnuAhn4SEig2lwd1P1N8gMKRTUBQ4EEAWnywpe9De5KRXrZM_uUDzuTZaECEnJDWv4uaqTUMQSonzQO3fQRdtErPorDmFnCUJ7cy_2WAzHPFaBv84L0iNRPNjslBdNJ57CerJpUiN7XMHY9ieNXcliDdwkZ75A8tHG7spWup5G2kiP2oY"
                    />
                </Link>
                <CardFooter
                    className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <IoLocationOutline/><p className="text-tiny text-white/80">Based in Toluca, México.</p>
                </CardFooter>
            </Card>
        </>
    );
};

export default OtherProjectsCard;