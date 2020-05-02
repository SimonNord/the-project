import React from "react";
import { Color } from './variables'
import styled from "styled-components/macro"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const SideBar = styled.div`
  width: 270px;
  height: 100vh;
  background-color: ${Color.Cinder};
`

function App() {
  return (
    <Container>
      <SideBar>
        This will be the sidebar
      </SideBar>
      <div>
        this is the content
      </div>
    </Container>
  );
}

export default App;
