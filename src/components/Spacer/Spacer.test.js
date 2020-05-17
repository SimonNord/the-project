import React from "react";
import { render } from "@testing-library/react";
import Spacer from "./Spacer";

it("should render the main text", () => {
  const { getByText } = render(<Spacer>My content</Spacer>);
  const mainText = getByText("My content");
  expect(mainText).toHaveStyle({ padding: "0px 0px 0px 0px" });
});

it("should render the main text", () => {
  const { getByText } = render(
    <Spacer top={0} right={2} bottom={10} left={1}>
      My content
    </Spacer>
  );
  const mainText = getByText("My content");
  expect(mainText).toHaveStyle({ padding: "0px 16px 80px 8px" });
});

it("should render the main text", () => {
  const { getByText } = render(
    <Spacer top={-2} right={2} bottom={-5}>
      My content
    </Spacer>
  );
  const mainText = getByText("My content");
  expect(mainText).toHaveStyle({ padding: "-16px 16px -40px 0px" });
});

it("should render without any main text", () => {
  const { getByTestId } = render(
    <div data-testid="Spacer">
      <Spacer bottom={3} left={4}></Spacer>
    </div>
  );
  const noText = getByTestId("Spacer");
  expect(noText.firstChild).toHaveStyle({ padding: "0px 0px 24px 32px" });
});
