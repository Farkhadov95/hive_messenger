import { create } from "zustand";

interface ErrorStore {
  error: string | null;
  userError: string | null;
  setError: (error: string | null) => void;
  setUserError: (userError: string | null) => void;
}

export const useErrorStore = create<ErrorStore>((set) => ({
  error: null,
  userError: null,
  setError: (error) => set({ error }),
  setUserError: (userError) => set({ userError }),
}));
