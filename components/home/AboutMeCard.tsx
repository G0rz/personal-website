'use client'

import {Card, CardBody, CardHeader} from "@heroui/card";

const AboutMeCard = () => {
    return (
        <Card className="md:col-span-2 p-4 flex items-center justify-center">
            <CardHeader>
                <h3 className="text-2xl font-bold">About Me</h3>
            </CardHeader>
            <CardBody>
                {/*<p>Ingeniero en Sistemas Computacionales y Desarrollador Full Stack con 7 años de experiencia construyendo aplicaciones robustas y escalables. Experto en Front End con React, me apasiona crear interfaces de usuario fluidas y de alto rendimiento. Busco trasladar mi sólida base en arquitectura de componentes y gestión de estado hacia el Desarrollo Mobile, aprovechando tecnologías transversales para crear experiencias nativas impactantes.</p>*/}
                <p className="text-md">Computer Systems Engineer and Full Stack Developer with 7 years of experience
                    building robust and scalable applications. Front-End specialist with strong expertise in React,
                    passionate about creating high-performance, smooth, and intuitive user interfaces. Seeking to
                    leverage a solid foundation in component architecture and state management to transition into Mobile
                    Development, utilizing cross-platform technologies to deliver impactful native experiences.</p>
            </CardBody>
        </Card>
    );
};

export default AboutMeCard;