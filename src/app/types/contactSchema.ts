import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Votre nom ne devrait pas être vide" })
    .max(2000, { message: "Votre nom est trop" }),
  subject: z
    .string()
    .nonempty({ message: "L'objet de votre message ne devrait pas être vide" })
    .max(1000, { message: "Le sujet doit avoir au maximum 1000 caractères" }),
  email: z
    .string()
    .email({ message: "L'adresse e-mail n'est pas valide" })
    .nonempty({ message: "L'adresse e-mail ne devrait pas être vide" }),
  message: z
    .string()
    .nonempty({ message: "Le message ne devrait pas être vide" })
    .max(1000, { message: "Le message doit avoir au maximum 1000 caractères" }),
});
