import { create } from "zustand";
import { UserRes } from "../types/user";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  user: UserRes | null;
  setUser: (user: UserRes) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: UserRes) => set({ user }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
