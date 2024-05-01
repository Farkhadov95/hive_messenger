export type ChatUsers = {
  name: string;
  _id: string;
};

export type Chat = {
  _id: string;
  isGroupChat: boolean;
  chatName: string;
  users: [ChatUsers];
  groupAdmin: string;
  latestMessage: {
    sender: ChatUsers;
    content: string;
  };
  createdAt: string;
  updatedAt: string;
};
