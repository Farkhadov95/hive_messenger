export type ChatUsers = {
  name: string;
  _id: string;
};

export type Chat = {
  _id: string;
  isGroupChat: boolean;
  chatName: string;
  users: [ChatUsers];
  groupAdminId: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};
