import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./max-width";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ClientMoneyLogo from "@/assets/icons/client-money.png";
import RightMoveLogo from "@/assets/icons/right-move-logo.png";
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
      width: 150,
      className: "grayscale-50",
    },
    {
      src: RightMoveLogo,
      alt: "Rightmove",
      width: 150,
      className: "grayscale brightness-125",
    },
    {
      src: ThePropertyOmbudsmanLogo,
      alt: "The Property Ombudsman",
      width: 150,
      className: "grayscale-50",
    },
    { src: ZooplaLogo, alt: "Zoopla", width: 100, className: "grayscale-50" },
  ];
  return (
    <footer className="bg-[#232323] mt-20">
      <MaxWidthWrapper className="flex justify-between items-center py-20">
        <div className="flex flex-col">
          <Image src={Logo} width={200} alt="Property Nirvana" />
          <div className="grid grid-cols-2 gap-14 mt-8">
            {linkCols.map((col) => (
              <ul>
                {col.map((item) => (
                  <li>
                    <Link href={item.href} className="text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <span className="text-white">Follow us on</span>
            <div className="flex flex-row ml-6 gap-4">
              {socials.map((social) => (
                <Link href={social.href} target="_blank">
                  <social.icon className="text-gray-300 w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-6 mt-6">
            {partnerLogos.map((logo) => (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                className={cn("object-contain", logo.className)}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-[#FFF1E3] flex items-center justify-center p-4">
        © 2025 Property Nirvana. All rights reserved.
      </div>
    </footer>
  );
}
