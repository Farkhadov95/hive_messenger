import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import Welcome from "../pages/Welcome";
import Chat from "../pages/Chat";
import Chats from "../pages/Chats";
import Home from "../pages/Home";

export const routes = {
  welcome: "/",
  home: "/home",
  chats: "/home/chats",
  chat: "/home/chat",
  login: "/login",
  signup: "/signup",
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
    element: <PrivateRoutes />,
    children: [
      {
        path: routes.home,
        element: <Home />,
        children: [
          {
            path: "",
            element: <Chats />,
          },
          {
            path: "",
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

// import { createBrowserRouter } from "react-router-dom";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";
// import NotFound from "../pages/NotFound";
// import PrivateRoutes from "./PrivateRoutes";
// import Welcome from "../pages/Welcome";
// import Chat from "../pages/Chat";
// import Chats from "../pages/Chats";
// import Home from "../pages/Home";

// export const routes = {
//   welcome: "/",
//   home: "/home",
//   login: "/login",
//   signup: "/signup",
//   chats: "/home/chats",
//   chat: "/home/chat",
//   notFound: "*",
// };

// const router = createBrowserRouter([
//   {
//     path: routes.welcome,
//     element: <Welcome />,
//   },
//   {
//     path: routes.login,
//     element: <Login />,
//   },
//   {
//     path: routes.signup,
//     element: <SignUp />,
//   },
//   {
//     path: routes.home,
//     element: <PrivateRoutes />,
//     children: [
//       {
//         path: routes.home,
//         element: <Home />,
//         children: [
//           {
//             path: routes.chats,
//             element: <Chats />,
//           },
//           {
//             path: routes.chat,
//             element: <Chat />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: routes.notFound,
//     element: <NotFound />,
//   },
// ]);

// export default router;
