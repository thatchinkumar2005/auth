export default function RegisterApi(axios) {
  return async ({ username, pswd }) => {
    const resp = await axios.post("/api/v1/auth/register", { username, pswd });
    return resp.data;
  };
}
