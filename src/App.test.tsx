import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import UserCard from "./components/Sidebar/components/UserCard/UserCard";
import ExpandedList, {
  ExpandedListItem,
} from "./components/Sidebar/components/ExpandedList/ExpandedList";

const testUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
};

it("should allow you to go to settings", () => {
  const { getByText } = render(<App />);

  userEvent.click(getByText(testUser.firstName));
  userEvent.click(getByText("Profile & Settings"));

  const profileAndSettingsText = getByText("Profile And Settings");
  expect(profileAndSettingsText).toBeInTheDocument();
});
