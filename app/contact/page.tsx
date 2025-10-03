import MaxWidthWrapper from "@/components/max-width";
import ContactForm from "./contact-form";
import FootNote from "@/components/foot-note";
import { CtaCards } from "@/components/cta-cards";
import Link from "next/link";

export default function ContactUs() {
  return (
    <MaxWidthWrapper className="mt-4 px-4">
      <div className="md:w-[600px] flex flex-col">
        <h2 className="font-platypi text-2xl font-semibold">
          Contact Property Nirvana
        </h2>
        <Link className="mt-2 text-xl font-semibold" href="tel:01753 318 023">
          01753 318 023
        </Link>
        <hr className="my-6" />
        <ContactForm />
        <hr className="my-6" />
        <FootNote>
          <FootNote.Title>Privacy Notice</FootNote.Title>
          <FootNote.Content>
            We may use your personal information in our provision fo services to
            you. Please see our Privacy Notice for details of how your personal
            information will be used.
          </FootNote.Content>
        </FootNote>
      </div>
      <CtaCards className="p-0 mt-0" />
    </MaxWidthWrapper>
  );
}
