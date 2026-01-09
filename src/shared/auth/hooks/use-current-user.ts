"use client";
import { AuthServices } from "@/services/auth/auth.services";
import { authKeys } from "@/shared/query/query-keys";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: async () => {
      const { data } = await AuthServices.profile();
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}
