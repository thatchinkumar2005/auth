import { useMutation, useQueryClient } from "@tanstack/react-query";
import addEmployeeApi from "../../services/addEmployeeApi";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function useEmployeeAdd() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: addEmployeeApi(axiosPrivate),
    onSuccess: (respData) => {
      console.log(respData);
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
  });
  return { mutate, isLoading };
}
