import { create } from "zustand";
import { Chat } from "../types/chat";
import { MessageType } from "../types/message";

interface ChatStore {
  allMessages: MessageType[];
  allChats: Chat[];
  currentChat: Chat | null;
  setAllChats: (allChats: Chat[]) => void;
  setCurrentChat: (user: Chat | null) => void;
  setAllMessages: (allMessages: MessageType[]) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  allMessages: [],
  allChats: [],
  currentChat: null,
  setAllChats: (allChats: Chat[]) => set({ allChats }),
  setCurrentChat: (currentChat: Chat | null) => set({ currentChat }),
  setAllMessages: (allMessages: MessageType[]) => set({ allMessages }),
}));
