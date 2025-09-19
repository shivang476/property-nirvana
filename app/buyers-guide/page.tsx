import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BuyersGuide() {
  return (
    <div>
      <HeadingFrame heading="Buyers Guide" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>
            Property Buyer’s Guide: From Offer to Completion
          </FootNote.Title>
          <FootNote.Content>
            Our team is here to guide you from valuation to completion. Contact
            us today to book your free consultation.
          </FootNote.Content>
        </FootNote>
        <div className="grid mt-14 gap-8">
          <GuideEntry
            title="1. Arranging Finances"
            points={[
              "Get a mortgage in principle before making an offer.",
              "Budget for additional costs: survey, solicitor fees, Stamp Duty, and moving costs.",
            ]}
          />
          <GuideEntry
            title="2. Making an Offer"
            points={[
              "When you find the right property, your estate agent submits your offer to the seller.",
              "Once accepted, the property is marked as Sold Subject to Contract (SSTC).",
            ]}
          />
          <GuideEntry
            title="3. Instructing a Solicitor"
            points={[
              "Appoint a conveyancer/solicitor to handle the legal work.",
              "Provide them with your ID and proof of funds for anti-money laundering checks.",
            ]}
          />
          <GuideEntry
            title="4. Applying for a Mortgage"
            points={[
              "Submit a full mortgage application with your lender.",
              "The lender arranges a valuation to ensure the property’s worth the agreed price.",
            ]}
          />
          <GuideEntry
            title="5. Property Survey"
            points={[
              "You may choose an independent survey (HomeBuyer Report or full Building Survey).",
              "Surveys can highlight issues that may affect your decision or negotiations.",
            ]}
          />
          <GuideEntry
            title="6. Legal Searches & Enquiries"
            points={[
              "Your solicitor carries out searches (local authority, drainage, environmental).",
              "They raise enquiries with the seller’s solicitor about the property.",
            ]}
          />
          <GuideEntry
            title="7. Mortgage Offer Issued"
            points={[
              "If everything checks out, your lender issues a formal mortgage offer.",
              "A copy is sent to you and your solicitor.",
            ]}
          />
          <GuideEntry
            title="8. Reviewing Contracts"
            points={[
              "Your solicitor reviews the draft contract and title deeds.",
              "They explain the details and ask you to sign once satisfied.",
            ]}
          />
          <GuideEntry
            title="9. Exchange of Contracts"
            points={[
              "You pay a deposit (usually 10% of the purchase price).",
              "Contracts are exchanged — the sale is now legally binding.",
              "Agree on a completion date (moving day).",
            ]}
          />
          <GuideEntry
            title="10. Completion Day"
            points={[
              "Your solicitor transfers the balance to the seller’s solicitor.",
              "Once funds are confirmed, you can collect the keys from the estate agent.",
              "Congratulations — you’re now a homeowner!",
            ]}
          />
          <GuideEntry
            title="Buyers Tips for a Smooth Purchase"
            points={[
              "Have documents (ID, proof of deposit, mortgage in principle) ready early.",
              "Keep in close contact with your solicitor and mortgage broker.",
              "Budget realistically for all costs beyond the purchase price.",
              "Stay patient — delays are common in property chains.",
            ]}
          />
        </div>
        <FootNote className="mt-10">
          <FootNote.Title>Need Help Buying a Home?</FootNote.Title>
          <FootNote.Content>
            Our team is here to guide you through every step of the buying
            process. Contact us today to start your property search with
            confidence.
          </FootNote.Content>
        </FootNote>
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
