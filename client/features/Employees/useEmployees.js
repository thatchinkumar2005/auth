import getEmployeesApi from "../../services/getEmployeesApi";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function useEmployees() {
  const axiosPrivate = useAxiosPrivate();
  const {
    isLoading: isGettingEmployees,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployeesApi(axiosPrivate),
  });

  return { isGettingEmployees, employees, error };
}
