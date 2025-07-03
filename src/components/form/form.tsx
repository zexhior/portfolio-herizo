"use client";

import { z } from "zod";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState } from "react";
import CustomForm from "../customForm/customForm";
import { useLanguage } from "@/provider/langprovider";
import { FormType } from "@/app/types/form";
import { contactSchema } from "@/app/types/contactSchema";


interface IForm {
    name: string
    label: string
    placeHolder: string
    type: string
}

const FormComponent = ({ }) => {
    const { lang } = useLanguage();
    const [dialog, setDialog] = useState<{ title: string, message: string }>({ title: "", message: "" })
    const [formParams, setFormParams] = useState<IForm[]>([])
    const [contact, setContact] = useState<FormType>({ name: "", subject: "", email: "", message: "" })
    const [sendText, setSendText] = useState<string>("")
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            subject: "",
            email: "",
            message: "",
        }
    })
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch('/form.json').then(response => {
            response.json().then(data => {
                const result: { form: IForm[], sendText: string, dialog: { title: string, message: string } } = data[lang]
                setFormParams(result.form)
                setSendText(result.sendText)
                setDialog(result.dialog)
            })
        })
    }, [lang])

    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
        try {
            await fetch("https://mail-service-1-bl7t.onrender.com/api/v1/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, message: `Nom : ${values.name}, email: ${values.email}, message: ${values.message}` }) })
            setContact({ ...values })
            setIsOpen(true)
        } catch (error) {
            alert(error)
        }
    }

    const formItems = [
        <Input key="input-1" />, <Input key="input-2" />, <Input key="input-3" />, <Textarea key="textarea-1" />
    ]

    return <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {
                    formParams?.map((item, index) => {
                        return <CustomForm
                            key={index}
                            formControl={form}
                            type={item.type}
                            label={item.label}
                            name={item.name}
                            placeholder={item.placeHolder} className={`bg-white text-black ${index < formParams.length - 1 ? "" : "h-52"}`} >
                            {formItems[index]}
                        </CustomForm>
                    })
                }
                <button className="mt-4 w-full bg-slate-600 rounded-md text-white text-lg font-bold p-4" type="submit">{sendText}</button>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{dialog.title} {contact.name}</DialogTitle>
                        </DialogHeader>
                        <p>{dialog.message}</p>
                    </DialogContent>
                </Dialog>
            </form>
        </Form>
    </div >;
};

export default FormComponent;