import api from "./api";

enum UserRoutes {
  user = "/user/",
  login = "/user/login",
}

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

export const registerUser = async (newUser: NewUser) => {
  try {
    const res = await api.post(UserRoutes.user, newUser);
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const loginUser = async (user: User) => {
  try {
    const res = await api.post(UserRoutes.login, user);
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await api.get(UserRoutes.user);
    return res.data;
  } catch (error) {
    throw new Error("Network Error: " + error);
  }
};
