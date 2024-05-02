import api, { getHeaders } from "./api";

enum ChatsRoutes {
  chats = "/chat/",
  messages = "/message/",
}

export const getChats = async () => {
  try {
    const res = await api.get(ChatsRoutes.chats, { headers: getHeaders() });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const getMessages = async (chatID: string | undefined) => {
  if (!chatID) {
    throw new Error("No chat ID provided");
  }

  try {
    const res = await api.get(`${ChatsRoutes.messages}${chatID}`, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const sendMessage = async (chatID: string, content: string) => {
  const data = { chatID, content };

  try {
    const res = await api.post(ChatsRoutes.messages, data, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};
