import { CtaCards } from "@/components/cta-cards";
import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SellersGuide() {
  return (
    <div>
      <HeadingFrame heading="Sellers Guide" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>
            Property Seller’s Guide: From Offer to Completion
          </FootNote.Title>
          <FootNote.Content>
            Selling your house is an exciting milestone, but the legal process
            can sometimes feel daunting. To help you understand what happens
            after you agree a sale, here is a clear step-by-step guide tailored
            for UK property sellers.
          </FootNote.Content>
        </FootNote>

        <div className="grid mt-14 gap-8">
          <GuideEntry
            title="1. Offer Accepted"
            points={[
              "Your estate agent confirms the buyer’s offer in writing.",
              "The property is marked as Sold Subject to Contract (SSTC).",
              "Both you and the buyer instruct solicitors (conveyancers) to manage the legal work.",
            ]}
          />
          <GuideEntry
            title="2. Memorandum of Sale"
            points={[
              "Prepared by your estate agent and sent to all parties.",
              "Confirms key details: agreed price, buyer and seller information, and solicitors’ contact details",
            ]}
          />
          <GuideEntry
            title="3. Draft Contract & Seller’s Forms"
            points={[
              "Your solicitor obtains your title deeds and prepares the draft contract.",
              "You complete property information forms (TA6, TA10, and TA7 if leasehold).",
              "These documents are sent to the buyer’s solicitor.",
            ]}
          />
          <GuideEntry
            title="4. Searches & Enquiries"
            points={[
              "Buyer’s solicitor carries out searches (local authority, drainage, environmental).",
              "They raise any enquiries about your property (e.g. planning permissions, guarantees, alterations).",
              "You may need to provide additional documents or clarification.",
            ]}
          />
          <GuideEntry
            title="5. Contract Agreement"
            points={[
              "Once enquiries are satisfied, the contract is finalised.",
              "Both sides agree on a completion (moving) date.",
            ]}
          />
          <GuideEntry
            title="6. Exchange of Contracts"
            points={[
              "Both parties sign their contracts.",
              "The buyer pays a deposit (usually 10%).",
              "The sale is now legally binding.",
              "The buyer usually takes out buildings insurance from this point.",
            ]}
          />
          <GuideEntry
            title="7. Preparing for Completion"
            points={[
              "Begin packing and confirm removals.",
              "Your solicitor prepares a final financial statement.",
              "Any mortgage balance is redeemed from the sale proceeds.",
            ]}
          />
          <GuideEntry
            title="8. Completion Day"
            points={[
              "The buyer’s solicitor transfers the balance of funds to your solicitor.",
              "Once received, completion is confirmed, and the estate agent releases the keys.",
              "Congratulations — your sale is complete!",
            ]}
          />
          <GuideEntry
            title="Tips for a Smooth Sale"
            points={[
              "Respond promptly to solicitor requests.",
              "Keep guarantees, certificates, and planning documents ready.",
              "Choose an experienced conveyancer with good communication.",
              "Stay flexible with dates — small delays are common in chains.",
            ]}
          />
        </div>
        <FootNote className="mt-14">
          <FootNote.Title>Ready to Sell Your House?</FootNote.Title>
          <FootNote.Content>
            Our team is here to guide you from valuation to completion. Contact
            us today to book your free consultation.
          </FootNote.Content>
        </FootNote>
        {/* <div className="flex justify-center mt-10"> */}
        {/*   <Link */}
        {/*     className={cn( */}
        {/*       buttonVariants({ size: "lg" }), */}
        {/*       "px-10 py-4 rounded-lg", */}
        {/*     )} */}
        {/*     href="/contact" */}
        {/*   > */}
        {/*     Contact Us */}
        {/*   </Link> */}
        {/* </div> */}
      </MaxWidthWrapper>
      <CtaCards className="p-0 mt-10" />
    </div>
  );
}
