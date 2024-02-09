import { axiosPrivate } from "../services/axios/axios";
import useRefresh from "./useRefresh";
import { useEffect } from "react";
import useAuth from "./useAuth";

export default function useAxiosPrivate() {
  const { auth } = useAuth();
  const refresh = useRefresh();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
          console.log(auth?.accessToken);
        }
        return config;
      },
      async (err) => {
        Promise.reject(err);
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 403 && !prevReq?.sent) {
          prevReq.sent = true;
          const newAccessToken = await refresh();
          prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevReq);
        } else {
          return Promise.reject(err);
        }
      }
    );
    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
}
