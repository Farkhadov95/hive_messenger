import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Chat } from "../types/chat";

interface ChatStore {
  currentChat: Chat | null;
  setCurrentChat: (user: Chat | null) => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      currentChat: null,
      setCurrentChat: (currentChat: Chat | null) => set({ currentChat }),
    }),
    {
      name: "chat-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
