import { SettingsSection } from "@/components/manage-consent/settings-section";
import { Cookie, Gift, UserRound, UserShield } from "lucide-react";
import { CookieSettings } from "@/components/manage-consent/cookie-settings";
import { PersonalDataSettings } from "./personal-data-settings";
import { PrivacySettings } from "@/components/manage-consent/privacy-settings";
import { LoyaltySettings } from "@/components/manage-consent/loyalty-settings";

const settingsSections = [
  {
    icon: Cookie,
    title: "Cookies e navegação",
    children: <CookieSettings />
  },
  {
    icon: Gift,
    title: "Programa de Fidelidade",
    children: <LoyaltySettings />,
  },
  {
    icon: UserRound,
    title: "Seus dados",
    children: <PersonalDataSettings />
  },
  {
    icon: UserShield,
    title: "Privacidade",
    children: <PrivacySettings />
  },
]

export const ManageConsentContent = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-semibold text-2xl lg:text-3xl">Gerenciar consentimentos</h1>
        <p className="max-w-xl text-gray-500 mt-1">
          Controle como seus dados são utilizados. Aqui você pode consultar e gerenciar suas preferências de privacidade, cookies e consentimentos.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 items-start lg:grid-cols-2">
        {settingsSections.map(section => (
          <SettingsSection
            key={section.title}
            icon={section.icon}
            title={section.title}
          >
            {section.children}
          </SettingsSection>
        ))}
      </div>
    </div>
  );
}