import { Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // const token = sessionStorage.getItem("X-Auth-Token");
  // console.log(token);
  // return token ? <Outlet /> : <Navigate to={`${routes.login}`} />;
  return <Outlet />;
};

export default PrivateRoutes;
