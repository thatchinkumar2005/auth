import useAuth from "./useAuth.js";
import useAxios from "./useAxios.js";

export default function useRefresh() {
  const axios = useAxios();
  const { setAuth } = useAuth();

  async function refresh() {
    const resp = await axios.get("/api/v1/auth/refresh", {
      withCredentials: true,
    });
    const accessToken = resp.data.accessToken;
    setAuth((p) => {
      console.log(p.accessToken);
      console.log(accessToken);
      return { ...p, accessToken };
    });

    return accessToken;
  }

  return refresh;
}
