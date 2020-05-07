import React from "react";
import SectionHeadline from "./SectionHeadline";
import "styled-components/macro";
import { Color } from "variables";

export default {
  title: "SectionHeadline",
};

const colors = [
  Color.Cinder,
  Color.LimedSpruce,
  Color.CodGray,
  Color.DodgerBlue,
];

export const SectionHeadlineStory = () => (
  <div>
    This is the component on four different backgrounds.
    {colors.map((color, index) => (
      <div
        key={index}
        css={`
          margin-top: 5px;
          height: 40px;
          width: 270px;
          background-color: ${color};
        `}
      >
        <SectionHeadline>more</SectionHeadline>
      </div>
    ))}
  </div>
);

SectionHeadlineStory.story = {
  name: "default",
};
