'use client'

import {useTranslation} from "react-i18next";
import {Button, Form, Input, Textarea, Card, CardHeader, CardBody, addToast} from "@heroui/react";
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

const ContactCard = () => {

    const {t} = useTranslation();

    let title = t("Contact Title")
    let description = t("Contact Title")

    const handleSendEmail = async (e: any) => {

        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const form = e.currentTarget;
        let data = Object.fromEntries(new FormData(e.currentTarget));

        try {
            const res = await emailjs.send(serviceID ?? "", templateID ?? "", data, userID ?? "");

            if (res.status === 200) {
                addToast({
                    title: title,
                    description: description,
                    color: "success",
                })
            }
            return form.reset()
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                return addToast({
                    title: title,
                    description: description,
                    color: "warning",
                });
            }
        }
    }

    return (
        <Card className="md:col-span-2 md:row-span-2 p-4">
            <CardHeader>
                <h4 className="text-2xl font-bold uppercase">{t("Contact Title")}</h4>
            </CardHeader>
            <CardBody>
                <Form id="contact-form"
                      className="w-full flex flex-col justify-center items-center gap-4"
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