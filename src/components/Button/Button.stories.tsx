import React from "react";
import Button from "./Button";
import "styled-components/macro";

export default {
  title: "Button",
};

export const ButtonStory = () => (
  <Button>
    <text
      css={`
        font-weight: 500;
        font-size: 15px;
        color: #fff;
        line-height: 18px;
      `}
    >
      Add New...
    </text>
  </Button>
);

ButtonStory.story = {
  name: "default",
};
