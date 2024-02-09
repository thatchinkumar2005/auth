export default function getEmployeesApi(axiosPrivate) {
  return async () => {
    try {
      const resp = await axiosPrivate({
        method: "GET",
        url: "http://localhost:3000/api/v1/employees",
      });
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };
}
