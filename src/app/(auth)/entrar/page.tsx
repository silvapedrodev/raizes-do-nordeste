import { getAuthState } from "@/actions/get-auth-state";
import { AuthContent } from "@/components/auth/auth-content";
import { redirect } from "next/navigation";

export default async function Page() {
  const { token } = await getAuthState();

  if (token) {
    redirect("/perfil");
  }

  return (
    <div>
      <AuthContent />
    </div>
  )
}