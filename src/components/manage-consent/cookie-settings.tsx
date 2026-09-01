"use client"

import {
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  Cookie,
  FileSearch
} from "lucide-react";
import { SettingsSectionItem } from "@/components/manage-consent/settings-section-item";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { getUserByToken, updateUserPrivacy } from "@/lib/auth-mock";
import { User } from "@/types/user";
import { useAuthStore } from "@/store/auth";
import { useEffect, useState } from "react";

export const CookieSettings = () => {
  const token = useAuthStore(state => state.token);

  const [user, setUser] = useState<User | null>(null);
  const [cookieConsent, setCookieConsent] = useState("");

  useEffect(() => {
    if (!token) return;

    const currentUser = getUserByToken(token);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(currentUser);
    setCookieConsent(
      localStorage.getItem("cookie_consent") ?? ""
    );
  }, [token]);

  const handleChange = (key: keyof User["privacy"], checked: boolean) => {
    if (!token) return;

    const updatedUser = updateUserPrivacy(token, {
      [key]: checked,
    });

    setUser(updatedUser);
  };

  const analyticsCookies =
    user?.privacy.analyticsCookies ?? false;

  const personalizedOffers =
    user?.privacy.personalizedOffers ?? false;


  return (
    <div className="divide-y">
      <SettingsSectionItem
        title="Cookies essenciais"
        icon={Cookie}
      >
        <Switch
          className="data-checked:bg-primary-main data-checked:border-primary-main"
          disabled
          checked={cookieConsent === "accepted"}
          aria-label="Cookies essenciais"
        />
      </SettingsSectionItem>

      <SettingsSectionItem
        title="Cookies de análise"
        icon={FileSearch}
      >
        <Switch
          className="data-checked:bg-primary-main data-checked:border-primary-main"
          checked={analyticsCookies}
          onCheckedChange={(checked) =>
            handleChange("analyticsCookies", checked)
          }
          aria-label="Cookies de análise"
        />
      </SettingsSectionItem>

      <SettingsSectionItem
        title="Personalização da experiência"
        icon={ChartNoAxesColumnIncreasing}
      >
        <Switch
          className="data-checked:bg-primary-main data-checked:border-primary-main"
          checked={personalizedOffers}
          onCheckedChange={(checked) =>
            handleChange("personalizedOffers", checked)
          }
          aria-label="Personalização da experiência"
        />
      </SettingsSectionItem>

      <Link
        href={'#'}
        className="flex items-center justify-between py-4"
      >
        <p className="font-semibold text-primary-main">Gerenciar cookies</p>
        <ChevronRight size={20} className="stroke-primary-main" />
      </Link>
    </div>
  );
}