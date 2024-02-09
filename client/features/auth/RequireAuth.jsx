import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RequireAuth() {
  const { auth } = useAuth();
  return <>{auth?.accessToken ? <Outlet /> : <Navigate to="/auth/login" />}</>;
}

export default RequireAuth;
