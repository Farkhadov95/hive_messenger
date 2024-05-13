import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import Chat from "../pages/Chat";
import Chats from "../pages/Chats";
import Welcome from "../pages/Welcome";

export const routes = {
  welcome: "/",
  home: "home",
  login: "login",
  signup: "signup",
  chats: "chats",
  chat: "chat/:id",
  notFound: "*",
};

const router = createBrowserRouter([
  {
    path: routes.welcome,
    element: <Welcome />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.signup,
        element: <SignUp />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: routes.home,
            element: <Home />,
          },
          {
            path: routes.chats,
            element: <Chats />,
          },
          {
            path: routes.chat,
            element: <Chat />,
          },
        ],
      },
    ],
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

export default router;
