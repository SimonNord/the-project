import React from "react";
import styled from "styled-components/macro";
import SideBar from "./components/Sidebar/SideBar";
import Content from "./components/Content/Content";
import GlobalStyle from "./GlobalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const HARDCODED_USER = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
};

function App() {
  return (
    <>
      <Container>
        <SideBar
          css={`
            flex: 0 0 270px;
            height: 100vh;
            max-width: 270px;
          `}
          user={HARDCODED_USER}
        />
        <Content />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
