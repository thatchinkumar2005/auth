export default function LoginApi(axios) {
  return async ({ username, pswd }) => {
    const resp = await axios.post("/api/v1/auth/login", { username, pswd });

    return resp.data;
  };
}
