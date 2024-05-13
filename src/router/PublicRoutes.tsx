import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";

export const routes = {
  welcome: "/",
  home: "/",
  login: "/login",
  signup: "/signup",
  chats: "/chats",
  chat: "/chat/:id",
  notFound: "*",
};

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.signup,
        element: <SignUp />,
      },
    ],
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

export default router;
