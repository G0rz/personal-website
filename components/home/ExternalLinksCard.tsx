'use client'

import {useTheme} from "next-themes";
import {Card} from "@heroui/card";
import Image from "next/image";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import Link from "next/link";

const ExternalLinksCard = () => {

    const {theme, setTheme} = useTheme()

    return (
        <div className="flex flex-wrap items-center justify-around gap-4">
            <Card isFooterBlurred
                  className="border-none relative w-[45%] md:w-[44%] min-h-20 group transition-all duration-500 ease-in-out hover:bg-foreground"
                  radius="lg">
                <Image
                    onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
                    alt="Victini"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 transition-all duration-500 ease-in-out group-hover:rotate-y-360 cursor-pointer"
                    height={35}
                    width={35}
                    src="/images/victini.gif"
                    unoptimized
                />
            </Card>
            <Card isFooterBlurred
                  className="border-none relative w-[45%] md:w-[44%] min-h-20"
                  radius="lg">
                <Link href="https://github.com/G0rz" target="_blank" rel="noreferrer">
                    <FaGithub
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 hover:scale-110"/>
                </Link>
            </Card>
            <Card isFooterBlurred
                  className="border-none relative w-[45%] md:w-[44%] min-h-20"
                  radius="lg">
                <Link href="https://www.linkedin.com/in/typenull/" target="_blank" rel="noreferrer">
                    <FaLinkedin
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 hover:scale-110"/>
                </Link>
            </Card>
            <Card isFooterBlurred className="border-none relative w-[45%] md:w-[44%] min-h-20" radius="lg">
                <Link href="mailto:leonardo.becerril@hotmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 hover:scale-110"/>
                </Link>
            </Card>
        </div>
    );
};

export default ExternalLinksCard;