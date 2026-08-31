import { User } from "@/types/user";
import { phoneMask } from "@/utils/format-phone";
import { Pencil, UserRound } from "lucide-react";
import { AppButton } from "@/components/app-button";
import { AppInput } from "@/components/app-input";
import { Field, FieldLabel } from "@/components/ui/field";
import { formatCPF } from "@/utils/format-CPF";

type Props = {
  user: User;
}

export const DesktopProfileView = ({ user }: Props) => {
  return (
    <div className="hidden lg:block">
      <div>
        <h1 className="text-3xl font-semibold">Meu Perfil</h1>
        <p className="text-sm text-gray-500 mt-1">Gerencie suas informações pessoais e prefêrencias.</p>
      </div>

      <div className="border border-gray-200 p-7 rounded-xl mt-9 shadow-[1px_1px_8px_rgba(0,0,0,0.10)]">
        <div className=" flex items-center gap-4">
          <div className="relative size-24 shrink-0">
            <div className="bg-gray-200 size-24 flex items-center justify-center rounded-full">
              <UserRound size={48} className="stroke-primary-main" />
            </div>

            <button
              type="button"
              className="absolute bottom-0 right-0 size-7 flex items-center justify-center rounded-full bg-primary-main"
            >
              <Pencil size={14} className="stroke-white" />
            </button>
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            <h3 className="font-semibold text-lg truncate">{user.name}</h3>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            <p className="text-sm text-gray-500">{phoneMask(user.phone)}</p>
          </div>

          <AppButton variant="outline" className="shrink-0 max-w-28">
            Editar perfil
          </AppButton>
        </div>

        <div className="mt-4 border-t border-gray-200 py-4">
          <h2 className="font-medium text-lg">Informações pessoais</h2>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <Field>
              <FieldLabel htmlFor="profile-name">
                Nome completo
              </FieldLabel>

              <AppInput
                id="profile-name"
                name="name"
                type="text"
                value={user.name}
                readOnly
                disabled
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="profile-cpf">
                CPF
              </FieldLabel>

              <AppInput
                id="profile-cpf"
                name="cpf"
                type="text"
                value={formatCPF(user.cpf)}
                readOnly
                disabled
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="profile-email">
                E-mail
              </FieldLabel>

              <AppInput
                id="profile-email"
                name="email"
                type="email"
                value={user.email}
                readOnly
                disabled
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="profile-phone">
                Celular
              </FieldLabel>

              <AppInput
                id="profile-phone"
                name="phone"
                type="text"
                value={phoneMask(user.phone)}
                readOnly
                disabled
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="profile-birthDate">
                Data de nascimento
              </FieldLabel>

              <AppInput
                id="profile-birthDate"
                name="birthDate"
                type="date"
                value={user.birthDate}
                readOnly
                disabled
              />
            </Field>
          </div>
        </div>
      </div>
    </div >
  );
}
