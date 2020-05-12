import React from "react";
import Button from "./Button";
import "styled-components/macro";

export default {
  title: "Button",
};

export const ButtonStory = () => (
  <Button>
    <span
      css={`
        font-weight: 500;
        font-size: 15px;
        color: #fff;
        line-height: 18px;
      `}
    >
      Add New...
    </span>
  </Button>
);

ButtonStory.story = {
  name: "default",
};

export const PrimaryButtonStory = () => (
  <Button type="primary">Primary Button</Button>
);

PrimaryButtonStory.story = {
  name: "Primary",
};
