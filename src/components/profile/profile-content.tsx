"use client"

import { getUserByToken } from "@/lib/auth-mock";
import { MobileView } from "@/components/profile/mobile-view";
import { useAuthStore } from "@/store/auth";
import { ProfileSkeleton } from "@/components/profile/profile-skeleton";

export const ProfileContent = () => {
  // A busca é de uso exclusivo para dados mock
  const token = useAuthStore(state => state.token);
  const currentUser = getUserByToken(token);

  if (!currentUser) {
    return <ProfileSkeleton />;
  }

  return (
    <div>
      <MobileView user={currentUser} />
    </div>
  );
}