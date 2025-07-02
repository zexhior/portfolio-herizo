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
import Mailjet from "node-mailjet";
import { useLanguage } from "@/provider/langprovider";

const contactSchema = z.object({
    name: z.string().nonempty({ message: "Votre nom ne devrait pas être vide" }).max(2000, { message: "Votre nom est trop" }),
    subject: z.string().nonempty({ message: "L'objet de votre message ne devrait pas être vide" }).max(1000, { message: "Le sujet doit avoir au maximum 1000 caractères" }),
    email: z.string().email({ message: "L'adresse e-mail n'est pas valide" }).nonempty({ message: "L'adresse e-mail ne devrait pas être vide" }),
    message: z.string().nonempty({ message: "Le message ne devrait pas être vide" }).max(1000, { message: "Le message doit avoir au maximum 1000 caractères" }),
})

interface IFormComponent {
    data?: Object | undefined | null
}

interface IForm {
    name: string
    label: string
    placeHolder: string
    type: string
}

const FormComponent: React.FC<IFormComponent> = ({ data }) => {
    const { lang } = useLanguage();
    const [formParams, setFormParams] = useState<IForm[]>([])
    const [contact, setContact] = useState<{ name: string, subject: string, email: string, message: string }>({ name: "", subject: "", email: "", message: "" })
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
                const result: { form: IForm[], sendText: string } = data[lang]
                setFormParams(result.form)
                setSendText(result.sendText)
            })
        })
    }, [lang])

    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
        try {
            const result = await fetch("http://localhost:3400/api/v1/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, message: `Nom : ${values.name}, email: ${values.email}, message: ${values.message}` }) })
            setContact({ ...values })
            setIsOpen(true)
        } catch (error) {
            alert(error)
        }
    }

    const formItems = [
        <Input />, <Input />, <Input />, <Textarea />
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
                            <DialogTitle>Salutations {contact.name}</DialogTitle>
                        </DialogHeader>
                        <p>Merci de m'avoir envoyé un message! Je vous repondrais aussi vite que possible.</p>
                    </DialogContent>
                </Dialog>
            </form>
        </Form>
    </div >;
};

export default FormComponent;