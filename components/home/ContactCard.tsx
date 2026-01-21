'use client'

import {useTranslation} from "react-i18next";
import {Button, Form, Input, Textarea, Card, CardHeader, CardBody, addToast} from "@heroui/react";
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import { FormEvent } from "react";

const ContactCard = () => {

    const {t} = useTranslation();

    const title = t("Email Title Success")
    const titleE = t("Email Title Error")
    const description = t("Email Description Success")
    const descriptionE = t("Email Description Error")

    const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as Record<string, unknown>;

        if (!serviceID || !templateID || !userID) {
            console.error("EmailJS environment variables are missing.");
            addToast({
                title: titleE,
                description: "Configuration error. Please try again later.",
                color: "danger",
            });
            return;
        }

        try {
            const res = await emailjs.send(serviceID, templateID, data, userID);

            if (res.status === 200) {
                addToast({
                    title: title,
                    description: description,
                    color: "success",
                })
                form.reset();
            }
        } catch (err) {
            console.error("Email send error:", err);
            if (err instanceof EmailJSResponseStatus || err instanceof Error) {
                 addToast({
                    title: titleE,
                    description: descriptionE,
                    color: "warning",
                });
            }
        }
    }

    return (
        <Card className="lg:col-span-2 lg:row-span-2 p-4">
            <CardHeader>
                <h3 className="font-bold uppercase">{t("Contact Title")}</h3>
            </CardHeader>
                <CardBody className="flex flex-wrap justify-center items-center">
                <Form id="contact-form"
                      className="w-full gap-4"
                      onSubmit={handleSendEmail}
                >
                    <Input
                        isRequired
                        errorMessage={t("Error Email")}
                        label={t("Input Label Email")}
                        labelPlacement="outside"
                        name="email"
                        placeholder={t("Placeholder Email")}
                        type="email"
                        autoComplete="email"
                    />
                    <Input
                        isRequired
                        errorMessage={t("Error Name")}
                        label={t("Input Label Name")}
                        labelPlacement="outside"
                        name="name"
                        placeholder={t("Placeholder Name")}
                        type="text"
                        autoComplete="name"
                    />
                    <Input
                        isRequired
                        errorMessage={t("Error Subject")}
                        label={t("Input Label Subject")}
                        labelPlacement="outside"
                        name="subject"
                        placeholder={t("Placeholder Subject")}
                        type="text"
                    />
                    <Textarea
                        isRequired
                        errorMessage={t("Error Message")}
                        label={t("Input Label Message")}
                        labelPlacement="outside"
                        name="message"
                        placeholder={t("Placeholder Message")}
                        minRows={4}
                    />
                    <Button className="w-full font-bold" color="primary" type="submit">
                        {t("Submit Button")}
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

export default ContactCard;