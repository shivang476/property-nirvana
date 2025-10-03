import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/max-width";
import FootNote from "@/components/foot-note";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CtaCards } from "@/components/cta-cards";
import { CheckIcon, MinusIcon } from "lucide-react";

function ComparisonTable() {
  const services = [
    {
      name: "Marketing & Advertising",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Accompanied Viewings (7 days a week)",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Tenant Referencing & Guarantor Checks",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Tenancy Agreement Preparation",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "First Month's Rent & Deposit Collection",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Utility & Council Tax Notifications",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Tenant Standing Order Setup",
      letOnly: true,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Monthly Rent Collection & Statements",
      letOnly: false,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Rent renewals and lease extensions",
      letOnly: false,
      rentCollection: true,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Repairs & Maintenance Management",
      letOnly: false,
      rentCollection: false,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Tenant Check-in & Check-out",
      letOnly: false,
      rentCollection: false,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Inventory Coordination",
      letOnly: false,
      rentCollection: false,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Quarterly Property Inspections & Reports",
      letOnly: false,
      rentCollection: false,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "Monitoring of legal requirements",
      letOnly: false,
      rentCollection: false,
      fullManagement: true,
      rentGuarantee: true,
    },
    {
      name: "End-of-Tenancy Deposit Handling",
      letOnly: false,
      rentCollection: false,
      fullManagement: true,
      rentGuarantee: true,
    },
  ];

  const serviceLevels = [
    { key: "letOnly", label: "Tenant Introduction" },
    { key: "rentCollection", label: "Rent Collection" },
    { key: "fullManagement", label: "Fully Managed" },
    { key: "rentGuarantee", label: "FM + Guaranteed Rent" },
  ] as const;
  return (
    <div className="mt-10 md:mt-20">
      <h2 className="font-platypi text-2xl font-semibold">
        Service Comparison Table
      </h2>

      <div className="overflow-x-auto mt-8">
        <div className="border border-black overflow-auto rounded-lg">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-input/40">
                <th className="border border-black p-4 text-left">Service</th>
                {serviceLevels.map((level) => (
                  <th
                    key={level.key}
                    className="border border-black p-4 text-center"
                  >
                    {level.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.name} className={"bg-input/40"}>
                  <td className="border border-black p-4">{service.name}</td>
                  {serviceLevels.map((level) => (
                    <td
                      key={level.key}
                      className="border border-black p-4 text-center"
                    >
                      {service[level.key] ? (
                        <CheckIcon className="mx-auto size-5" />
                      ) : (
                        <MinusIcon className="mx-auto size-4" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-input/50">
                <td className="border border-black p-4 font-semibold">
                  Typical Fees
                </td>
                <td className="border border-black p-4 text-center font-medium text-sm">
                  £800 (inc. VAT)
                </td>
                <td className="border border-black p-4 text-center font-medium text-sm">
                  5% (inc. VAT)
                </td>
                <td className="border border-black p-4 text-center font-medium text-sm">
                  7% (inc. VAT)
                </td>
                <td className="border border-black p-4 text-center font-medium text-sm">
                  Subject to Property
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

type ServiceDetailsProps = {
  serviceName: string;
  description?: string;
  detail: string;
  charges?: string;
  additionalCharges?: string;
};

function ServiceDetails(props: ServiceDetailsProps) {
  return (
    <div>
      <h2 className="text-xl font-platypi md:text-2xl font-semibold mt-12">
        {props.serviceName}
      </h2>
      <p className="text-gray-700 text-sm md:text-base">{props.description}</p>
      {props.detail && (
        <p className="mt-4 text-sm md:text-base border border-black rounded-lg p-2 md:p-4 font-medium">
          {props.detail}
        </p>
      )}
      {props.charges && (
        <div className="flex">
          <p
            className={cn(buttonVariants({ size: "lg" }), "ml-auto w-fit mt-4")}
          >
            {props.charges}
          </p>
        </div>
      )}
      {props.additionalCharges && (
        <p className="text-sm text-gray-700 mt-2 ml-auto w-fit">
          {props.additionalCharges}
        </p>
      )}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Landlord Services",
};

export default function LandlordServices() {
  return (
    <div>
      <MaxWidthWrapper className="mt-10 md:mt-20 max-w-6xl px-4">
        <div>
          <h1 className="font-platypi text-3xl font-bold">Landlord Services</h1>
          <p className="font-platypi text-gray-700 mt-4">
            At Property Nirvana, we offer three service levels to suit every
            landlord — from simple tenant placement to full property management.
          </p>
        </div>
        <ComparisonTable />
        <ServiceDetails
          serviceName="Tenant Introduction"
          detail="We: - Advise on furniture, decoration, and presentation to maximise rental value. - Market your property across our website, major portals, lettings lists, and local press. - Arrange and attend all tenant viewings (7 days a week, 8am–9pm). - Carry out professional tenant referencing, including credit and guarantor checks. - Draft tenancy agreements and necessary documentation. - Collect the first month’s rent and deposit. - Notify utility companies and local authorities of new occupiers. - Set up tenant standing orders to pay future rent directly to you."
          charges="£800 (inc. VAT)"
        />
        <ServiceDetails
          serviceName="Rent Collection"
          description="Ideal if you want us to handle rent payments but prefer to manage repairs yourself. "
          detail="In addition to Let Only, we: - Collect rent on your behalf and transfer funds directly to your bank. - Provide monthly rent statements with income, expenses, and VAT breakdowns. - Chase late payments promptly and advise on legal recovery if necessary. - Handle renewals and lease extensions."
          charges="5% (inc. VAT)"
        />
        <ServiceDetails
          serviceName="Fully Managed"
          description="The perfect solution for landlords seeking total peace of mind."
          detail="In addition to Let Only and Rent Collection, we: - Manage day-to-day repairs and maintenance (within pre-agreed spending limits). - Arrange tenant check-in and check-out services, ensuring inventory compliance. - Conduct quarterly inspections with photographic condition reports. - Ensure compliance with legal safety requirements (e.g. annual gas certificates). - Coordinate prompt works to encourage tenant satisfaction and tenancy renewals. - Manage end-of-tenancy processes, including deposit handling via inventory specialists."
          charges="7% (inc. VAT)"
        />
        <ServiceDetails
          serviceName="Full Management + Guaranteed Rent"
          description="The perfect solution for landlords seeking total peace of mind."
          detail="In addition to Let Only and Rent Collection, we: - Manage day-to-day repairs and maintenance (within pre-agreed spending limits). - Arrange tenant check-in and check-out services, ensuring inventory compliance. - Conduct quarterly inspections with photographic condition reports. - Ensure compliance with legal safety requirements (e.g. annual gas certificates). - Coordinate prompt works to encourage tenant satisfaction and tenancy renewals. - Manage end-of-tenancy processes, including deposit handling via inventory specialists."
          charges="Price is Subject to Each Property"
        />
        <FootNote>
          <FootNote.Title>Why Choose Property Nirvana?</FootNote.Title>
          <FootNote.Content>
            Our flexible service levels let you decide how involved you want to
            be — whether it’s just finding a tenant, collecting rent, or leaving
            everything to us.
          </FootNote.Content>
        </FootNote>
      </MaxWidthWrapper>
      <CtaCards className="p-0 mt-20" />
    </div>
  );
}
