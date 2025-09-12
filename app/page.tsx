import HeroImg from "@/assets/hero-img.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LocalExpertsImg from "@/assets/local-experts.png";
import RightMoveImg from "@/assets/right-move.png";
import SellingImg from "@/assets/sell-home.png";
import RentingImg from "@/assets/rent-property.png";
import MaxWidthWrapper from "@/components/max-width";
import Cta1Img from "@/assets/cta1.jpg";
import Cta2Img from "@/assets/cta2.jpg";
import Cta3Img from "@/assets/cta3.jpg";
import { Card, CardContent } from "@/components/ui/card";

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
          <Link
            href="#"
            className={"bg-[#2784CA] text-white p-4 px-8 font-semibold"}
          >
            Sell My Property
          </Link>
          <Link
            href="#"
            className={"bg-black text-white p-4 px-8 font-semibold"}
          >
            Let My Property
          </Link>
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

function TheRightMove() {
  return (
    <MaxWidthWrapper className="mt-32 flex gap-20 items-center relative">
      <div className="relative min-w-[640px] self-stretch">
        <Image
          src={RightMoveImg}
          width={800}
          alt="Right Move"
          className="w-full h-full object-cover absolute object-center"
        />
      </div>

      <div className="py-20">
        <h2 className="font-platypi text-4xl font-semibold">
          The Right Move for Your Property Journey
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          At Property Nirvana, we understand that selling or letting your
          property is a significant decision. That’s why we’re committed to
          providing a seamless experience from start to finish. Our team of
          dedicated professionals will guide you through every step of the
          process, ensuring you feel confident and informed along the way.
        </p>
        <div className="flex mt-8 gap-4">
          <Link
            href="#"
            className={"bg-[#2784CA] text-white p-4 px-8 font-semibold"}
          >
            Sell With Us
          </Link>
          <Link
            href="#"
            className={"bg-black text-white p-4 px-8 font-semibold"}
          >
            Let With Us
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function ThinkingOfSelling() {
  return (
    <MaxWidthWrapper className="flex mt-32">
      <div className="basis-[40%] flex items-center">
        <div className="bg-[#FFF1E3] px-14 py-10 rounded-md absolute">
          <h2 className="font-platypi text-3xl font-semibold">
            Thinking of Selling Your Property?
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Get the best price for your property with expert guidance and a
            proven process.
          </p>
          <div className="mt-8 flex items-end gap-6 justify-between">
            <div>
              <h4 className="text-xl font-semibold ">Why sell with us?</h4>
              <ul>
                {[
                  "Accurate, free property valuations",
                  "Professional marketing & photography",
                  "Strong buyer database ready to move",
                  "No hidden fees, transparent process",
                ].map((item) => (
                  <li key={item} className="mt-2 list-disc list-inside text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#"
              className="mt-6 inline-block bg-[#2784CA] text-white p-3 px-6 font-semibold text-sm"
            >
              Get Your Free Valuation Today
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={SellingImg}
        alt="Selling"
        width={1200}
        className="h-[600px] w-[800px] basis-[60%] object-cover object-center aspect-square"
      />
    </MaxWidthWrapper>
  );
}

function RentOutYourProperty() {
  return (
    <MaxWidthWrapper className="flex mt-32">
      <Image
        src={RentingImg}
        alt="Selling"
        width={1200}
        className="h-[600px] w-[800px] basis-[60%] object-cover object-center aspect-square"
      />
      <div className="basis-[40%] flex items-center relative">
        <div className="bg-[#FFF1E3] px-14 py-10 rounded-md absolute -left-40">
          <h2 className="font-platypi text-3xl font-semibold">
            Looking to Rent Out Your Property?
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Find reliable tenants quickly with our trusted letting service
            across your local area.
          </p>
          <div className="mt-8 flex items-end gap-6 justify-between">
            <div>
              <h4 className="text-xl font-semibold ">Why let with us?</h4>
              <ul>
                {[
                  "Vetted tenants for peace of mind",
                  "Competitive rental valuations",
                  "Full property management options",
                  "No hidden fees or admin charges",
                ].map((item) => (
                  <li key={item} className="mt-2 list-disc list-inside text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#"
              className="mt-6 inline-block bg-[#2784CA] text-white p-3 px-6 font-semibold text-sm"
            >
              Find the Right Tenants Today
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function AreasWeCover() {
  return (
    <MaxWidthWrapper className="mt-20">
      <div className="flex justify-between gap-4 items-center">
        <div>
          <h2 className="font-platypi text-4xl font-semibold">
            Areas We Cover
          </h2>
          <p>
            From city streets to suburban homes, Property Nirvana is here to
            help you buy, sell, or let across your local area.
          </p>
        </div>
        <Link
          href="#"
          className="mt-6 inline-block bg-[#2784CA] text-white p-4 px-8 font-semibold rounded-full"
        >
          Get in Touch
        </Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.298516089851!2d144.9630579153182!3d-37.81410797975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642f0f1c97f01%3A0xe1b0d2d3c9f2b1d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678901234567!5m2!1sen!2sau"
        className="w-full h-[400px] mt-10 border-0"
        loading="lazy"
      />
    </MaxWidthWrapper>
  );
}

function Ctc() {
  const cards = [
    {
      title: "Get a Free Valuation",
      description:
        "If you're contemplating a move, arrange a free, no obligation valuation of your property at a time to suit you.",
      buttonText: "Book Valuation",
      image: Cta1Img,
    },
    {
      title: "Sell With Property Nirvana",
      description:
        "Book your appointment with us today and let us help you keep moving. We’ll be offering virtual valuations in the first...",
      buttonText: "Book Other Services",
      image: Cta2Img,
    },
    {
      title: "Get in Touch",
      description:
        "If you would like to discuss your property-related enquiries, or have any questions, get in touch with our friendly team.",
      buttonText: "Get in Touch",
      image: Cta3Img,
    },
  ];
  return (
    <MaxWidthWrapper className="grid grid-cols-3 gap-10 mt-20">
      {cards.map((card) => (
        <Card
          key={card.title}
          className="p-0 rounded-lg overflow-hidden bg-[#5C5C5C]"
        >
          <CardContent className="p-0">
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-8 flex flex-col gap-4">
              <div className="p-4 border-2 border-white rounded-lg bg-white/20 backdrop-blur-2xl text-white -mt-20">
                <h4 className="font-semibold text-xl">{card.title}</h4>
                <p className="text-sm line-clamp-3">{card.description}</p>
              </div>
              <Link
                className="py-4 px-4 text-white flex items-center justify-center font-semibold text-lg rounded-md bg-[#2784CA]"
                href="#"
              >
                {card.buttonText}
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </MaxWidthWrapper>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <LocalExperts />
      <TheRightMove />
      <ThinkingOfSelling />
      <RentOutYourProperty />
      <AreasWeCover />
      <Ctc />
    </div>
  );
}
