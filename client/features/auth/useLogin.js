import { useMutation } from "@tanstack/react-query";
import LoginApi from "../../services/LoginApi";
import useAxios from "../../hooks/useAxios";

export default function useLogin() {
  const axios = useAxios();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: LoginApi(axios),
  });

  return { login, isLoggingIn };
}
