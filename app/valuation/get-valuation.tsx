"use client";

import { valuationForm } from "@/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ValuationSchema, ValuationSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function GetValuationForm() {
  const form = useForm({
    resolver: zodResolver(ValuationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      postcode: "",
      valuationType: "both",
    },
  });
  async function onSubmit(data: ValuationSchemaType) {
    const result = await valuationForm(data);
    if (result.success) {
      form.reset();
      alert("Form submitted successfully");
    } else {
      alert("There was an error submitting the form");
    }
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <Form {...form}>
        <FormField
          control={form.control}
          name="valuationType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  defaultValue="sales_rental"
                  className="flex items-center justify-between gap-4 mt-10"
                  value={field.value}
                  onValueChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="sales_rental" />
                    <Label>Sales & Rental valuation</Label>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <RadioGroupItem value="sales" />
                    <Label>Sales Only valuation</Label>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <RadioGroupItem value="rental" />
                    <Label>Rental Only valuation</Label>
                  </div>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 mt-10 gap-x-4 gap-y-6">
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
              <FormItem>
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
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="Postcode" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="col-span-2 flex items-start mt-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="ml-2">
                  I consent to Property Nirvana using the information submitted
                  on this form to contact me. I can opt Out at any time. For
                  more information on this please review our Privacy Policy.
                </FormLabel>
              </FormItem>
            )}
          />
          <div className="col-span-2 flex justify-end">
            <Button className="py-3 px-6 rounded-md w-40 mt-6" size="xl">
              Submit Form
            </Button>
          </div>
        </div>
      </Form>
    </form>
  );
}
