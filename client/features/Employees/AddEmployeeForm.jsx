import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useEmployeeAdd from "./useEmployeeAdd";
import { useNavigate } from "react-router-dom";

function AddEmployeeForm() {
  const { register, handleSubmit } = useForm();
  const { mutate } = useEmployeeAdd();
  const navigate = useNavigate();
  return (
    <>
      <Form
        onSubmit={handleSubmit((formData) => {
          mutate(formData);
          navigate("/employees");
        })}
      >
        <Input placeholder="first name" {...register("fname")} />
        <Input placeholder="last name" {...register("lname")} />
        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default AddEmployeeForm;
