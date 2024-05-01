import api, { getHeaders } from "./api";

enum ChatsRoutes {
  chats = "/chat/",
  chat = "/user/:id",
}

export const getChats = async () => {
  try {
    const res = await api.get(ChatsRoutes.chats, { headers: getHeaders() });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};
