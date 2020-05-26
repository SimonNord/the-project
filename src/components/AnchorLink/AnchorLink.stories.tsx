import React from "react";
import { MemoryRouter } from "react-router-dom";
import "styled-components/macro";

import AnchorLink from "./AnchorLink";
import LinkText from "./components/LinkText";
import Spacer from "../Spacer/Spacer";

import { RoutePath, Color } from "variables";

export default {
  component: AnchorLink,
  title: "AnchorLink",
};

const StorybookWhiteCentered = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  background: "white",
};

export const AnchorLinkStory = () => (
  <div style={StorybookWhiteCentered}>
    <MemoryRouter>
      <Spacer top={2} right={2} bottom={2} left={2}>
        <AnchorLink url={RoutePath.Home}>
          <LinkText>This is a Black Link</LinkText>
        </AnchorLink>
      </Spacer>

      <Spacer top={2} right={2} bottom={2} left={2}>
        <div
          css={`
            background-color: black;
          `}
        >
          <AnchorLink url={RoutePath.Home} linkColor={Color.White}>
            <LinkText>This is a White Link on a Black background</LinkText>
          </AnchorLink>
        </div>
      </Spacer>
    </MemoryRouter>
  </div>
);

AnchorLinkStory.story = {
  name: "default",
};
