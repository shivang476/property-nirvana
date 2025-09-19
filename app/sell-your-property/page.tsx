import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SellYourProperty() {
  return (
    <div>
      <HeadingFrame heading="Sell Your Property" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>Sell Your Property</FootNote.Title>
          <FootNote.Content>
            Selling your home is one of the biggest financial decisions you’ll
            ever make — and we’re here to make the process as smooth and
            stress-free as possible. Whether you’re a first-time seller or an
            experienced landlord, our team provides expert guidance at every
            stage.
          </FootNote.Content>
        </FootNote>
        <div className="grid gap-8 mt-12">
          <GuideEntry
            title="1. Accurate Valuations"
            points={[
              "We use local market knowledge and the latest data to give you a realistic and competitive property valuation.",
            ]}
          />
          <GuideEntry
            title="2. Maximum Exposure"
            points={[
              "Your property will be advertised across leading online portals, our website, and our buyer database.",
            ]}
          />
          <GuideEntry
            title="3. Professional Marketing"
            points={[
              "From stunning photography to floor plans and EPCs, we make sure your property stands out.",
            ]}
          />
          <GuideEntry
            title="4. Dedicated Support"
            points={[
              "Our agents handle everything from viewings to negotiations, keeping you informed throughout.",
            ]}
          />
          <GuideEntry
            title="5. Tailored Strategy"
            points={[
              "We adapt our approach to suit your timeline, goals, and preferences.",
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
