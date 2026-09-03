import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  label: string
}

export const StatusCard = ({icon: Icon, title, label}: Props) => {
  return (
    <div className="flex items-center gap-2 py-4 md:py-0 md:px-4">
      <div className="p-2.5 border border-gray-200 rounded-xl">
        <Icon size={28} className="stroke-primary-main" />
      </div>
      <div className="text-sm">
        <p className="text-gray-500">{title}</p>
        <p className="font-semibold truncate">{label}</p>
      </div>
    </div>
  );
}