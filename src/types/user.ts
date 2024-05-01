export type UserRes = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
};

export type NewUser = {
  username: string;
  email: string;
  password: string;
};

export type User = {
  email: string;
  password: string;
};

export type NewUserForm = {
  username: string;
  email: string;
  password: string;
  conf_password: string;
};
