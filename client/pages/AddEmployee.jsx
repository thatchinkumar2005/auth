import AddEmployeeForm from "../features/Employees/AddEmployeeForm";
import styled from "styled-components";

const StyledPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AddEmployee() {
  return (
    <StyledPage>
      <AddEmployeeForm />
    </StyledPage>
  );
}

export default AddEmployee;
