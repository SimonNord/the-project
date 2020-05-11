import React from "react";
import SideBarItem from "./SideBarItem";
import "styled-components/macro";

export default {
  title: "SideBarItem",
};

export const SideBarItemStory = () => (
  <SideBarItem>
    <span
      css={`
        font-weight: 500;
        font-size: 15px;
        color: #fff;
        line-height: 18px;
      `}
    >
      Progress
    </span>
  </SideBarItem>
);

SideBarItemStory.story = {
  name: "default",
};
