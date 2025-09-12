"use client";
import Image from "next/image";
import MaxWidthWrapper from "./max-width";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { usePathname } from "next/navigation";

type LinkType = {
  href: string;
  label: string;
  innerLinks?: LinkType[];
};

export default function Navbar() {
  const pathname = usePathname();
  const links: LinkType[] = [
    {
      href: "#",
      label: "Buying",
      innerLinks: [{ href: "#", label: "Buyers Guide" }],
    },
    {
      href: "#",
      label: "Selling",
      innerLinks: [
        { href: "#", label: "Sell your property" },
        { href: "#", label: "Sellers Guide" },
        { href: "#", label: "Get valuation" },
      ],
    },
    {
      href: "#",
      label: "Landlords",
      innerLinks: [
        {
          href: "/landlord-services",
          label: "Landlord Services",
        },
        {
          href: "#",
          label: "Get Valuation",
        },
      ],
    },
    {
      href: "#",
      label: "Tenants",
      innerLinks: [
        {
          href: "#",
          label: "Tenants Guide",
        },
        {
          href: "#",
          label: "Tenants Free",
        },
      ],
    },
    { href: "#", label: "Other Services" },
  ];

  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [openCard, setOpenCard] = React.useState<string | null>(null);
  const needInvert = ["/landlord-services"].includes(pathname);

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const anyCardOpen = !!openCard;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 group",
        hasScrolled || anyCardOpen
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent hover:bg-white/90 hover:backdrop-blur-md hover:shadow-md",
      )}
    >
      <MaxWidthWrapper className="py-4 flex items-center justify-between px-4">
        <Link href="/">
          <Image src={Logo} alt="Nirvana Logo" width={280} />
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link, idx) =>
            link.innerLinks ? (
              <HoverCard
                key={idx}
                open={openCard === link.label}
                onOpenChange={(open) => setOpenCard(open ? link.label : null)}
                openDelay={50}
                closeDelay={50}
              >
                <HoverCardTrigger asChild>
                  <div
                    className={cn(
                      "font-semibold transition-colors duration-300 text-white group-hover:text-black cursor-pointer",
                      needInvert && "text-black",
                      (hasScrolled || anyCardOpen) && "text-black",
                    )}
                  >
                    {link.label}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="mt-4">
                  <div className="grid gap-2">
                    {link.innerLinks.map((innerLink) => (
                      <Link
                        key={innerLink.href}
                        href={innerLink.href}
                        className="text-black hover:text-gray-700 transition-colors duration-300"
                      >
                        {innerLink.label}
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className={cn(
                  "font-semibold transition-colors duration-300 text-white group-hover:text-black",
                  needInvert && "text-black",
                  (hasScrolled || anyCardOpen) && "text-black",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <Link
          href="/contact"
          className="bg-[#2784CA] text-white p-4 px-8 h-[50px] rounded-full flex items-center justify-center"
        >
          Contact Us
        </Link>
      </MaxWidthWrapper>
    </header>
  );
}
