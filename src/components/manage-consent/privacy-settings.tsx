import { FileText, ShieldCheck } from "lucide-react"
import { SettingsSectionItem } from "@/components/manage-consent/settings-section-item"

export const PrivacySettings = () => {
  return (
    <div className="divide-y divide-gray-200">
      <SettingsSectionItem
        href="/politica-de-privacidade"
        title="Política de privacidade"
        icon={ShieldCheck}
      />
      <SettingsSectionItem
        href="/termos-de-uso"
        title="Termos de uso"
        icon={FileText}
      />
    </div>
  )
}