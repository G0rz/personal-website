'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Tooltip,
    useDisclosure,
    Button
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {Card, CardBody, CardHeader} from "@heroui/card";

export const attachments = [
    {
        id: 3,
        name: "Google Ads for Beginners",
        type: "Project Certificate",
        start_date: "",
        finish_date: "May 2023",
        assets: []
    },
    {
        id: 2,
        name: "Getting Started with Data Analytics on AWS",
        type: "Project Certificate",
        start_date: "July 2021",
        finish_date: "November 2022",
        assets: []
    },
    {
        id: 1,
        name: "TOEFL ITP Certification - CEFR Level B1",
        type: "Certificate",
        start_date: "August 2015",
        finish_date: "June 2021",
        assets: []
    },
];


const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (<>
            <Modal  backdrop={"opaque"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Card className="lg:col-span-2 md:row-span-2 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold">Attachments</h3>
                </CardHeader>
                <CardBody>
                    {attachments.length > 0 && attachments.map((element, index) => {
                        return <div key={index} className="flex flex-wrap items-center justify-start                                                     ">
                            <div className="w-3/4 mb-4">
                                <p className="text-bold capitalize">{element.name}</p>
                                <p className="text-bold capitalize text-default-400">{element.type}</p>
                            </div>
                            {element.assets.length === 0 && <Tooltip content="Details">
                                <Button
                                    className="self-start ms-auto"
                                    color="primary"
                                    variant="flat"
                                    isIconOnly
                                    aria-label="Details"
                                    onPress={onOpen}
                                >
                                    <FaEye/>
                                </Button>
                            </Tooltip>}
                        </div>

                    })}
                </CardBody>
            </Card>
        </>
    );
};

export default EducationCard;