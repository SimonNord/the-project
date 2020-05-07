import React from "react";
import { render } from "@testing-library/react";
import NoContentPlaceholder from "./NoContentPlaceholder";

it("should render the main text", () => {
  const { getByText } = render(<NoContentPlaceholder />);
  const mainText = getByText("The Start of a Better You!");
  expect(mainText).toBeInTheDocument();
});

it.todo("should render the motivational text");

it.todo("should render the image");
