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
    <div className="w-full max-w-4xl mx-auto p-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Form {...form}>
          <FormField
            control={form.control}
            name="valuationType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    defaultValue="both"
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 sm:mt-10"
                    value={field.value}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="both" id="valuationBoth" />
                      <Label
                        className="text-sm sm:text-base cursor-pointer"
                        htmlFor="valuationBoth"
                      >
                        Sales & Rental valuation
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="sales" id="valuationSales" />
                      <Label
                        className="text-sm sm:text-base cursor-pointer"
                        htmlFor="valuationSales"
                      >
                        Sales Only valuation
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="rental" id="valuationRent" />
                      <Label
                        className="text-sm sm:text-base cursor-pointer"
                        htmlFor="valuationRent"
                      >
                        Rental Only valuation
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-10 gap-4 sm:gap-x-4 sm:gap-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="h-10 sm:h-11"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="h-10 sm:h-11"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-10 sm:h-11"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Address"
                      className="h-10 sm:h-11"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone"
                      className="h-10 sm:h-11"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Postcode
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Postcode"
                      className="h-10 sm:h-11"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="col-span-1 sm:col-span-2 flex items-start gap-3 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5 flex-shrink-0"
                    />
                  </FormControl>
                  <FormLabel className="text-xs sm:text-sm leading-relaxed cursor-pointer">
                    I consent to Property Nirvana using the information
                    submitted on this form to contact me. I can opt out at any
                    time. For more information on this please review our Privacy
                    Policy.
                  </FormLabel>
                </FormItem>
              )}
            />

            <div className="col-span-1 sm:col-span-2 flex justify-center sm:justify-end mt-6">
              <Button
                type="submit"
                className="py-3 px-6 rounded-md w-full sm:w-40 h-11 text-sm font-medium"
                size="default"
              >
                Submit Form
              </Button>
            </div>
          </div>
        </Form>
      </form>
    </div>
  );
}
