"use client"

import { InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Raízes do Nordeste",
    links: [
      { label: "Contato", href: "#" },
      { label: "Fale conosco", href: "#" },
      { label: "Trabalhe conosco", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Privacidade e Segurança",
    links: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos e condições de uso", href: "/termos-de-uso" },
      { label: "Segurança de Dados & LGPD", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: InstagramLogoIcon,
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: LinkedinLogoIcon,
  },
  {
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: YoutubeLogoIcon,
  },
  {
    href: "https://x.com/",
    label: "X",
    icon: XLogoIcon,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 md:mt-28 px-6 md:pl-20 pt-7 md:pt-8 pb-8 bg-primary-main text-white">
      <div className="max-w-2xl md:grid md:grid-cols-3 md:gap-8 md:items-baseline">
        {footerLinks.map((section) => (
          <div
            key={section.title}
            className="mt-3 md:mt-0 flex flex-col gap-2 md:gap-3"
          >
            <h3 className="font-bold text-[16px]">
              {section.title}
            </h3>

            {section.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-normal text-sm hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="mt-3 md:mt-0 flex flex-col gap-2 md:gap-3">
          <h3 className="font-bold text-[16px]">Social</h3>
          <div className="flex gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon
                  size={28}
                  weight="fill"
                  className="hover:fill-secondary-main"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-10 md:pb-0 md:mb-0 mt-6 flex gap-2 items-center">
        <Image
          src={"/assets/ui/logo-2.svg"}
          alt="Raízes do Nordeste"
          width={32}
          height={32}
        />
        <p className="text-[12px] tracking-tight">© {currentYear} Raízes do Nordeste. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}