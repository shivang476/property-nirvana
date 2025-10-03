"use client";
import Image from "next/image";
import MaxWidthWrapper from "./max-width";
import Logo from "@/assets/logo.png";
import LogoWhite from "@/assets/logo-white.png";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

type LinkType = {
  href: string;
  label: string;
  innerLinks?: LinkType[];
};

export default function Navbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [openCard, setOpenCard] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const needInvert = !["/"].includes(pathname);

  const links: LinkType[] = [
    {
      href: "#",
      label: "Buying",
      innerLinks: [{ href: "/buyers-guide", label: "Buyers Guide" }],
    },
    {
      href: "#",
      label: "Selling",
      innerLinks: [
        { href: "/sell-your-property", label: "Sell your property" },
        { href: "/sellers-guide", label: "Sellers Guide" },
        { href: "/valuation", label: "Get valuation" },
      ],
    },
    {
      href: "#",
      label: "Landlords",
      innerLinks: [
        { href: "/landlord-services", label: "Landlord Services" },
        { href: "/valuation", label: "Get Valuation" },
      ],
    },
    {
      href: "#",
      label: "Tenants",
      innerLinks: [
        { href: "/tenants-guide", label: "Tenants Guide" },
        { href: "/tenant-fees", label: "Tenants Fees" },
      ],
    },
    {
      href: "/other-services",
      label: "Other Services",
      innerLinks: [
        { href: "/other-services", label: "Mortgages" },
        { href: "/other-services", label: "Gas Safety Checks" },
        { href: "/other-services", label: "Electrical Checks" },
        { href: "/other-services", label: "EPC" },
        { href: "/other-services", label: "Professional Photography" },
        { href: "/other-services", label: "Floorplan Drawing" },
      ],
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const anyCardOpen = !!openCard;

  const toggleExpand = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-colors duration-300 group",
          hasScrolled || anyCardOpen
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent hover:bg-white/90 hover:backdrop-blur-md hover:shadow-md",
        )}
      >
        <MaxWidthWrapper className="py-4 flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className={cn("md:p-2")}>
            <Image
              src={Logo}
              alt="Nirvana Logo"
              width={200}
              className={cn(
                "hidden group-hover:block",
                (hasScrolled || mobileOpen || needInvert || anyCardOpen) &&
                  "block",
              )}
            />
            <Image
              src={LogoWhite}
              alt="Nirvana Logo"
              width={200}
              className={cn(
                "block group-hover:hidden",
                (hasScrolled || mobileOpen || needInvert || anyCardOpen) &&
                  "hidden",
              )}
            />
          </Link>

          {/* Desktop Nav - Changed from md to xl breakpoint */}
          <div className="hidden xl:flex items-center gap-8">
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
                  <HoverCardContent className="mt-4 rounded-none p-0">
                    <div className="grid">
                      {link.innerLinks.map((innerLink) => (
                        <Link
                          key={innerLink.href}
                          href={innerLink.href}
                          className="text-black hover:text-gray-700 transition-colors duration-300 hover:bg-gray-100 px-4 py-3 rounded"
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

          {/* Desktop CTA - Changed from md to xl breakpoint */}
          <div className="hidden xl:block">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "xl" }), "rounded-full")}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger - Changed from md to xl breakpoint */}
          <button
            className={cn(
              "xl:hidden text-white group-hover:text-black",
              (needInvert || mobileOpen || hasScrolled) && "text-black",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </MaxWidthWrapper>
      </header>

      {/* Mobile Menu Overlay - Animated */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-white shadow-lg px-6 pt-20 pb-10 space-y-4",
            "transform transition-all duration-300 ease-in-out",
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0",
          )}
        >
          {links.map((link, idx) => (
            <div
              key={idx}
              className={cn(
                "transform transition-all duration-300 ease-in-out",
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                transitionDelay: mobileOpen ? `${(idx + 1) * 50}ms` : "0ms",
              }}
            >
              {link.innerLinks ? (
                <>
                  <button
                    className="w-full flex justify-between items-center font-semibold text-black py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200"
                    onClick={() => toggleExpand(link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={cn(
                        "transition-transform duration-200",
                        expanded === link.label ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      expanded === link.label
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0 mt-0",
                    )}
                  >
                    <div className="space-y-2 pl-4">
                      {link.innerLinks.map((innerLink, innerIdx) => (
                        <Link
                          key={`${innerLink.href}__${innerIdx}`}
                          href={innerLink.href}
                          className={cn(
                            "text-sm block text-gray-600 hover:text-black py-1 px-2 rounded hover:bg-gray-50 transition-all duration-200",
                            "transform",
                            expanded === link.label
                              ? "translate-x-0 opacity-100"
                              : "translate-x-2 opacity-0",
                          )}
                          style={{
                            transitionDelay:
                              expanded === link.label
                                ? `${innerIdx * 30}ms`
                                : "0ms",
                          }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {innerLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block font-semibold text-black py-2 px-2 rounded hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div
            className={cn(
              "pt-4 transform transition-all duration-300 ease-in-out",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
            style={{
              transitionDelay: mobileOpen
                ? `${(links.length + 1) * 50}ms`
                : "0ms",
            }}
          >
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full text-center w-full transition-transform duration-200 hover:scale-105",
              )}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
