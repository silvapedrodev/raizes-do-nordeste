import Link from "next/link";
import { profileNavigation } from "@/components/layout/protected/sidebar-navigation";
import { ChevronRight } from "lucide-react";

export const NavigationList = () => {
  return (
    <nav className="grid grid-cols-1 mt-5 gap-5">
      {profileNavigation.map((section) => (
        <div
          key={section.title}
          className="bg-gray-100 border border-gray-200 px-2 pb-2 rounded-xl shadow-[1px_1px_8px_rgba(0,0,0,0.10)] "
        >
          <h2 className="px-3 py-3.5 font-semibold">{section.title}</h2>

          <div className="px-3 py-1 bg-white rounded-md">
            {section.items.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href ?? "#"}
                  className="border-b border-gray-200 flex justify-between gap-2 py-4 last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <Icon size={24} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={24} />
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}