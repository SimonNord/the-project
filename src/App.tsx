import React from "react";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import pckg from "../package.json";

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
      <Router basename={pckg.homepage}>
        <Container>
          <Sidebar
            css={`
              flex: 0 0 270px;
              height: 100vh;
              min-width: 0;
            `}
            user={HARDCODED_USER}
          />
          <Content />
        </Container>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
