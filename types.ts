import z from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .optional()
    .or(z.literal("")),
  enquiry: z
    .string()
    .min(10, "Enquiry must be at least 10 characters")
    .optional()
    .or(z.literal("")),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;

export const ValuationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
  postcode: z.string().min(1, "Postcode is required"),
  consent: z.literal(true, "You must agree to the terms"),
  valuationType: z.enum(["sale", "rental", "both"]),
});

export type ValuationSchemaType = z.infer<typeof ValuationSchema>;
