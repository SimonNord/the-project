import React from "react";
import styled from "styled-components";
import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyle";

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

addDecorator((storyFn) => (
  <Center>
    {storyFn()}
    <GlobalStyles />
  </Center>
));
