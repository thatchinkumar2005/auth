import AuthNav from "./AuthNav";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLoginLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

function AuthLayout() {
  return (
    <StyledLoginLayout>
      <AuthNav>
        <NavLink
          style={{ fontSize: "24px", textDecoration: "none", color: "black" }}
          to="/auth/login"
        >
          Login
        </NavLink>
        <NavLink
          style={{ fontSize: "24px", textDecoration: "none", color: "black" }}
          to="/auth/register"
        >
          SignUp
        </NavLink>
        <NavLink
          style={{ fontSize: "24px", textDecoration: "none", color: "black" }}
          to="/employees"
        >
          Employees
        </NavLink>
      </AuthNav>

      <Outlet />
    </StyledLoginLayout>
  );
}

export default AuthLayout;
