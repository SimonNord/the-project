import React from "react";
import SideBarItem from "./SideBarItem";
import "styled-components/macro";

export default {
  title: "SideBarItem",
};

export const SideBarItemStory = () => (
  <div>
    <SideBarItem>
      <span
        css={`
          font-weight: 500;
          font-size: 15px;
          color: black;
          line-height: 18px;
        `}
      >
        Progress
      </span>
    </SideBarItem>
    <div css="padding-top: 64px;" />
    <SideBarItem>
      <span
        css={`
          font-weight: 500;
          font-size: 15px;
          color: black;
          line-height: 18px;
        `}
      >
        Info
      </span>
    </SideBarItem>
    <div css="padding-top: 64px;" />
    <SideBarItem>
      <span
        css={`
          font-weight: 500;
          font-size: 15px;
          color: black;
          line-height: 18px;
        `}
      >
        User
      </span>
    </SideBarItem>
  </div>
);

SideBarItemStory.story = {
  name: "default",
};
