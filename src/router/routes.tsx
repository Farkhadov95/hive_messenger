import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

export const routes = {
  home: "/",
  login: "/login",
  signup: "/signup",
};

const router = createBrowserRouter([
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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;