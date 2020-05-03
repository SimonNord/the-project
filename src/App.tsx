import React from "react";
import styled from "styled-components/macro"
import SideBar from './components/Sidebar/SideBar'

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
      <div>
        this is the content
      </div>
    </Container>
  );
}

export default App;
