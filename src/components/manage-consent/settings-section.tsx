import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}

export const SettingsSection = ({ title, icon: Icon, children }: Props) => {
  return (
    <section className="py-5 px-4 border-gray-200 rounded-xl text-sm shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
      <div className="flex gap-2 items-center">
        <Icon size={24} className="lg:size-7" />
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
        </div>
      </div>

      <hr className="mt-2" />

      <div>
        {children}
      </div>
    </section>
  );
}