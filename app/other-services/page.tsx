import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function OtherServices() {
  return (
    <div>
      <HeadingFrame heading="Other Services" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>Other Services</FootNote.Title>
          <FootNote.Content>
            We provide a range of additional services to support landlords,
            sellers, and buyers.
          </FootNote.Content>
        </FootNote>
        <div className="grid gap-8 mt-12">
          <GuideEntry
            title="1. Mortgages"
            points={[
              "Connect with trusted advisors to secure the best mortgage deals for your property purchase.",
            ]}
          />
          <GuideEntry
            title="2. Gas Safety Certificate"
            points={[
              "Certified inspections to ensure your property meets legal safety standards.",
            ]}
          />
          <GuideEntry
            title="3. EICR Certificate"
            points={[
              "Professional testing to guarantee your property is safe and compliant.",
            ]}
          />
          <GuideEntry
            title="4. Energy Performance Certificates (EPCs)"
            points={[
              "Accredited EPC assessments to highlight your property’s energy efficiency.",
            ]}
          />
          <GuideEntry
            title="5. Professional Photography"
            points={[
              "High-quality images to showcase your property at its very best.",
            ]}
          />
          <GuideEntry
            title="6. Floor Plan Drawings"
            points={[
              "Detailed and accurate floor plans to give buyers and tenants a clear view of the layout.",
            ]}
          />
        </div>
        <div className="flex justify-center mt-20">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "xl" }),
              "px-10 py-4 rounded-lg",
            )}
          >
            Contact Us
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
