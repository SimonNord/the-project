import React from "react";
import { render } from "@testing-library/react";
import Content from "./Content";

test("renders learn react link", () => {
  const { getByText } = render(<Content />);
  const linkElement = getByText("this is the content");
  expect(linkElement).toBeInTheDocument();
});
