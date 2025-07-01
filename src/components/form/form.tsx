"use client";

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { ButtonComponent } from "../button/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import CustomForm from "../customForm/customForm";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const contactSchema = z.object({
    name: z.string().nonempty({ message: "Votre nom ne devrait pas être vide" }).max(2000, { message: "Votre nom est trop" }),
    subject: z.string().nonempty({ message: "L'objet de votre message ne devrait pas être vide" }).max(1000, { message: "Le sujet doit avoir au maximum 1000 caractères" }),
    email: z.string().email({ message: "L'adresse e-mail n'est pas valide" }).nonempty({ message: "L'adresse e-mail ne devrait pas être vide" }),
    message: z.string().nonempty({ message: "Le message ne devrait pas être vide" }).max(1000, { message: "Le message doit avoir au maximum 1000 caractères" }),
})

interface IFormComponent {
    data?: Object | undefined | null
}

const FormComponent: React.FC<IFormComponent> = ({ data }) => {
    const [contact, setContact] = useState<{ name: string, subject: string, email: string, message: string }>({ name: "", subject: "", email: "", message: "" })
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

    const onSubmit = (values: z.infer<typeof contactSchema>) => {
        setContact({ name: values.name, subject: values.subject, email: values.email, message: values.message })
        setIsOpen(true)
    }

    return <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CustomForm
                    formControl={form}
                    type="text"
                    label="Nom"
                    name="name"
                    placeholder="Votre nom" className="bg-white text-black" >
                    <Input />
                </CustomForm>
                <CustomForm
                    formControl={form}
                    type="text"
                    label="Objet"
                    name="subject"
                    placeholder="Votre objet" className="bg-white text-black" >
                    <Input />
                </CustomForm>
                <CustomForm
                    formControl={form}
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Votre email" className="bg-white text-black">
                    <Input />
                </CustomForm>
                <CustomForm
                    formControl={form}
                    label={"Message"}
                    name="message"
                    placeholder="Votre message"
                    className={"bg-white text-black h-52"}>
                    <Textarea />
                </CustomForm>
                <button className="mt-4 w-full bg-slate-600 rounded-md text-white text-lg font-bold p-4" type="submit">Envoyer</button>
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