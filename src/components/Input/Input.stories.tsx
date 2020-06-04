import React from "react";
import "styled-components/macro";
import Input from "./Input";

export default {
  component: Input,
  title: "Input",
};

const StorybookWhiteCentered = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  background: "white",
};

export const InputStory = () => (
  <div style={StorybookWhiteCentered}>
    <Input></Input>
  </div>
);

InputStory.story = {
  name: "default",
};
