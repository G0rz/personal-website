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
    Button
} from "@heroui/react";
import {FaEye} from "react-icons/fa";
import Image from "next/image";
import {RxDownload} from "react-icons/rx";
import Link from "next/link";

const EducationCard = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {t} = useTranslation();
    const [selectedItem, setSelectedItem] = useState({image:"", file:""})
    let attachments = t("Attachments Array", {returnObjects: true});

    return (<>
            <Modal backdrop={"opaque"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <Image className="pt-8" width={500} height={500} src={selectedItem.image.trim()}
                                       alt={'Preview'}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" isIconOnly variant="light" as={Link}
                                        href={selectedItem.file.trim()} target="_blank" rel="noreferrer">
                                    <RxDownload/>
                                </Button>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    {t("Close Button")}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Card className="md:col-span-2 md:row-span-1 p-4">
                <CardHeader>
                    <h3 className="text-2xl font-bold uppercase">{t("Attachments Title")}</h3>
                </CardHeader>
                <CardBody>
                    {attachments && Array.isArray(attachments) && attachments.map((element, index) => {
                        return <div key={index}
                                    className="flex flex-wrap items-center justify-start                                                     ">
                            <div className="w-3/4 mb-4">
                                <p className="text-xl font-bold">{element.name}</p>
                                <p className="text-lg font-bold text-default-400">{element.type}</p>
                            </div>
                            {element.assets.length !== 0 && <Tooltip content={t("Details Button")}>
                                <Button
                                    className="self-start ms-auto"
                                    color="primary"
                                    variant="flat"
                                    isIconOnly
                                    aria-label={t("Details Button")}
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