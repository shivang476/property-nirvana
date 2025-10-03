import HeroImg from "@/assets/hero-img.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LocalExpertsImg from "@/assets/local-experts.png";
import RightMoveImg from "@/assets/right-move.png";
import SellingImg from "@/assets/sell-home.png";
import RentingImg from "@/assets/rent-property.png";
import MaxWidthWrapper from "@/components/max-width";
import { buttonVariants } from "@/components/ui/button";
import { CtaCards } from "@/components/cta-cards";
import AreaMap from "@/components/area-map";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

function Hero() {
  return (
    <div className="relative pb-20 md:pb-40 -mt-[82px] p-2">
      <Image
        src={HeroImg}
        alt="Property Nirvana"
        width={1000}
        className="absolute -z-20 w-full h-full object-cover object-center -mt-2 -ml-2"
      />
      <div className="inset-0 absolute bg-black/40 -z-10" />
      <div className="pt-40 md:pt-60 text-center">
        <h1 className="font-platypi text-white text-2xl md:text-4xl font-bold">
          Your Trusted Estate Agents covering West London to Reading
        </h1>
        <p className="text-white mt-3 text-sm md:text-lg">
          Buy, sell, rent, or let with ease — backed by local expertise and
          proven results.
        </p>
      </div>
      <div className="mt-10 md:mt-20 lg:mt-40 bg-white max-w-5xl p-4 md:p-6 md:pt-4 md:px-8 rounded-md mx-auto">
        <h3 className="font-medium text-sm md:text-xl text-center">
          Find Your Perfect Property Match
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 mt-2">
          <div className="grid gap-4 grid-cols-2 w-full">
            <Link
              href="/buyers-guide"
              className={cn(
                buttonVariants({
                  size: "xl",
                  variant: "default",
                  className: "flex-grow",
                }),
              )}
            >
              Buying
            </Link>
            <Link
              href="/sellers-guide"
              className={cn(
                buttonVariants({
                  size: "xl",
                  variant: "outline",
                  className: "flex-grow",
                }),
              )}
            >
              Selling
            </Link>
          </div>
          <div className="border-t md:border-t-0 w-8/12 md:w-px md:border-l h-px md:h-16 self-center border-gray-400/40" />
          <div className="grid gap-4 grid-cols-2 w-full">
            <Link
              href="/landlord-services"
              className={cn(
                buttonVariants({
                  size: "xl",
                  variant: "outline",
                  className: "flex-grow",
                }),
              )}
            >
              Landlords
            </Link>
            <Link
              href="/tenants-guide"
              className={cn(
                buttonVariants({
                  size: "xl",
                  variant: "secondary",
                  className: "flex-grow",
                }),
              )}
            >
              Tenants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalExperts() {
  return (
    <MaxWidthWrapper className="mt-10 md:mt-20 mb-20 flex flex-col-reverse md:flex-row gap-4 md:gap-10 lg:gap-20 relative h-fit overflow-hidden">
      <div className="py-4 md:py-10 p-4">
        <h2 className="font-platypi text-2xl md:text-4xl font-semibold">
          Your Local Property Experts
        </h2>
        <p className="md:text-lg text-gray-700 mt-2 md:mt-4">
          Whether you’re planning to sell your home or rent out your property,
          we make the process simple, stress-free, and rewarding. With local
          knowledge of Langley, Slough, Wexham, Burnham & Maidenhead, we deliver
          honest advice, clear communication, and results you can trust.
        </p>
        <div className="flex mt-4 gap-4">
          <Link
            href="/sell-your-property"
            className={buttonVariants({
              size: "xl",
              variant: "default",
              className: "rounded-none font-semibold",
            })}
          >
            Sell My Property
          </Link>
          <Link
            href="/landlord-services"
            className={buttonVariants({
              size: "xl",
              variant: "secondary",
              className: "rounded-none font-semibold",
            })}
          >
            Let My Property
          </Link>
        </div>
      </div>
      <div className="relative w-full md:min-w-[480px]">
        <Image
          src={LocalExpertsImg}
          alt="Local Experts"
          className="w-full h-full object-cover md:absolute object-center"
        />
      </div>
    </MaxWidthWrapper>
  );
}

function TheRightMove() {
  return (
    <MaxWidthWrapper className="mt-10 md:mt-20 lg:mt-32 flex flex-col md:flex-row md:gap-10 lg:gap-20 items-center relative overflow-hidden">
      <Image
        src={RightMoveImg}
        width={800}
        alt="Right Move"
        className="w-full object-cover object-center h-[280px] sm:h-[400px] md:w-[320px] lg:w-[600px] lg:h-[500px]"
      />

      <div className="lg:py-20 p-4">
        <h2 className="font-platypi text-2xl md:text-4xl font-semibold">
          The Right Move for Your Property Journey
        </h2>
        <p className="md:text-lg text-gray-700 mt-2 md:mt-4">
          At Property Nirvana, we understand that selling or letting your
          property is a significant decision. That’s why we’re committed to
          providing a seamless experience from start to finish. Our team of
          dedicated professionals will guide you through every step of the
          process, ensuring you feel confident and informed along the way.
        </p>
        <div className="flex mt-8 gap-4">
          <Link
            className={buttonVariants({
              size: "xl",
              variant: "default",
              className: "rounded-none font-semibold",
            })}
            href="/sellers-guide"
          >
            Sell With Us
          </Link>
          <Link
            href="/landlord-services"
            className={buttonVariants({
              size: "xl",
              variant: "secondary",
              className: "rounded-none font-semibold",
            })}
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
    <MaxWidthWrapper className="flex mt-10 md:mt-32">
      <div className="md:basis-[40%] flex items-center">
        <div className="bg-[#FFF1E3] p-6 md:px-14 md:py-10 rounded-md absolute m-2">
          <h2 className="font-platypi text-2xl md:text-3xl font-semibold">
            Thinking of Selling Your Property?
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Get the best price for your property with expert guidance and a
            proven process.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:items-end gap-6 justify-between">
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
              href="/valuation"
              className={buttonVariants({
                size: "lg",
                className: "rounded-none",
              })}
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
        className="h-[600px] w-[800px] md:basis-[60%] object-cover object-center aspect-square"
      />
    </MaxWidthWrapper>
  );
}

function RentOutYourProperty() {
  return (
    <MaxWidthWrapper className="flex mt-10 md:mt-32 relative">
      <Image
        src={RentingImg}
        alt="Selling"
        width={1200}
        className="h-[600px] w-[800px] lg:basis-[60%] object-cover object-center aspect-square"
      />
      <div className="inset-0 basis-[40%] flex items-center absolute md:left-80 lg:left-0 lg:relative right-0 m-2">
        <div className="bg-[#FFF1E3] p-4 md:px-14 md:py-10 rounded-md absolute lg:-left-40">
          <h2 className="font-platypi text-2xl md:text-3xl font-semibold">
            Looking to Rent Out Your Property?
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Find reliable tenants quickly with our trusted letting service
            across your local area.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
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
              href="/tenants-guide"
              className={buttonVariants({
                size: "lg",
                className: "rounded-none",
              })}
            >
              Find the Right Tenants Today
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Great location - walking distance to the metro and grocery stores. Building is quite at night.",
      name: "Sophie Brown",
      role: "Teacher",
      starRating: 4,
    },
    {
      quote:
        "Helpful agent and smooth paperwork. Would’ve liked clearer move-in instructions.",
      name: "James Walker",
      role: "Founder",
      starRating: 5,
    },
    {
      quote:
        "Affordable rent but thin walls. Not ideal if you work from home and need silence.",
      name: "Emily Thompson",
      role: "Marketing Manager",
      starRating: 4,
    },
  ];
  return (
    <MaxWidthWrapper className="mt-10 md:mt-20 p-2">
      <h2 className="font-platypi text-2xl md:text-4xl font-semibold text-center">
        What Our Clients Say
      </h2>
      <p className="md:text-lg text-gray-700 mt-2 text-center">
        Hear from our satisfied clients who have experienced the Property
        Nirvana difference.
      </p>
      <div className="mt-10 grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-[#232323] text-white shadow-md p-0">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex text-yellow-500">
                {Array.from({ length: testimonial.starRating }).map((_, i) => (
                  <StarIcon key={i} className="size-5 fill-yellow-500" />
                ))}
              </div>
              <p className="italic md:text-lg font-medium mt-4 flex-grow">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <h4 className="font-semibold mt-4">{testimonial.name}</h4>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

function AreasWeCover() {
  return (
    <MaxWidthWrapper className="mt-10 md:mt-20 p-2">
      <div className="flex justify-between gap-4 items-center flex-col md:flex-row">
        <div>
          <h2 className="font-platypi text-2xl md:text-4xl font-semibold">
            Areas We Cover
          </h2>
          <p className="md:text-lg text-gray-700 mt-2">
            From city streets to suburban homes, Property Nirvana is here to
            help you buy, sell, or let across your local area.
          </p>
        </div>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({
              size: "2xl",
              variant: "default",
              className: "rounded-full font-semibold hidden md:inline-flex",
            }),
          )}
        >
          Get in Touch
        </Link>
      </div>
      <AreaMap />
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
      <Testimonials />
      <AreasWeCover />
      <CtaCards />
    </div>
  );
}
