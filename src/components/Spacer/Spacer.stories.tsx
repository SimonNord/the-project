import React from "react";
import Spacer from "./Spacer";

export default {
  title: "Spacer",
};

export const SpacerStory = () => (
  <div>
    <div style={{ border: "1px solid red" }}>
      <Spacer bottom={4} left={4} />
    </div>
    <div
      style={{
        border: "1px solid red",
        marginTop: "10px",
      }}
    >
      <Spacer top={-100000000000} left={1.55}>
        <p>Wrapped</p>
      </Spacer>
    </div>
  </div>
);

SpacerStory.story = {
  name: "default",
};
