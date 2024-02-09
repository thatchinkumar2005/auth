import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefresh from "../../hooks/useRefresh";
import useAuth from "../../hooks/useAuth";

function PersistLogin() {
  const refresh = useRefresh();
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyJwtRefresh = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.accessToken ? verifyJwtRefresh() : setIsLoading(false);
  }, []);

  if (isLoading) return <h1>Loading</h1>;
  return <Outlet />;
}

export default PersistLogin;
