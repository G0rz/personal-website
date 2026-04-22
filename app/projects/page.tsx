"use client"
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Tooltip} from "@heroui/react";
import Link from "next/link";
import {CiLink} from "react-icons/ci";
import {useTranslation} from "react-i18next";
import { FaGithub } from "react-icons/fa";
import "@/app/i18n";

interface Project {
    name: string;
    description: string;
    tech_stack: string[];
    url: string;
    repo: string;
    type: string;
}

export default function Projects() {
    const {t} = useTranslation();
    const projects = t("Other Projects Array", {returnObjects: true}) as Project[];

    return (
        <div className="w-screen min-h-[80vh] lg:px-12 px-4">
            <Link className="text-xl font-extrabold uppercase underline underline-offset-4" href="/">Back</Link>
            <div className="w-full h-full flex flex-wrap items-start justify-start mt-8">
                {projects && Array.isArray(projects) && projects.map((project, index) => {
                    return <Card key={index}
                                 className="lg:w-[30%] w-full bg-[url('/images/projects/project_1.webp')] bg-cover bg-center bg-no-repeat group">
                        <CardHeader className="bg-black/60 backdrop-blur-sm">
                            <p className="font-bold text-white uppercase">{project.name}</p>
                            <p className="text-white uppercase text-xs ms-auto">{project.type}</p>
                        </CardHeader>
                        <CardBody className="h-[150px]"/>
                        <CardFooter className="flex items-center justify-start gap-2 backdrop-blur-sm">
                            {project.tech_stack.map((item, index) => {
                                return   <span key={index} className="px-2 py-1 bg-primary-300 text-white rounded-md text-sm">
                                                        {item}
                                                    </span>
                            })}
                            <ButtonGroup className="ms-auto">
                                <Tooltip content={t("Preview Button")}>
                                    <Button
                                        as={Link}
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="light"
                                        className="text-white font-bold hover:bg-white/20"
                                        isIconOnly
                                        aria-label={t("Preview Button")}
                                    >
                                        <FaGithub size={24}/>
                                    </Button>
                                </Tooltip>
                            <Tooltip content={t("Preview Button")}>
                                <Button
                                    as={Link}
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="light"
                                    className="text-white font-bold hover:bg-white/20"
                                    isIconOnly
                                    aria-label={t("Preview Button")}
                                >
                                    <CiLink size={24}/>
                                </Button>
                            </Tooltip>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                })}
            </div>
        </div>
    );
}