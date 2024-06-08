import api, { getHeaders } from "./api";

enum ChatsRoutes {
  chats = "/chat/",
  chatRemoveUser = "/chat/remove/",
  chatAddUser = "/chat/add/",
  group = "/chat/group/",
  messages = "/message/",
  rename = "/chat/rename/",
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

export const createChat = async (userID: string) => {
  const data = { userID };

  try {
    const res = await api.post(ChatsRoutes.chats, data, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const createGroupChat = async (users: string[], groupName: string) => {
  const data = { users, groupName };
  try {
    const res = await api.post(ChatsRoutes.group, data, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const changeName = async (chatID: string, chatName: string) => {
  const data = { chatName };
  try {
    const res = await api.patch(`${ChatsRoutes.rename}${chatID}`, data, {
      headers: getHeaders(),
    });
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

export const addUserToGroup = async (chatID: string, userIDs: string[]) => {
  const data = { userIDs };
  try {
    const res = await api.patch(`${ChatsRoutes.chatAddUser}${chatID}`, data, {
      headers: getHeaders(),
    });
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const deleteUserFromGroup = async (chatID: string, userID: string) => {
  const data = { userIDs: [userID] };
  try {
    const res = await api.patch(
      `${ChatsRoutes.chatRemoveUser}${chatID}`,
      data,
      {
        headers: getHeaders(),
      }
    );
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};
