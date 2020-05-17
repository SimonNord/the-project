import React from "react";
import { render } from "@testing-library/react";
import FormattedText, { Props } from "./FormattedText";

it("should render a text with a default font-size of 16px", () => {
  const { getByText } = render(<FormattedText>My text</FormattedText>);

  const mainText = getByText("My text");
  expect(mainText).toHaveStyle({ fontSize: "16px" });
});

test.each<[Props["size"], string]>([
  ["-2", "12"],
  ["-1", "14"],
  ["0", "16"],
  ["1", "18"],
  ["2", "20"],
  ["3", "24"],
  ["4", "30"],
  ["5", "36"],
  ["6", "48"],
  ["7", "60"],
  ["8", "72"],
])(
  "FormattedText with size property of %s must have a font-size of %s px",
  (size, fontSize) => {
    const { getByText } = render(
      <FormattedText size={size}>My text</FormattedText>
    );
    const mainText = getByText("My text");
    expect(mainText).toHaveStyle({ fontSize: `${fontSize}px` });
  }
);
