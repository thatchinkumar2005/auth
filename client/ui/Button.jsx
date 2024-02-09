import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 120px;
  color: white;
  background-color: #96e9c6;
  transition: all 200ms;
  outline: none;
  border: none;
  border-radius: 20px;

  &:hover {
    background: transparent;
    border: 1px solid white;
  }
`;

export default Button;
