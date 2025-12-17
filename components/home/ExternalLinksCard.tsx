'use client'

import {Card} from "@heroui/card";
import Image from "next/image";
import {CiMail} from "react-icons/ci";
import Link from "next/link";

const ExternalLinksCard = () => {
    return (
        <div className="flex flex-wrap items-center justify-around gap-4">
            <Card isFooterBlurred
                  className="border-none relative w-[45%] md:w-[44%] min-h-20 group transition-all duration-500 ease-in-out hover:bg-foreground"
                  radius="lg">
                <Image
                    alt="Victini"
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 transition-all duration-500 ease-in-out group-hover:rotate-y-360"
                    height={35}
                    width={35}
                    src="/images/victini.gif"
                />
            </Card>
            <Card isFooterBlurred
                  className="border-none relative w-[45%] md:w-[44%] min-h-20"
                  radius="lg">
                <Link href="https://github.com/G0rz" target="_blank" rel="noreferrer">
                    <Image
                        alt="Github Icon"
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 hover:scale-110"
                        height={30}
                        width={30}
                        src="/images/github-mark-white.svg"
                    />
                </Link>
            </Card>
            <Card isFooterBlurred
                  className="border-none relative w-[45%] md:w-[44%] min-h-20"
                  radius="lg">
                <Link href="https://www.linkedin.com/in/typenull/" target="_blank" rel="noreferrer">
                    <Image
                        alt="Linkedin Icon"
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-7 hover:scale-110"
                        height={30}
                        width={30}
                        src="/images/InBug-White.png"
                    />
                </Link>
            </Card>
            <Card isFooterBlurred className="border-none relative w-[45%] md:w-[44%] min-h-20" radius="lg">
                <Link href="mailto:leonardo.becerril@hotmail.com" target="_blank" rel="noreferrer">
                    <CiMail
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-8 hover:scale-110"/>
                </Link>
            </Card>
        </div>
    );
};

export default ExternalLinksCard;