import {Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure} from "@heroui/react";
import {useTranslation} from "react-i18next";
import React from "react";

interface ComponentProps {
    header: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onOpen: () => void;
}


const GlobalDrawer = ({ header, isOpen, onOpenChange, onOpen, children }: ComponentProps) => {


    const {t} = useTranslation();

    return (
        <Drawer backdrop="blur" placement="left" size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">{header}</DrawerHeader>
                        <DrawerBody>
                            {children}
                        </DrawerBody>
                        <DrawerFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                {t("Close Button")}
                            </Button>
                        </DrawerFooter>
                    </>
                )}
            </DrawerContent>
        </Drawer>
    );
};

export default GlobalDrawer;