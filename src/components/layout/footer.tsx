"use client"

import { InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 md:mt-28 px-6 md:pl-20 pt-7 md:pt-8 pb-8 bg-primary-main text-white">
      <div className="max-w-2xl md:grid md:grid-cols-3 md:gap-8 md:items-baseline">
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="font-bold text-[16px]">Raízes do Nordeste</h3>
          <Link href="#" className="font-normal text-sm hover:underline">
            Contato
          </Link>
          <Link href="#" className="font-normal text-sm hover:underline">
            Fale conosco
          </Link>
          <Link href="#" className="font-normal text-sm hover:underline">
            Trabalhe conosco
          </Link>
          <Link href="#" className="font-normal text-sm hover:underline">
            Blog
          </Link>
        </div>
        <div className="mt-3 md:mt-0 flex flex-col gap-2 md:gap-3">
          <h3 className="font-bold text-[16px]">Privacidade e Segurança</h3>
          <Link href="/termos-de-uso" className="font-normal text-sm hover:underline">
            Política de Privacidade
          </Link>
          <Link href="/politica-de-privacidade" className="font-normal text-sm hover:underline">
            Termos e condições de uso
          </Link>
          <Link href="#" className="font-normal text-sm hover:underline">
            Segurança de Dados & LGPD
          </Link>
        </div>
        <div className="mt-3 md:mt-0 flex flex-col gap-2 md:gap-3">
          <h3 className="font-bold text-[16px]">Social</h3>
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/" target="_blank">
              <InstagramLogoIcon size={24} weight="fill" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <LinkedinLogoIcon size={24} weight="fill" />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <YoutubeLogoIcon size={24} weight="fill" />
            </Link>
            <Link href="https://x.com/" target="_blank">
              <XLogoIcon size={24} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-14 md:mb-0 mt-6 flex gap-2 items-center">
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