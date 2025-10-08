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
  charges?: string;
  additionalCharges?: string;
  children?: React.ReactNode;
};

function ServiceDetails(props: ServiceDetailsProps) {
  return (
    <div>
      <h2 className="text-xl font-platypi md:text-2xl font-semibold mt-12">
        {props.serviceName}
      </h2>
      <p className="text-gray-700 text-sm md:text-base">{props.description}</p>
      {props.children && (
        <p className="mt-4 text-sm md:text-base border border-black rounded-lg p-2 md:p-4 font-medium">
          {props.children}
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
          charges="£800 (inc. VAT)"
        >
          Property Nirvana will;
          <ul className="list-disc list-inside mt-2">
            <li>
              Provide expert advice on furniture, décor, and presentation to
              help maximise your rental income
            </li>
            <li>
              Promote your property through our website, leading property
              portals and targeted lettings lists
            </li>
            <li>
              Arrange and personally attend tenant viewings, 7 days a week
              between 8am and 10pm
            </li>
            <li>
              Carry out thorough tenant referencing, including credit checks and
              guarantor verification
            </li>
            <li>
              Prepare tenancy agreements and all required legal documentation
            </li>
            <li>
              Collect the first month’s rent and security deposit on your behalf
            </li>
            <li>
              Inform utility providers and local authorities of the new tenancy
            </li>
            <li>
              Set up tenant standing orders to ensure rent is paid directly to
              you
            </li>
          </ul>
        </ServiceDetails>
        <ServiceDetails
          serviceName="Rent Collection"
          description="Perfect for busy landlords, we handle all rent collection to ensure steady income and peace of mind."
          charges="5% (inc. VAT)"
        >
          In addition to Tenant Introduction we;
          <ul className="list-disc list-inside mt-2">
            <li>
              Collect rent on your behalf and transfer it directly to your bank
              account.
            </li>
            <li>
              Provide detailed monthly statements showing income, expenses, and
              VAT breakdowns.
            </li>
            <li>
              Follow up on late payments promptly and guide you on legal
              recovery if required.
            </li>
            <li>
              Manage tenancy renewals and lease extensions with efficiency and
              care.
            </li>
          </ul>
        </ServiceDetails>
        <ServiceDetails
          serviceName="Fully Managed"
          description="For landlords seeking maximum peace of mind, our fully managed service provides end-to-end care and professional oversight of their property."
          charges="7% (inc. VAT)"
        >
          In addition to Tenant Introduction and Rent Collection we;
          <ul className="list-disc list-inside mt-2">
            <li>
              Act as the main point of contact for all tenant communication
            </li>
            <li>
              Oversee day-to-day repairs and maintenance within pre-agreed
              spending limits
            </li>
            <li>
              Arrange tenant check-in and check-out, ensuring full inventory
              compliance
            </li>
            <li>
              Carry out quarterly property inspections with detailed
              photographic reports
            </li>
            <li>
              Ensure all legal safety obligations are met, including annual gas
              certificates
            </li>
            <li>
              Coordinate prompt works to maintain tenant satisfaction and
              encourage renewals
            </li>
            <li>
              Manage the full end-of-tenancy process, including deposit handling
              with inventory specialist
            </li>
          </ul>
        </ServiceDetails>
        <ServiceDetails
          serviceName="Full Management + Guaranteed Rent"
          description="Designed for hands-off landlords, our fully managed and guaranteed rent option means we take care of everything while you enjoy a steady, reliable income."
          charges="Price is Subject to Each Property"
        >
          In addition to Fully Managed we;
          <ul className="list-disc list-inside mt-2">
            <li>
              Provide guaranteed rental income each month, even if tenants fail
              to pay.
            </li>
            <li>
              Arrange cover through our trusted insurance partner for complete
              peace of mind.
            </li>
            <li>
              Continue paying rent during void periods (subject to policy
              terms).
            </li>
            <li>
              Include full legal expenses cover in the event of tenant default.
            </li>
          </ul>
        </ServiceDetails>
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
