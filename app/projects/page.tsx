'use client'

import Link from "next/link";
import {useTranslation} from "react-i18next";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader, Input,
    Pagination,
    PressEvent, Select,
    SelectItem,
    Tooltip,
    useDisclosure
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {CiLink} from "react-icons/ci";
import GlobalDrawer from "@/components/ui/drawer/GlobalDrawer";
import {useMemo, useState} from "react";

const repositories = [{
    name: "Proyecto 1",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: ["JS", "CSS", "HTML", ""]
}, {
    name: "Proyecto 2",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: ["JS", "CSS", "HTML", ""]
}, {
    name: "Proyecto 3",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: ["JS", "CSS", "HTML", ""]
}, {
    name: "Proyecto 4",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: ["JS", "CSS", "HTML", ""]
}, {
    name: "Proyecto 5",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: ["JS", "CSS", "HTML", ""]
}, {
    name: "Proyecto 6",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: ["JS", "CSS", "HTML", ""]
}, {
    name: "Proyecto 7",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}, {
    name: "Proyecto 8",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}, {
    name: "Proyecto 9",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}, {
    name: "Proyecto 10",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}, {
    name: "Proyecto 11",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}, {
    name: "Proyecto 12",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}, {
    name: "Proyecto 13",
    details: [{problem: "", my_role: "", solution: "", outcomes: ""}],
    github_url: "",
    production_url: "https://pablo-marte.com/ ",
    test_url: "",
    tech_stack: [{key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"}]
}];

const stack = [
    {key: "js", label: "JS"},
    {key: "css", label: "CSS"},
    {key: "html", label: "HTML"},
    {key: "sql", label: "SQL"},

];

export default function Page() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();

    const itemsPerPage = 6;
    const [page, setPage] = useState(1);
    const [values, setValues] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const displayData = useMemo(() => {
        let start = (page - 1) * itemsPerPage;
        return repositories.slice(start, start + itemsPerPage);
    }, [repositories]);

    console.log(values)

    return (
        <div className="relative w-full min-h-screen p-[10%] flex flex-wrap justify-center items-center gap-8">
            <Link href="/" className="absolute top-10 left-10">Go Home</Link>
            <GlobalDrawer header="Pablo Marte - Website" isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen}>
                <p>Problem/Goal</p>
                <p>My Role and Process: Fui el diseñador y desarrollador del sitio web, siempre
                    consultando a Pablo Marte sobre su preferencia respecto a los elementos que se
                    mostraban y el orden. LLegue a diseñar dos propuestas, una más simple que la otra
                    apostando por el minimalismo y el dinamismo que las imagenes expresan.</p>
                <p>Solutions: Create a landing page for show some pictures and a</p>
                <p>Outcomes/Impact</p>
                <p>Answer the "who:Me and Pablou Marte, what:Create a landing page, why:for been more
                    close to their fans and share with the world passion, how:designing and developing
                    an modern interface"</p>
                <p className="text-sm italic"><span className="font-bold"> TECH STACK: </span>React
                    18.3.1, MUI 5.15.19, Tailwind 3.4.X/4.0, Stripe, Firebase, Google Cloud, Docker,
                    MongoDB, Git</p>
                "IMPLEMENTAR UNA GALERIA DE IMAGENES CON CAPTURAS DE PANTALLA DEL RESULTADO FINAL O DE
                HOT POINTS"
            </GlobalDrawer>
            <Select
                label="Favorite Animal"
                placeholder="Select an tech"
                selectedKeys={values}
                selectionMode="multiple"
                onSelectionChange={setValues}
                size="sm"
                isClearable
                labelPlacement="outside"

            >
                {stack.map((tech) => (
                    <SelectItem key={tech.key}>{tech.label}</SelectItem>
                ))}
            </Select>

            {repositories.length !== 0 && displayData.filter((repo) => values.every(element => repo.tech_stack.includes(element))).map((repository, index) => {
                return <Card key={index}
                             className="md:w-[30%] h-[275px] bg-[url('/images/latest_project.webp')] bg-cover bg-top bg-no-repeat">
                    <CardHeader className="bg-black/40">
                        <h5 className="text-2xl font-bold text-white/80 uppercase">{repository.name}</h5>
                    </CardHeader>
                    <CardBody className="h-[10vh]">
                    </CardBody>
                    <CardFooter className="flex items-center justify-end gap-2">
                        <Tooltip content={t("Details Button")}>
                            <Button
                                variant="flat"
                                className="text-white font-bold"
                                isIconOnly
                                aria-label={t("Details Button")}
                                onPress={() => onOpen()}
                            >
                                <FaEye/>
                            </Button>
                        </Tooltip>
                        <Tooltip content={t("Preview Button")}>
                            <Button
                                as={Link}
                                href="https://pablo-marte.com/"
                                target="_blank"
                                rel="noreferrer"
                                variant="flat"
                                className="text-white font-bold"
                                isIconOnly
                                aria-label={t("Preview Button")}
                            >
                                <CiLink/>
                            </Button>
                        </Tooltip>
                    </CardFooter>
                </Card>
            })}

            <button onClick={() => setPage(page + 1)}> Next Page</button>
            <button onClick={() => setPage(page - 1)}> Prev Page</button>
        </div>
    );
};