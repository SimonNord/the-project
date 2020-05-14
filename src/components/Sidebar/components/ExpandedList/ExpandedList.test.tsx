import React from "react";
import { render } from "@testing-library/react";
import ExpandedList, { ExpandedListItem } from "./ExpandedList";

/*
// jest.it and jest.test are aliases of the same function
// But typically you would use it as per the example below
// whereas test would be used if you word the function as follows:
// test("<ExpandedList", () => {
// // Test goes here  
// });
// Useful link https://blog.sapegin.me/all/react-testing-3-jest-and-react-testing-library/
*/
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
