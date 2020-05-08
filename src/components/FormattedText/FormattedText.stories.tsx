import React from "react";
import FormattedText from "./FormattedText";
import { Color } from "variables";
import styled from "styled-components/macro";

export default {
  title: "FormattedText",
  parameters: {
    backgrounds: [
      { name: "LimedSpruce", value: Color.LimedSpruce, default: true },
    ],
  },
};

const Seperator = styled.div({
  paddingTop: "64px",
});

export const FormattedTextStory = () => (
  <div>
    <FormattedText>I should be black</FormattedText>
    <Seperator />
    <FormattedText color={Color.DodgerBlue}>I should be blue</FormattedText>
    <Seperator />
    <FormattedText color={Color.White}>I should be white</FormattedText>
  </div>
);

FormattedTextStory.story = {
  name: "default",
  backgrounds: [{ name: "White", value: "white", default: true }],
};
