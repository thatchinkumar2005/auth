import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  width: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
