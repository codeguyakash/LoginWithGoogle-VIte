import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
const RequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("refreshToken-React");
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace>
      PublicAuth
    </Navigate>
  );
};

export default RequireAuth;
