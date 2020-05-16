import React from "react";
import { render } from "@testing-library/react";
import FormattedText from "./FormattedText";

it("should render a text with a default font-size of 16px", () => {
  const { getByText } = render(<FormattedText>My text</FormattedText>);

  const mainText = getByText("My text");
  expect(mainText).toHaveStyle({ fontSize: "16px" });
});

test.each`
  size  | fontSize
  ${-2} | ${12}
  ${-1} | ${14}
  ${0}  | ${16}
  ${1}  | ${18}
  ${2}  | ${20}
  ${3}  | ${24}
  ${4}  | ${30}
  ${5}  | ${36}
  ${6}  | ${48}
  ${7}  | ${60}
  ${8}  | ${72}
`("renders a text with a font-size of $fontSize px", ({ size, fontSize }) => {
  const { getByText } = render(
    <FormattedText size={size}>My text</FormattedText>
  );
  const mainText = getByText("My text");
  expect(mainText).toHaveStyle({ fontSize: `${fontSize}px` });
});
