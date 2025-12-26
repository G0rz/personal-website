'use client'

import {Button, Form, Input, Textarea, Card, CardBody} from "@heroui/react";
import {useState} from "react";
import {CardHeader} from "@heroui/card";
import {useTranslation} from "react-i18next";

const ContactCard = () => {

    const [action, setAction] = useState(null);
    const {t} = useTranslation();

    return (
        <Card className="md:col-span-2 md:row-span-2 p-4">
            <CardHeader>
                <h5 className="text-2xl font-bold">{t("Contact Title")}</h5>
            </CardHeader>
            <CardBody>
                <Form
                    className="w-full flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        let data = Object.fromEntries(new FormData(e.currentTarget));
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
                        name="username"
                        placeholder={t("Placeholder Name")}
                        type="text"
                        autoComplete="off"
                    />
                    <Input
                        isRequired
                        errorMessage={t("Error Subject")}
                        label={t("Input Label Subject")}
                        labelPlacement="outside"
                        name="username"
                        placeholder={t("Placeholder Subject")}
                        type="text"
                        autoComplete="off"
                    />
                    <Textarea
                        isRequired
                        errorMessage={t("Error Message")}
                        label={t("Input Label Message")}
                        labelPlacement="outside"
                        name="username"
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