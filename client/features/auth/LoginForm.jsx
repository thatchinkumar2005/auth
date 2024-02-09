import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useLogin from "./useLogin";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { setAuth } = useAuth();
  const { register, handleSubmit } = useForm();
  const { isLoggingIn, login } = useLogin();
  const navigate = useNavigate();
  return (
    <>
      <Form
        onSubmit={handleSubmit((formData) => {
          login(formData, {
            onSuccess: (respData) => {
              console.log({ ...formData, accessToken: respData.accessToken });
              setAuth({ ...formData, accessToken: respData.accessToken });
              navigate("/employees");
            },
          });
        })}
      >
        <h1>LOGIN</h1>
        <Input
          placeholder="username"
          type="username"
          autoComplete="username"
          {...register("username")}
        />
        <Input
          placeholder="Password"
          type="password"
          autoComplete="password"
          {...register("pswd")}
        />
        <Button disabled={isLoggingIn}>Submit</Button>
      </Form>
    </>
  );
}

export default LoginForm;
