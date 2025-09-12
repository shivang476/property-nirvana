"use client";
import Image from "next/image";
import MaxWidthWrapper from "./max-width";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const links = [
    { href: "#", label: "Buying" },
    { href: "#", label: "Selling" },
    { href: "#", label: "Landlords" },
    { href: "#", label: "Tenants" },
    { href: "#", label: "Other Services" },
  ];
  const [hasScrolled, setHasScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        hasScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent",
      )}
    >
      <MaxWidthWrapper className="py-4 flex items-center justify-between px-4">
        <Image src={Logo} alt="Nirvana Logo" width={280} />
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-white font-semibold",
                hasScrolled && "text-black",
              )}
            >
              {link.label}
            </Link>
          ))}
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
