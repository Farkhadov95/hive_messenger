import axios from "axios";

const URL = "http://localhost:3000";

export default axios.create({
  baseURL: URL,
});

export const getHeaders = () => {
  const token = sessionStorage.getItem("X-Auth-Token");
  if (!token) throw new Error("Unauthorized request");
  return {
    "Content-Type": "application/json",
    "X-Auth-Token": token,
  };
};
