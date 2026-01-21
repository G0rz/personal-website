'use client'

import {useState} from "react";
import {useTranslation} from "react-i18next";
import {
    Card, CardBody, CardHeader,
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Tooltip,
    useDisclosure,
    Button,
    ModalHeader
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import Image from "next/image";
import {RxDownload} from "react-icons/rx";
import Link from "next/link";

interface AttachmentAsset {
    image: string;
    file: string;
}

interface Attachment {
    name: string;
    type: string;
    assets: AttachmentAsset;
}

const AttachmentsCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState<AttachmentAsset>({image:"", file:""})
    const attachments = t("Attachments Array", {returnObjects: true}) as Attachment[];

    const handleOpenModal = (assets: AttachmentAsset) => {
        setSelectedItem(assets);
        onOpen();
    };

    return (
        <>
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{t("Preview")}</ModalHeader>
                            <ModalBody className="flex justify-center items-center">
                                {selectedItem.image && (
                                    <div className="relative w-full h-[400px]">
                                        <Image 
                                            className=" rounded-lg"
                                            fill
                                            src={selectedItem.image.trim()}
                                            alt="Preview"
                                        />
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button 
                                    color="success" 
                                    variant="flat" 
                                    as={Link}
                                    href={selectedItem.file.trim()} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    startContent={<RxDownload />}
                                >
                                    {t("Download Button")}
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Card className="lg:col-span-2 lg:row-span-1 p-4">
                <CardHeader>
                    <h3 className="font-bold uppercase">{t("Attachments Title")}</h3>
                </CardHeader>
                <CardBody className="gap-4">
                    {attachments && Array.isArray(attachments) && attachments.map((element, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-lg transition-colors">
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">{element.name}</p>
                                <p className="text-sm text-default-500 font-medium">{element.type}</p>
                            </div>
                            {element.assets && (
                                <Tooltip content={t("Details Button")}>
                                    <Button
                                        color="primary"
                                        variant="flat"
                                        isIconOnly
                                        aria-label={t("Details Button")}
                                        onPress={() => handleOpenModal(element.assets)}
                                    >
                                        <FaEye />
                                    </Button>
                                </Tooltip>
                            )}
                        </div>
                    ))}
                </CardBody>
            </Card>
        </>
    );
};

export default AttachmentsCard;