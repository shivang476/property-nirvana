import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";

export default function TenantsGuide() {
  return (
    <div>
      <HeadingFrame heading="Tenants Guide" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>
            Next Steps After Viewing a Rental Property in England
          </FootNote.Title>
          <FootNote.Content>
            You’ve found a rental property you love — what happens next? Here’s
            a simple guide to the steps you’ll follow after a successful
            viewing.
          </FootNote.Content>
        </FootNote>
        <div className="grid mt-14 gap-8">
          <GuideEntry
            title="1. Making an Offer"
            points={[
              "Tell the letting agent you’d like to rent the property.",
              "Confirm your proposed move-in date, tenancy length, and any requests (e.g. furniture, pets).",
              "The landlord reviews your offer and decides whether to accept.",
            ]}
          />
          <GuideEntry
            title="2. Paying a Holding Deposit"
            points={[
              "If your offer is accepted, you’ll usually pay a holding deposit (capped at 1 week’s rent).",
              "This reserves the property for you while checks are carried out.",
              "The holding deposit will later go towards your first month’s rent or be refunded.",
            ]}
          />
          <GuideEntry
            title="3. Referencing & Tenant Checks"
            points={[
              "The agent/landlord carries out referencing, which includes:",
              "ID and Right to Rent checks (passport/visa).",
              "Credit history check.",
              "Employment/income verification.",
              "Previous landlord references (if applicable).",
              "A guarantor may be required if you don’t meet the criteria.",
            ]}
          />
          <GuideEntry
            title="4. Signing the Tenancy Agreement"
            points={[
              "Once referencing is complete, you’ll be given a tenancy agreement (usually an Assured Shorthold Tenancy).",
              "Read it carefully before signing — it sets out your rights and responsibilities.",
            ]}
          />
          <GuideEntry
            title="5. Paying Move-In Costs"
            points={[
              "Before moving in, you’ll typically need to pay:",
              "Tenancy deposit (up to 5 weeks’ rent, protected in a deposit scheme).",
              "First month’s rent in advance.",
              "Your holding deposit will usually be deducted from this total.",
            ]}
          />
          <GuideEntry
            title="6. Inventory & Key Handover"
            points={[
              "You’ll be provided with an inventory (a record of the property’s condition).",
              "Check it carefully and take photos of any existing marks/damage.",
              "Once everything is agreed, you’ll receive the keys and can move in!",
            ]}
          />

          <GuideEntry
            title="Quick Tips"
            points={[
              "Double-check all documents before signing.",
              "Make sure your deposit is registered in a government-approved scheme.",
              "Keep copies of your tenancy agreement and all receipts.",
              "Take meter readings on the day you move in.",
            ]}
          />
        </div>
        <FootNote className="mt-10">
          <FootNote.Title>Need Help Finding Your Next Rental?</FootNote.Title>
          <FootNote.Content>
            Our lettings team can guide you through every stage of the rental
            process. Contact us today to secure your new home with confidence.
          </FootNote.Content>
        </FootNote>
      </MaxWidthWrapper>
    </div>
  );
}
