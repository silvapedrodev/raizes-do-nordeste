import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const UseQuerystring = () => {
  const router = useRouter();
  const pathName = usePathname()
  const searchParams = useSearchParams();

  return {
    get: (att: string) => {
      return searchParams.get(att)
    },

    set: (att: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())

      if (value) {
        params.set(att, value);
      } else {
        params.delete(att);
      }

      router.push(`${pathName}?${params.toString()}`);
    }
  }
}