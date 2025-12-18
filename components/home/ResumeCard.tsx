'use client'
import Image from "next/image";
import {Button} from "@heroui/button";
import {Card, CardBody, CardHeader, CardFooter} from "@heroui/card";
import Link from "next/link";
import {RxDownload} from "react-icons/rx";

const ResumeCard = () => {
    return (
        <Card className="md:col-span-2 md:row-span-2 p-4">
              <CardBody className="relative flex flex-wrap justify-around items-start gap-4">
                  <p className="absolute top-0 right-0 px-3 py-1 border-1 border-success rounded-2xl text-sm font-bold text-success">
                      <span className="animate-pulse size-2 inline-block bg-success rounded-full mr-2"></span>AVALIBLE FOR
                      WORK</p>
                  <Image
                      alt="Profile Picture"
                      width={250}
                      height={250}
                      className="rounded-full object-cover w-1/2"
                      loading="eager"
                      src="https://avatars.githubusercontent.com/u/63682340?v=4"
                  />
                  <h1 className={'text-2xl font-bold'}>Leonardo Yael Bazán Becerril</h1>
                  <h2 className={'text-xl'}>Computer Systems Engineer | Full-Stack Web developer</h2>

                  <Button as={Link} href="/LeonardoBecerril-CV-2026.pdf" variant="solid" color="primary"
                          className="w-full  transition-all font-bold">DOWNLOAD
                      RESUME <RxDownload/>
                  </Button>
              </CardBody>
        </Card>
    );
};

export default ResumeCard;