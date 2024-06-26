import { isAxiosError } from "axios";
import { NewUser, User } from "../types/user";
import api from "./api";

enum UserRoutes {
  user = "/user/",
  login = "/user/login",
}

export const registerUser = async (newUser: NewUser) => {
  try {
    const res = await api.post(UserRoutes.user, newUser);
    return res;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Network Error: " + error);
  }
};

export const loginUser = async (user: User) => {
  try {
    const res = await api.post(UserRoutes.login, user);
    return res;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Network Error: " + error);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await api.get(UserRoutes.user);
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Network Error: " + error);
  }
};
