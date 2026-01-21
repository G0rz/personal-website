'use client'

import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {Card} from "@heroui/react";

const ExternalLinksCard = () => {

    const {theme, setTheme} = useTheme()

    return (
        <div className="lg:col-span-1 lg:row-span-1 flex flex-wrap items-center justify-around gap-4">
            <Card
                className="relative w-[44%] min-h-20 h-[45%] group transition-all duration-500 ease-in-out hover:bg-foreground"
            >
                <Image
                    onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
                    alt="Victini"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-1/2 transition-all duration-500 ease-in-out group-hover:rotate-y-360 cursor-pointer"
                    height={35}
                    width={35}
                    src="/images/victini.gif"
                    unoptimized
                />
            </Card>
            <Card
                className="relative w-[44%] min-h-20 h-[45%]"
            >
                <Link href="https://github.com/G0rz" target="_blank" rel="noreferrer">
                    <FaGithub
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-1/2 hover:scale-110 "/>
                </Link>
            </Card>
            <Card
                className="relative w-[44%] min-h-20 h-[45%]"
            >
                <Link href="https://www.linkedin.com/in/typenull/" target="_blank" rel="noreferrer">
                    <FaLinkedin
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-1/2 hover:scale-110"/>
                </Link>
            </Card>
            <Card className="relative w-[44%] min-h-20 h-[45%]">
                <Link href="mailto:leonardo.becerril@hotmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-1/2 hover:scale-110 "/>
                </Link>
            </Card>
        </div>
    );
};

export default ExternalLinksCard;