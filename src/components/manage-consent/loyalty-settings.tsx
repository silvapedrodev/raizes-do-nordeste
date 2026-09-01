"use client"

import { Switch } from "@/components/ui/switch";
import { SettingsSectionItem } from "@/components/manage-consent/settings-section-item";
import { Info, Star, Tag } from "lucide-react";
import { useAuthStore } from "@/store/auth";
import { useEffect, useState } from "react";
import { getUserLoyaltyConsent, updateUserLoyaltyConsent } from "@/lib/auth-mock";

type LoyaltyConsent = {
  participating: boolean;
  personalizedOffers: boolean;
};

export const LoyaltySettings = () => {
  const token = useAuthStore(state => state.token);

  const [consent, setConsent] = useState<LoyaltyConsent>({
    participating: false,
    personalizedOffers: false,
  });

  useEffect(() => {
    if (!token) return;

    const loyaltyConsent = getUserLoyaltyConsent(token);
    if (!loyaltyConsent) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(loyaltyConsent);
  }, [token]);

  const handleConsentChange = (field: keyof LoyaltyConsent, checked: boolean) => {
    if (!token) return;

    const updatedConsent =
      field === "participating" && !checked
        ? {
          participating: false,
          personalizedOffers: false,
        }
        : {
          ...consent,
          [field]: checked,
        };

    const updatedUser = updateUserLoyaltyConsent(
      token,
      updatedConsent
    );

    if (!updatedUser) return;

    setConsent(updatedConsent);
  };

  return (
    <div className="divide-y">
      <SettingsSectionItem
        title="Participação no Programa "
        icon={Star}
      >
        <Switch
          checked={consent.participating}
          onCheckedChange={checked =>
            handleConsentChange("participating", checked)
          }
          className="data-checked:bg-primary-main data-checked:border-primary-main"
          aria-label="Participação no Programa"
        />
      </SettingsSectionItem>
      <SettingsSectionItem
        title="Ofertas e campanhas personalizadas"
        icon={Tag}
      >
        <Switch
          checked={consent.personalizedOffers}
          disabled={!consent.participating}
          onCheckedChange={checked =>
            handleConsentChange("personalizedOffers", checked)
          }
          className="data-checked:bg-primary-main data-checked:border-primary-main"
          aria-label="Ofertas e campanhas personalizadas"
        />
      </SettingsSectionItem>

      <div className="flex items-start gap-3 mt-5 rounded-lg bg-primary-main/10 p-4">
        <Info size={20} className="mt-0.5 shrink-0 text-primary-main" />

        <p className="text-sm leading-relaxed text-gray-700">
          Você pode a qualquer momento alterar suas preferências. A revogação do
          consentimento não afeta tratamentos realizados com outras bases legais.
        </p>
      </div>
    </div>
  );
}