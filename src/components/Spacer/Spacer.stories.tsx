import React from "react";
import Spacer from "./Spacer";

export default {
  title: "Spacer",
};

export const SpacerStory = () => {
  return (
    <div>
      <p>display text</p>
      <Spacer top={4} />
      <p>display text</p>
    </div>
  );
};

SpacerStory.story = {
  name: "default",
};
