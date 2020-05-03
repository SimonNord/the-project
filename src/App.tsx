import React from "react";
import styled from "styled-components/macro";
import SideBar from "./components/Sidebar/SideBar";
import Content from "./components/Content/Content";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const HARDCODED_USER = {
  first_name: "John",
  last_name: "Doe",
  email: "john@doesNotReject.com",
};

function App() {
  return (
    <Container>
      <SideBar
        css={`
          width: 270px;
          height: 100vh;
        `}
        user={HARDCODED_USER}
      />
      <Content />
    </Container>
  );
}

export default App;
