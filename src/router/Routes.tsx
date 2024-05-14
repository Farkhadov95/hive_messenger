import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import Welcome from "../pages/Welcome";

export const routes = {
  welcome: "/",
  home: "/home",
  login: "/login",
  signup: "/signup",
  chats: "/chats",
  chat: "/chat/:id",
  notFound: "*",
};

const router = createBrowserRouter([
  {
    path: routes.welcome,
    element: <Welcome />,
  },
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
    element: <PrivateRoutes />,
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

export default router;
