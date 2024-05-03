import { create } from "zustand";
import { Chat } from "../types/chat";

interface ChatStore {
  allChats: Chat[];
  currentChat: Chat | null;
  setAllChats: (allChats: Chat[]) => void;
  setCurrentChat: (user: Chat | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  allChats: [],
  currentChat: null,
  setAllChats: (allChats: Chat[]) => set({ allChats }),
  setCurrentChat: (currentChat: Chat | null) => set({ currentChat }),
}));
