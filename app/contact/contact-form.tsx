"use client";
import { contactForm } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema, ContactSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      enquiry: "",
    },
  });
  async function onSubmit(data: ContactSchemaType) {
    const result = await contactForm(data);
    if (result.success) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("There was an error submitting the form.");
      console.error(result.errors);
    }
  }
  return (
    <form className="w-full mt-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Form {...form}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Phone Number (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enquiry"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Enquiry (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Enquiry" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="mt-5 flex gap-2 justify-end">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="w-full max-w-[150px]"
            onClick={() => form.reset()}
          >
            Clear
          </Button>
          <Button
            variant="default"
            size="lg"
            className="w-full max-w-[150px]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </form>
  );
}
