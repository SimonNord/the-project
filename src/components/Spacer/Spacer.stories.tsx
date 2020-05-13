import React from "react";
import Spacer from "./Spacer";

export default {
  title: "Spacer",
};

export const SpacerStory = () => (
  <div style={{ border: "1px solid red" }}>
    <Spacer top={4} left={4} />
  </div>
);

SpacerStory.story = {
  name: "default",
};
