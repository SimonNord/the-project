import React from "react";
import "styled-components/macro";
import Label from "./Label";

export default {
  component: Label,
  title: "Label",
};

const StorybookWhiteCentered = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  background: "white",
};

export const LabelStory = () => (
  <div style={StorybookWhiteCentered}>
    <Label children="text" />
  </div>
);

LabelStory.story = {
  name: "default",
};
