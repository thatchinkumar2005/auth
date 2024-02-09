import Button from "../../ui/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledAuthDash = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background-color: #fdbf60;
`;

const AuthHead = styled.h1`
  color: #7f27ff;
  font-size: 100px;
`;

function AuthDash() {
  const navigate = useNavigate();

  function handleLoginClick(e) {
    e.preventDefault();
    navigate("/auth/login");
  }
  function handleRegisterClick(e) {
    e.preventDefault();
    navigate("/auth/register");
  }
  return (
    <StyledAuthDash>
      <AuthHead>Auth</AuthHead>
      <Button onClick={handleLoginClick}>Login</Button>
      <Button onClick={handleRegisterClick}>Register</Button>
    </StyledAuthDash>
  );
}

export default AuthDash;
