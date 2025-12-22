'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";
import {motion, animate, useMotionValue} from "framer-motion";
import Image from "next/image";
import useMeasure from 'react-use-measure'
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export const techStackImages = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
];


const TechStackCard = () => {

    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    const {t} = useTranslation();

    useEffect(() => {
        let controls;
        let finalPosition = -width/2 - 8;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType:"loop",
            repeatDelay: 0,
        })
        return controls.stop
    }, [xTranslation, width]);

    return (
        <Card className="lg:col-span-3 p-4">
            <CardHeader>
                <h3 className="text-2xl font-bold">{t("Tech Stack Title")}</h3>
            </CardHeader>
            <CardBody className="relative overflow-hidden min-h-[70px]">
                <motion.div className="absolute left-0 gap-4 flex" ref={ref} style={{x:xTranslation}}>
                    {[...techStackImages, ...techStackImages].map((item, index) => {
                        return <motion.div  key={index} className="min-w-[50px] flex justify-center items-center ">
                            <Image alt="Tech Stack Item" width={50} height={50} loading="eager" className="object-cover" src={item}/>
                        </motion.div>
                    })}
                </motion.div>
            </CardBody>
        </Card>
    );
};

export default TechStackCard;