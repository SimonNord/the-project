import React from "react";
import SideBarItem from "./SideBarItem";
import "styled-components/macro";

export default {
  title: "SideBarItem",
};

export const SideBarItemStory = () => (
  <div>
    <SideBarItem
      css={`
        background-color: #24292e;
        color: white;
        display: table-cell;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        padding: 11px 15px;
        vertical-align: middle;

        &:hover {
          background-color: #0366d6;
        }
      `}
    >
      Progress
    </SideBarItem>
    <div css="padding-top: 64px;" />
    <SideBarItem
      css={`
        background-color: #24292e;
        color: white;
        display: table-cell;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        padding: 11px 15px;
        vertical-align: middle;

        &:hover {
          background-color: #0366d6;
        }
      `}
    >
      Info
    </SideBarItem>
    <div css="padding-top: 64px;" />
    <SideBarItem
      css={`
        background-color: #24292e;
        color: white;
        display: table-cell;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        padding: 11px 15px;
        vertical-align: middle;

        &:hover {
          background-color: #0366d6;
        }
      `}
    >
      User
    </SideBarItem>
  </div>
);

SideBarItemStory.story = {
  name: "default",
};
