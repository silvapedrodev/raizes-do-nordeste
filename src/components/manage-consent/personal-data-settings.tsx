import { Download, FileSearch, Pencil } from "lucide-react";
import { SettingsSectionItem } from "@/components/manage-consent/settings-section-item";

export const PersonalDataSettings = () => {
  return (
    <div className="divide-y divide-gray-200">
      <SettingsSectionItem
        href="#"
        title="Consultar meus dados"
        icon={FileSearch}
      />
      <SettingsSectionItem
        href="#"
        title="Baixar meus dados"
        icon={Download}
      />
      <SettingsSectionItem
        href="#"
        title="Corrigir meus dados"
        icon={Pencil}
      />
    </div>
  );
}