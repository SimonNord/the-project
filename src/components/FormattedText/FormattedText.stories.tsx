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
    <FormattedText weight="regular">
      I should be black with a font-size of 15px
    </FormattedText>
    <Seperator />
    <FormattedText size="1" color={Color.DodgerBlue}>
      I should be blue with a font-size of 15px
    </FormattedText>
    <Seperator />
    <FormattedText size="2" weight="bold" color={Color.White}>
      I should be white with a font-size of 17px
    </FormattedText>
  </div>
);

FormattedTextStory.story = {
  name: "default",
  backgrounds: [{ name: "White", value: "white", default: true }],
};
