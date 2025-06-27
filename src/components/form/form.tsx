"use client";

import { z } from "zod";
import { Form, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { ButtonComponent } from "../button/button";

const contactSchema = z.object({
    subject: z.string().nonempty({ message: "L'objet de votre message ne devrait pas être vide" }).max(1000, { message: "Le sujet doit avoir au maximum 1000 caractères" }),
    email: z.string().email({ message: "L'adresse e-mail n'est pas valide" }).nonempty({ message: "L'adresse e-mail ne devrait pas être vide" }),
    message: z.string().nonempty({ message: "Le message ne devrait pas être vide" }).max(1000, { message: "Le message doit avoir au maximum 1000 caractères" }),
})

interface IFormComponent {
    data?: Object | undefined | null
}

const FormComponent: React.FC<IFormComponent> = ({ data }) => {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            subject: "",
            email: "",
            message: "",
        }
    })

    return <div>
        <Form {...form}>
            <FormItem>
                <FormLabel>Nom : </FormLabel>
                <Input type="text" name="subject" placeholder="Votre nom" className="bg-white text-black" />
            </FormItem>
            <FormItem>
                <FormLabel>Objet</FormLabel>
                <Input type="text" name="subject" placeholder="Votre objet" className="bg-white text-black" />
            </FormItem>
            <FormItem>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" placeholder="Votre email" className="bg-white text-black" />
            </FormItem>
            <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" placeholder="Votre message" className="bg-white text-black h-52" />
            </FormItem>
            <ButtonComponent func={() => { }} className="mt-4 w-full bg-slate-600 rounded-md text-white text-lg font-normal">Envoyer</ButtonComponent>
        </Form>
    </div>;
};

export default FormComponent;