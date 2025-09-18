import MaxWidthWrapper from "@/components/max-width";
import GetValuationForm from "./get-valuation";
import HeadingFrame from "@/components/heading-frame";

export default function GetValuation() {
  return (
    <div>
      <HeadingFrame heading="Value My Property" />
      <MaxWidthWrapper className="max-w-3xl p-4">
        <GetValuationForm />
      </MaxWidthWrapper>
    </div>
  );
}
