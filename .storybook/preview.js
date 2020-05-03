import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyle";

addDecorator((storyFn) => (
  <>
    {storyFn()}
    <GlobalStyles />
  </>
));
