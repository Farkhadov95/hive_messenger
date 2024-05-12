import { Chat } from "../../types/chat";

export const replaceChat = (chats: Chat[], newChat: Chat) => {
  const cleanChats = chats.filter((c) => c._id !== newChat._id);
  cleanChats.push(newChat);
  return cleanChats;
};
