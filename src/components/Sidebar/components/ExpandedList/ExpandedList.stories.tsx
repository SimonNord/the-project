import React from "react";
import "styled-components/macro";

import ExpandedList, { ExpandedListItem } from "./ExpandedList";

export default {
  title: "ExpandedList",
};

export const ExpandedListStory = () => (
  <div>
    <ExpandedList>
      <ExpandedListItem>Profile &amp; Settings</ExpandedListItem>
      <ExpandedListItem>Logout</ExpandedListItem>
    </ExpandedList>
  </div>
);

ExpandedListStory.story = {
  name: "default",
};
