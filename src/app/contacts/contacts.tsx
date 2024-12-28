"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import CustomForm from "../../components/customForm/customForm";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Votre nom doit comporter au moins 2 caractères" })
    .max(100),
  email: z.string().email({ message: "Veuillez saisir un adresse e-mail!" }),
  subject: z
    .string()
    .nonempty({ message: "L'object de votre message ne doit pas être vide!" }),
  message: z
    .string()
    .nonempty({ message: "Veuillez le message que vous souhaitez m'envoyer!" }),
});

const ContactPage = () => {
  const [customStyle, setCustomStyle] = useState("bg-white");
  const [labelColor, setLabelColor] = useState("white");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(
      `Salutation ${values.name}! Votre message a été bien envoyé! Merci de bien patienter pour une réponse de ma part!`
    );
  };

  return (
    <div className="flex flex-wrap bg-gray-800">
      <div className="w-screen flex justify-center">
        <h2 className="text-white font-bold py-5 text-2xl">Contact</h2>
      </div>
      <div className="w-screen md:w-1/2 px-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomForm
              formControl={form}
              label={"Votre nom : "}
              labelColor={labelColor}
              name="name"
              placeholder="Name"
              className={customStyle}
            >
              <Input />
            </CustomForm>
            <CustomForm
              formControl={form}
              label={"Votre e-mail : "}
              labelColor={labelColor}
              name="email"
              placeholder="E-mail"
              className={customStyle}
            >
              <Input />
            </CustomForm>
            <CustomForm
              formControl={form}
              label={"Object : "}
              labelColor={labelColor}
              name="subject"
              placeholder="Objet"
              className={customStyle}
            >
              <Input />
            </CustomForm>
            <CustomForm
              formControl={form}
              label={"Votre message : "}
              labelColor={labelColor}
              name="message"
              placeholder="Message"
              className={customStyle.concat(" h-48")}
            >
              <Textarea />
            </CustomForm>
            <Button>Envoyer</Button>
          </form>
        </Form>
      </div>
      <div className="h-screen sm:h-auto w-screen md:w-1/2 flex flex-col sm:justify-start justify-center items-center"></div>
    </div>
  );
};

export default ContactPage;
