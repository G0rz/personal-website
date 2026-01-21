'use client'

import {useEffect} from "react";
import Image from "next/image";
import {useTranslation} from "react-i18next";
import {Card, CardBody, CardHeader} from "@heroui/react";
import useMeasure from 'react-use-measure'
import {motion, animate, useMotionValue} from "framer-motion";

export const techStackImages = [
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js"},
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React"},
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Tailwind CSS"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
        alt: "Material UI"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        alt: "Bootstrap"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript"
    },
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", alt: "PHP"},
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", alt: "Firebase"},
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        alt: "PostgreSQL"
    },
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", alt: "MySQL"},
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg", alt: "Oracle"},
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "Linux"},
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git"},
];


const TechStackCard = () => {

    const [ref, {width}] = useMeasure();
    const xTranslation = useMotionValue(0);
    const {t} = useTranslation();

    useEffect(() => {
        const finalPosition = -width / 2 - 8;

        const controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })
        return controls.stop
    }, [xTranslation, width]);

    return (
        <Card className="lg:col-span-3 lg:row-span-1 p-4">
            <CardHeader>
                <h3 className="text-xl font-extrabold uppercase">{t("Tech Stack Title")}</h3>
            </CardHeader>
            <CardBody className="relative overflow-hidden min-h-[70px] flex justify-center items-center">
                <motion.div className="absolute left-0 gap-4 flex" ref={ref} style={{x: xTranslation}}>
                    {[...techStackImages, ...techStackImages].map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="min-w-[70px] flex justify-center items-center hover:scale-110 transition-transform"
                            >
                                <Image
                                    alt={item.alt}
                                    width={70}
                                    height={70}
                                    loading="lazy"
                                    src={item.src}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </CardBody>
        </Card>
    );
};

export default TechStackCard;