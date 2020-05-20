import React from "react";
import SidebarItem from "./SidebarItem";
import "styled-components/macro";

export default {
  title: "SidebarItem",
};

export const SidebarItemStory = () => (
  <div>
    <SidebarItem>
      <span
        css={`
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
        `}
      >
        Progress
      </span>
    </SidebarItem>
    <div css="padding-top: 64px;" />
    <SidebarItem>
      <span
        css={`
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
        `}
      >
        Info
      </span>
    </SidebarItem>
    <div css="padding-top: 64px;" />
    <SidebarItem>
      <span
        css={`
          font-weight: 500;
          font-size: 15px;
          line-height: 18px;
        `}
      >
        User
      </span>
    </SidebarItem>
  </div>
);

SidebarItemStory.story = {
  name: "default",
};
