import HeroImg from "@/assets/hero-img.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LocalExpertsImg from "@/assets/local-experts.png";
import MaxWidthWrapper from "@/components/max-width";

function Hero() {
  const actionButtons = [
    { label: "Buying", href: "#", className: "bg-[#2784CA] text-white" },
    {
      label: "Selling",
      href: "#",
      className: "bg-white text-black border border-black",
    },
    "hr",
    {
      label: "Landlords",
      href: "#",
      className: "bg-white text-black border border-black",
    },
    { label: "Tenants", href: "#", className: "bg-black text-white" },
  ] as const;
  return (
    <div className="relative pb-40">
      <Image
        src={HeroImg}
        alt="Property Nirvana"
        width={1000}
        className="absolute -z-20 w-full h-full object-cover object-center"
      />
      <div className="inset-0 absolute bg-black/40 -z-10" />
      <div className="pt-60 text-center">
        <h1 className="font-platypi text-white text-4xl font-bold">
          Sell or Let Your Property in West London
        </h1>
        <p className="text-white mt-3 text-lg">
          Trusted local estate agents helping homeowners and landlords achieve
          the best results.
        </p>
      </div>
      <div className="mt-40  bg-white max-w-5xl p-6 px-8 rounded-md mx-auto">
        <h3 className="font-medium text-xl">
          Find Your Perfect Property Match
        </h3>
        <div className="flex justify-between items-center gap-4 mt-4">
          {actionButtons.map((button) =>
            button === "hr" ? (
              <div
                key="hr"
                className="border-l border-black h-16 -mt-8 self-center"
              />
            ) : (
              <Link
                key={button.label}
                href={button.href}
                className={cn(
                  `p-4 px-8 font-semibold w-full text-center`,
                  button.className,
                )}
              >
                {button.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function LocalExperts() {
  return (
    <MaxWidthWrapper className="mt-20 mb-20 flex gap-20 relative h-fit overflow-hidden">
      <div className="py-10">
        <h2 className="font-platypi text-4xl font-semibold">
          Your Local Property Experts
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Whether you’re planning to sell your home or rent out your property,
          we make the process simple, stress-free, and rewarding. With local
          knowledge of Langley, Slough, Wexham, Burnham & Maidenhead, we deliver
          honest advice, clear communication, and results you can trust.
        </p>
        <div className="flex mt-4 gap-4">
          <Link href="#">Sell My Property</Link>
          <Link href="#">Let My Property</Link>
        </div>
      </div>
      <div className="relative min-w-[480px]">
        <Image
          src={LocalExpertsImg}
          alt="Local Experts"
          className="w-full h-full object-cover absolute object-center"
        />
      </div>
    </MaxWidthWrapper>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <LocalExperts />
    </div>
  );
}
