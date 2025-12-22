'use client'
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Tooltip,
    useDisclosure,
    Button
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState("")
    let attachments = t("Attachments Array", {returnObjects: true});

    return (<>
            <Modal backdrop={"opaque"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="pt-12">
                                <iframe
                                    src={selectedItem}
                                    className="h-[375px]"
                                    title="PDF Preview"
                                >
                                    <p>Your browser does not support iframes. You can
                                        <a href={selectedItem}>download the PDF</a> instead.</p>
                                </iframe>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Card className="lg:col-span-2 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold">{t("Attachments Title")}</h3>
                </CardHeader>
                <CardBody>
                    {attachments && Array.isArray(attachments) && attachments.map((element, index) => {
                        return <div key={index}
                                    className="flex flex-wrap items-center justify-start                                                     ">
                            <div className="w-3/4 mb-4">
                                <p className="text-bold capitalize">{element.name}</p>
                                <p className="text-bold capitalize text-default-400">{element.type}</p>
                            </div>
                            {element.assets.length !== 0 && <Tooltip content="Details">
                                <Button
                                    className="self-start ms-auto"
                                    color="primary"
                                    variant="flat"
                                    isIconOnly
                                    aria-label="Details"
                                    onPress={() => {
                                        onOpen();
                                        return setSelectedItem(element.assets);
                                    }}
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