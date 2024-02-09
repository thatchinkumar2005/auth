import useAxios from "./useAxios";
import useAuth from "./useAuth";

export default function useLogout() {
  const { setAuth } = useAuth();
  const axios = useAxios();

  return async () => {
    try {
      setAuth({});
      const resp = await axios.get("api/v1/auth/logout", {
        withCredentials: true,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
}
