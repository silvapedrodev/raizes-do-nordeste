"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CookieConsentStatus = "accepted" | "rejected"

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (choice: CookieConsentStatus) => {
    localStorage.setItem('cookie_consent', choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="mx-2 md:mx-auto px-3 py-5 max-w-4xl fixed top-20 left-0 right-0 bg-white z-20 md:bottom-5 md:top-auto text-sm rounded-xl border border-gray-200 flex gap-4 shadow-[1px_1px_8px_rgba(0,0,0,0.20)]">
      <Image
        src="/assets/ui/cookies-logo.svg"
        alt="cookies"
        width={45}
        height={45}
      />

      <div className="flex-1 md:flex md:items-center md:justify-between md:gap-6">
        <div className="flex-1 space-y-2">
          <p className="font-normal">
            <strong>Utilizamos cookies para melhorar sua experiência</strong>,
            analisar o tráfego e personalizar conteúdos durante sua navegação.
            Você pode aceitar ou recusar.
          </p>

          <Link
            href="/politica-de-privacidade"
            className="text-primary-main underline font-bold"
          >
            Política de Privacidade
          </Link>
        </div>

        <div className="flex items-center gap-2.5 font-semibold mt-3 md:mt-0">
          <button
            className="px-3 py-2 border border-primary-main rounded-lg text-primary-main hover:bg-gray-100"
            onClick={() => handleConsent("rejected")}
          >
            Recusar
          </button>

          <button
            className="px-3 py-2 bg-primary-main rounded-lg text-white hover:bg-primary-main/80"
            onClick={() => handleConsent("accepted")}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}