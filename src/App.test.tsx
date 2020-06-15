import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const testUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
};

it("should allow you to go to settings", () => {
  const { getByText } = render(<App />);

  userEvent.click(getByText(testUser.firstName));
  userEvent.click(getByText("Profile & Settings"));
  const generalSettingsText = getByText("App Settings");
  expect(generalSettingsText).toBeInTheDocument(); // Should be visible
});
