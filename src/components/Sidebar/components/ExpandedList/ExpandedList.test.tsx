import React from "react";
import { render } from "@testing-library/react";
import ExpandedList, { ExpandedListItem } from "./ExpandedList";

it("should render the list items", () => {
  const { queryByText } = render(
    <ExpandedList>
      <ExpandedListItem>Item One</ExpandedListItem>
      <ExpandedListItem>Item Two</ExpandedListItem>
    </ExpandedList>
  );

  expect(queryByText("Item One")).toBeInTheDocument();
  expect(queryByText("Item Two")).toBeInTheDocument();
});
