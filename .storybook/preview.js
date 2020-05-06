import React from "react";
import styled from "styled-components";
import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyle";
import { Color } from "variables";

import { addParameters } from "@storybook/react"; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: "Sidebar", value: Color.Cinder, default: true },
    { name: "Content", value: Color.White },
  ],
});

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
