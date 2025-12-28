'use client'

import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, Form, Input, Textarea, Card, CardHeader, CardBody} from "@heroui/react";

const ContactCard = () => {

    const [action, setAction] = useState(null);
    const {t} = useTranslation();

    return (
        <Card className="md:col-span-2 md:row-span-2 p-4">
            <CardHeader>
                <h4 className="text-2xl font-bold uppercase">{t("Contact Title")}</h4>
            </CardHeader>
            <CardBody>
                <Form
                    className="w-full flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        let data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log(data)
                    }}
                >
                    <Input
                        isRequired
                        errorMessage={t("Error Email")}
                        label={t("Input Label Email")}
                        labelPlacement="outside"
                        name="email"
                        placeholder={t("Placeholder Email")}
                        type="email"
                        autoComplete="off"
                    />
                    <Input
                        isRequired
                        errorMessage={t("Error Name")}
                        label={t("Input Label Name")}
                        labelPlacement="outside"
                        name="name"
                        placeholder={t("Placeholder Name")}
                        type="text"
                        autoComplete="off"
                    />
                    <Input
                        isRequired
                        errorMessage={t("Error Subject")}
                        label={t("Input Label Subject")}
                        labelPlacement="outside"
                        name="subject"
                        placeholder={t("Placeholder Subject")}
                        type="text"
                        autoComplete="off"
                    />
                    <Textarea
                        isRequired
                        errorMessage={t("Error Message")}
                        label={t("Input Label Message")}
                        labelPlacement="outside"
                        name="message"
                        placeholder={t("Placeholder Message")}
                        type="text"
                        autoComplete="off"

                    />
                    <Button className="w-full" color="primary" type="submit">
                        {t("Submit Button")}
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

export default ContactCard;