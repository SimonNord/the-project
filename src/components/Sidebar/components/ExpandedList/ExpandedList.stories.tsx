import React from "react";
import "styled-components/macro";

import ExpandedList from "./ExpandedList";

export default {
  title: "ExpandedList",
};

export const ExpandedListStory = () => (
  <div>
    <ExpandedList>
      <a href="#">Hello</a>
      <a href="#">Goodbye</a>
    </ExpandedList>
  </div>
);

ExpandedListStory.story = {
  name: "default",
};
