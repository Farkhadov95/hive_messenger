import api, { getHeaders } from "./api";

enum ChatsRoutes {
  chats = "/chat/",
  group = "/chat/group/",
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

export const createChat = async (userID: string, userName: string) => {
  const data = { userID, userName };

  try {
    const res = await api.post(ChatsRoutes.chats, data, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const createGroupChat = async () => {
  try {
    const res = await api.post(
      ChatsRoutes.group,
      {},
      { headers: getHeaders() }
    );
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const deleteChat = async (chatID: string) => {
  try {
    const res = await api.delete(`${ChatsRoutes.chats}${chatID}`, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};
