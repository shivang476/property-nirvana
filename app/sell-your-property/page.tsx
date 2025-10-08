import FootNote from "@/components/foot-note";
import GuideEntry from "@/components/guide-entry";
import HeadingFrame from "@/components/heading-frame";
import MaxWidthWrapper from "@/components/max-width";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AgencyGuide() {
  const agencyTypes = [
    { key: "soleAgency", label: "Sole Agency" },
    { key: "jointAgency", label: "Joint Agency" },
    { key: "multipleAgencies", label: "Multiple Agencies" },
  ] as const;

  const tableData = {
    fees: {
      soleAgency: "0.75%",
      jointAgency: "1.25%",
      multipleAgencies: "1.75%",
    },
    terms: {
      soleAgency: "(16 week minimum term)",
      jointAgency: "(16 week minimum term)",
      multipleAgencies: "(30 days notice period)",
    },
  };

  return (
    <div className="mt-10 md:mt-20">
      <h2 className="font-platypi text-2xl font-semibold">
        Agency Comparison Table
      </h2>
      <div className="overflow-x-auto mt-8">
        <div className="border border-black overflow-auto rounded-lg">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-input/40">
                <th className="border border-black p-4 text-left">Service</th>
                {agencyTypes.map((type) => (
                  <th
                    key={type.key}
                    className="border border-black p-4 text-center"
                  >
                    {type.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-input/40">
                <td className="border border-black p-4 font-semibold">
                  Commission Rate
                </td>
                {agencyTypes.map((type) => (
                  <td
                    key={type.key}
                    className="border border-black p-4 text-center font-medium"
                  >
                    {tableData.fees[type.key]}
                  </td>
                ))}
              </tr>
              <tr className="bg-input/50">
                <td className="border border-black p-4 font-semibold">Terms</td>
                {agencyTypes.map((type) => (
                  <td
                    key={type.key}
                    className="border border-black p-4 text-center font-medium text-sm"
                  >
                    {tableData.terms[type.key]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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
        <AgencyGuide />
        <FootNote className="mt-10">
          <FootNote.Title>Sole Agency</FootNote.Title>
          <FootNote.Content>
            With sole agency, you get one dedicated estate agent working
            exclusively to sell your property. At Property Nirvana, this means
            you’ll have a single, committed point of contact guiding you through
            the entire process. Sole agency is usually the most cost-effective
            option, as the commission fee is lower than with other types of
            agreements, and you only pay if we successfully find you a buyer and
            complete the sale.
          </FootNote.Content>
        </FootNote>
        <FootNote className="mt-10">
          <FootNote.Title>Joint Agency</FootNote.Title>
          <FootNote.Content>
            With joint agency, you benefit from two estate agents working
            together to market your property. At Property Nirvana, we partner
            with another trusted agent to give your home wider exposure while
            still keeping the process efficient and coordinated. Both agents
            share responsibility for finding a buyer, and once the property is
            sold, the commission is split between us.
          </FootNote.Content>
        </FootNote>
        <FootNote className="mt-10">
          <FootNote.Title>Multiple Agency</FootNote.Title>
          <FootNote.Content>
            With multiple agency, your property is marketed by several different
            estate agents at the same time. Only the agent who secures the buyer
            and completes the sale earns the commission. Property Nirvana can be
            one of those agents, giving your property maximum exposure while
            creating healthy competition in the market. This approach often
            delivers quicker results, though the commission fee is usually
            higher than with sole or joint agency.
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
