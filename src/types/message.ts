export type MessageSender = {
  _id: string;
  username: string;
  email: string;
};

export type MessageChat = {
  _id: string;
  isGroupChat: boolean;
  chatName: string;
  users: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type MessageType = {
  _id: string;
  sender: MessageSender;
  content: string;
  chat: MessageChat;
  createdAt: Date;
  updatedAt: Date;
};
