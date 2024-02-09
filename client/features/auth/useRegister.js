import { useMutation } from "@tanstack/react-query";
import RegisterApi from "../../services/RegisterApi";
import useAxios from "../../hooks/useAxios";

export default function useRegister() {
  const axios = useAxios();
  const { mutate: register, IsLoading: isRegistering } = useMutation({
    mutationFn: RegisterApi(axios),
  });
  return { register, isRegistering };
}
