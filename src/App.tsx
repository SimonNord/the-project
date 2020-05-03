import React from "react";
import styled from "styled-components/macro"
import SideBar from './components/Sidebar/SideBar'
import Content from './components/Content/Content'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <Container>
      <SideBar
        css={`
          width: 270px;
          height: 100vh;
        `}
      />
      <Content />
    </Container>
  );
}

export default App;
