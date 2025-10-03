import Cta1Img from "@/assets/cta1.png";
import Cta2Img from "@/assets/cta2.png";
import Cta3Img from "@/assets/cta3.png";
import { Card, CardContent } from "@/components/ui/card";
import MaxWidthWrapper from "./max-width";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
export function CtaCards({ className }: { className?: string }) {
  const cards = [
    {
      title: "Get a Free Valuation",
      description:
        "If you're contemplating a move, arrange a free, no obligation valuation of your property at a time to suit you.",
      buttonText: "Book Valuation",
      image: Cta1Img,
      href: "/valuation",
    },
    {
      title: "Our Extended Services",
      description:
        "Explore our services, including mortgages, professional photography, floor plans and support with compliance with the legal certifications.",
      buttonText: "Book Other Services",
      image: Cta2Img,
      href: "/other-services",
    },
    {
      title: "Get in Touch",
      description:
        "If you would like to discuss your property-related enquiries, or have any questions, get in touch with our friendly team.",
      buttonText: "Get in Touch",
      image: Cta3Img,
      href: "/contact",
    },
  ];
  return (
    <MaxWidthWrapper
      className={cn(
        "grid place-items-center md:grid-cols-2 p-4 lg:grid-cols-3 gap-10 mt-20",
        className,
      )}
    >
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
            <div className="p-4 md:p-8 flex flex-col gap-4">
              <div className="p-4 border-2 border-white rounded-lg bg-white/10 backdrop-blur-xl text-white -mt-20">
                <h4 className="font-semibold text-lg md:text-xl">
                  {card.title}
                </h4>
                <p className="text-sm line-clamp-3">{card.description}</p>
              </div>
              <Link
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "default",
                    className: "rounded-none mt-auto py-6",
                  }),
                )}
                href={card.href}
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
