export default function addEmployeeApi(axiosPrivate) {
  return async ({ fname, lname }) => {
    const resp = await axiosPrivate.post("/api/v1/employees", {
      fname,
      lname,
    });

    return resp.data;
  };
}
