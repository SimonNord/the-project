import React from "react";
import { render } from "@testing-library/react";
import NoContentPlaceholder from "./NoContentPlaceholder";

it("should render the main text", () => {
  const { getByText } = render(<NoContentPlaceholder />);
  const mainText = getByText("The Start of a Better You!");
  expect(mainText).toBeInTheDocument();
});

it("should render the motivational text", () => {
  const { getByText } = render(<NoContentPlaceholder />);
  const motivationalText = getByText(
    "Habits are like dominos. As one is formed, all others will follow!"
  );
  expect(motivationalText).toBeInTheDocument();
});

it("should render the image", () => {
  const { getByAltText } = render(<NoContentPlaceholder />);
  const altText = getByAltText("No content placeholder image");

  expect(altText).toBeInTheDocument();
});
