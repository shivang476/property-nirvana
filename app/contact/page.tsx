import MaxWidthWrapper from "@/components/max-width";
import OwnerPhoto from "@/assets/owner-photo.jpg";
import Image from "next/image";
import ContactForm from "./contact-form";
import FootNote from "@/components/foot-note";
import { CtaCards } from "@/components/cta-cards";

export default function ContactUs() {
  return (
    <MaxWidthWrapper className="mt-4 px-4">
      <div className="md:w-[600px] flex flex-col">
        <h2 className="font-platypi text-2xl font-semibold">
          Contact Mehar Gill
        </h2>
        <div className="flex mt-4 h-44 overflow-hidden text-white">
          <Image
            src={OwnerPhoto}
            alt="Owner Photo"
            className="w-56 md:w-80 object-cover object-center rounded-l-lg"
          />
          <div className="bg-[#232323] w-60 rounded-r-lg p-4 flex flex-col">
            <span className="text-zinc-300 text-sm">Residential Sales</span>
            <h2 className="text-2xl font-semibold mt-4">Mehar Gill</h2>
            <h4 className="font-medium text-sm mt-4">West London</h4>
            <span className="text-xs text-zinc-400">
              Contact: +44 7949 038303
            </span>
          </div>
        </div>
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
