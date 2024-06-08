import { create } from "zustand";
import { Chat } from "../types/chat";
import { MessageType } from "../types/message";
import { UserRes } from "../types/user";

interface ChatStore {
  allMessages: MessageType[];
  allChats: Chat[];
  allUsers: UserRes[];
  currentChat: Chat | null;
  setAllChats: (allChats: Chat[]) => void;
  setCurrentChat: (currentChat: Chat | null) => void;
  setAllMessages: (allMessages: MessageType[]) => void;
  setAllUsers: (allUsers: UserRes[]) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  allMessages: [],
  allChats: [],
  allUsers: [],
  currentChat: null,
  setAllChats: (allChats: Chat[]) => set({ allChats }),
  setAllUsers: (allUsers: UserRes[]) => set({ allUsers }),
  setCurrentChat: (currentChat: Chat | null) => set({ currentChat }),
  setAllMessages: (allMessages: MessageType[]) => set({ allMessages }),
}));
