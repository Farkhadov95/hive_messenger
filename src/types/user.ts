export type UserRes = {
  _id: string;
  username: string;
  email: string;
  image: string;
  isAdmin: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
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

export type CurrentUser = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
};

export type NewUserForm = {
  username: string;
  email: string;
  password: string;
  conf_password: string;
};
