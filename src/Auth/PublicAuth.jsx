import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("refreshToken-React");
  return token ? (
    <Navigate to="/dashboard" state={{ from: location }} replace>
      PublicAuth
    </Navigate>
  ) : (
    <Outlet />
  );
};

export default PublicAuth;
