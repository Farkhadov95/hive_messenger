import { create } from "zustand";
import { UserRes } from "../types/user";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  currentUser: UserRes | null;
  setCurrentUser: (user: UserRes | null) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      currentUser: null,
      setCurrentUser: (currentUser: UserRes | null) => set({ currentUser }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
