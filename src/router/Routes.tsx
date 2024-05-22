import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import Chat from "../pages/Chat";
import Chats from "../pages/Chats";
import Home from "../pages/Home";

export const routes = {
  home: "/",
  chats: "chats",
  chat: "chat",
  login: "/login",
  signup: "/signup",
  notFound: "*",
};

const router = createBrowserRouter([
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.signup,
    element: <SignUp />,
  },
  {
    path: routes.home,
    element: <PrivateRoutes element={<Home />} />,
  },
  {
    path: routes.chats,
    element: <PrivateRoutes element={<Chats />} />,
  },
  {
    path: routes.chat,
    element: <PrivateRoutes element={<Chat />} />,
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

export default router;
