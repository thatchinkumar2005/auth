import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import useRegister from "./useRegister";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { register: registerApi, isRegistering } = useRegister();
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={handleSubmit((formData) => {
        registerApi(formData, {
          onSuccess: (respData) => {
            console.log(respData);
            navigate("/auth/login");
          },
        });
      })}
    >
      <h1>SIGN UP</h1>

      {errors.username?.message && (
        <h3 style={{ color: "red" }}>{errors.username?.message}</h3>
      )}
      {errors.pswd?.message && (
        <h3 style={{ color: "red" }}>{errors.pswd?.message}</h3>
      )}

      <Input
        placeholder="username"
        type="username"
        id="username"
        {...register("username", {
          required: true,
          minLength: {
            value: 5,
            message: "username should not less than 5",
          },
          maxLength: {
            value: 50,
            message: "username not more than 50",
          },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Enter a valid username",
          },
        })}
      />
      <Input
        placeholder="password"
        type="password"
        autoComplete="password"
        {...register("pswd", {
          required: true,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "password should contain Minimum eight characters, at least one letter and one number",
          },
        })}
      />
      <Button disabled={isRegistering}>Submit</Button>
    </Form>
  );
}

export default SignUpForm;
