import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";

export default function TenantFees() {
  return (
    <div>
      <HeadingFrame heading="Tenants Fees" />
      <MaxWidthWrapper className="px-4">
        <FootNote className="mt-10">
          <FootNote.Title>Tenant Fees & Charges Guide</FootNote.Title>
          <FootNote.Content>
            At Property Nirvana, we believe in transparency and clarity when it
            comes to tenant fees and charges. This guide provides a
            comprehensive overview of the costs associated with renting a
            property through our agency, ensuring you are fully informed before
            making any commitments.
          </FootNote.Content>
        </FootNote>
        <div className="grid gap-8 mt-12">
          <GuideEntry
            title="1. Holding Reservation Fee"
            points={[
              "Equivalent to one week’s rent, subject to referencing and contract.",
              "Deducted from the total monies owed before move-in.",
            ]}
          />
          <GuideEntry
            title="2. Security Deposit"
            points={[
              "Equivalent to five weeks’ rent.",
              "Held as protection against damages or breaches of tenancy.",
            ]}
          />
          <GuideEntry
            title="3. Company Let"
            points={[
              "Administration fee: £300 (non-refundable) for a company let.",
            ]}
          />
          <GuideEntry
            title="4. Default Fees"
            points={[
              "Loss of Key or Security Device: Cost of replacement (reasonable costs only).",
              "Late Rent Payments: 3% above Bank of England base rate per day on outstanding rent (as per tenancy agreement).",
              "Tenancy Variation, Assignment, or Novation: £50 (inc. VAT) per request.",
              "Early Termination: Fee charged depending on the remaining tenancy term, reflecting the landlord/agency’s loss.",
            ]}
          />
          <GuideEntry
            title="5. Retaining the Holding Deposit"
            points={[
              "The holding deposit may be retained if: - The tenant fails a Right to Rent check. - False or misleading information is provided that materially affects suitability. - The tenant withdraws from the tenancy before the agreement deadline. - The tenant fails to take reasonable steps to enter into a tenancy agreement.",
            ]}
          />
          <GuideEntry
            title="6. Professional Memberships & Protection"
            points={[
              "Property Nirvana are proud members of: - The Property Ombudsman - The Deposit Protection Scheme (DPS) - Client Money Protect (CMP)",
            ]}
          />
          <GuideEntry
            title="7. Client Money Protection"
            points={[
              "We are accredited agents of the Client Money Protection (CMP) scheme, ensuring tenant deposits and funds are fully safeguarded.",
            ]}
          />
        </div>
        <FootNote className="mt-10">
          <FootNote.Title>Ready to Take the Next Step?</FootNote.Title>
          <FootNote.Content>
            Our lettings team can guide you through every stage of the rental
            process. Contact us today to secure your new home with confidence.
          </FootNote.Content>
        </FootNote>
      </MaxWidthWrapper>
    </div>
  );
}
