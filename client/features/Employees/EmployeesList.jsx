import styled from "styled-components";
import useEmployees from "./useEmployees";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import useLogout from "../../hooks/useLogout";

const StyledEmployeeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  min-height: 500px;
  width: 500px;
  background-color: #6962ad;
  border-radius: 20px;
`;

const StyledEmployeeListItem = styled.li`
  font-size: 24px;
`;

function EmployeesList() {
  const { isGettingEmployees, employees, error } = useEmployees();
  const logout = useLogout();

  console.log(error);

  const navigate = useNavigate();

  function handleAddClick(e) {
    e.preventDefault();
    navigate("/employees/add");
  }
  async function handleLogOutClick(e) {
    e.preventDefault();
    await logout();
    navigate("/auth/login");
  }

  if (isGettingEmployees) return <h1>Loading</h1>;
  if (employees.length === 0) {
    return (
      <>
        <h2>No employees</h2>
        <Link to="/auth/login">Back to Login</Link>
      </>
    );
  }
  return (
    <>
      <StyledEmployeeList>
        <h1>EMPLOYEES</h1>
        {employees.map(({ fname, lname, id }) => {
          return (
            <StyledEmployeeListItem key={id}>
              {`${fname} ${lname}`}
            </StyledEmployeeListItem>
          );
        })}
        <Button onClick={handleAddClick}>
          <BsPlus size={40} color="black" />
        </Button>
        <Button onClick={handleLogOutClick}>
          <BsBoxArrowInRight size={30} color="black" />
        </Button>
      </StyledEmployeeList>
      <Link to="/auth/login">Back to Login</Link>
    </>
  );
}

export default EmployeesList;
