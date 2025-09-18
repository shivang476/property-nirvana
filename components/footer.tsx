import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./max-width";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ClientMoneyLogo from "@/assets/icons/client-money-protect.png";
import RightMoveLogo from "@/assets/icons/right-move.png";
import ThePropertyOmbudsmanLogo from "@/assets/icons/the-property-ombusdsman.png";
import ZooplaLogo from "@/assets/icons/zoopla.png";
import { cn } from "@/lib/utils";
export default function Footer() {
  const socials = [
    { icon: FaInstagram, href: "https://www.instagram.com" },
    { icon: FaFacebook, href: "https://www.facebook.com" },
    { icon: FaLinkedin, href: "https://www.linkedin.com" },
    { icon: FaXTwitter, href: "https://www.twitter.com" },
  ];
  const linkCols = [
    [
      { label: "About us", href: "#" },
      { label: "Contact us", href: "#" },
      {
        label: "Cookie Policy",
        href: "#",
      },
    ],
    [
      {
        label: "Follow us",
        href: "#",
      },
      {
        label: "Our Services",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
    ],
  ];
  const partnerLogos = [
    {
      src: ClientMoneyLogo,
      alt: "Client Money Protection",
    },
    {
      src: RightMoveLogo,
      alt: "Rightmove",
    },
    {
      src: ThePropertyOmbudsmanLogo,
      alt: "The Property Ombudsman",
    },
    { src: ZooplaLogo, alt: "Zoopla" },
  ];
  return (
    <footer className="bg-[#232323] mt-20">
      <MaxWidthWrapper className="flex justify-between flex-col md:flex-row md:items-center p-4 py-20 md:gap-20">
        <div className="flex flex-col">
          <Image src={Logo} width={200} alt="Property Nirvana" />
          <div className="grid grid-cols-2 gap-14 mt-8">
            {linkCols.map((col, idx) => (
              <ul key={idx} className="flex flex-col gap-1 md:gap-4">
                {col.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-white text-sm md:text-base hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-6 md:items-end">
          <div className="flex flex-col md:flex-row md:gap-4 gap-2">
            <span className="text-white font-semibold md:font-normal">
              Follow us on
            </span>
            <div className="flex flex-row gap-4">
              {socials.map((social, idx) => (
                <Link href={social.href} key={idx} target="_blank">
                  <social.icon className="text-gray-300 w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-6 mt-6 flex-wrap md:max-w-xs lg:max-w-full">
            {partnerLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className={cn("object-contain w-24 md:w-28 md:ml-auto")}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-[#FFF1E3] flex items-center justify-center p-4 text-sm md:text-base">
        © 2025 Property Nirvana. All rights reserved.
      </div>
    </footer>
  );
}
