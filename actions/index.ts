"use server";

import {
  contactFormFields,
  contactFormUrl,
  valuationFormFields,
  valuationFormUrl,
} from "@/config";
import {
  ContactSchema,
  ContactSchemaType,
  ValuationSchema,
  ValuationSchemaType,
} from "@/types";

export async function contactForm(data: ContactSchemaType) {
  const result = await ContactSchema.safeParseAsync(data);
  if (!result.success) {
    return { success: false, errors: result.error };
  }
  const formData = new FormData();
  formData.append(contactFormFields.firstName, data.firstName);
  formData.append(contactFormFields.lastName, data.lastName);
  formData.append(contactFormFields.email, data.email);
  if (data.phone) {
    formData.append(contactFormFields.phone, data.phone);
  }
  if (data.enquiry) {
    formData.append(contactFormFields.enquiry, data.enquiry);
  }
  try {
    await fetch(contactFormUrl, {
      method: "POST",
      body: formData,
    });
    return { success: true };
  } catch (error) {
    return { success: false, errors: error };
  }
}

export async function valuationForm(data: ValuationSchemaType) {
  const result = await ValuationSchema.safeParseAsync(data);
  if (!result.success) {
    return { success: false, errors: result.error };
  }
  const formData = new FormData();
  formData.append(valuationFormFields.firstName, data.firstName);
  formData.append(valuationFormFields.lastName, data.lastName);
  formData.append(valuationFormFields.email, data.email);
  formData.append(valuationFormFields.address, data.address);
  formData.append(valuationFormFields.postalCode, data.postcode);
  let valuationType;
  if (data.valuationType == "sale") {
    valuationType = "Sales Only";
  } else if (data.valuationType == "rental") {
    valuationType = "Rental Only";
  } else {
    valuationType = "Rental & Sales";
  }
  formData.append(valuationFormFields.valuationType, valuationType);
  formData.append(valuationFormFields.phone, data.phone);
  try {
    await fetch(valuationFormUrl, {
      method: "POST",
      body: formData,
    });
    return { success: true };
  } catch (error) {
    return { success: false, errors: error };
  }
}
