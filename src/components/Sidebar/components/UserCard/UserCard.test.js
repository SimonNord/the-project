import React from "react";
import { render } from "@testing-library/react";
import UserCard from "./UserCard";
import userEvent from "@testing-library/user-event";

it("should render the first name", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };
  const { queryByText } = render(<UserCard user={testUser} />);
  const firstName = queryByText(testUser.firstName);
  expect(firstName).toBeInTheDocument();
});

it.todo("should render the email");

it("should expand when being clicked", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };
  const { queryByText } = render(<UserCard user={testUser} />);

  expect(queryByText("Profile & Settings")).not.toBeInTheDocument(); // not expanded yet, should be invisible
  userEvent.click(queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(queryByText("Profile & Settings")).toBeInTheDocument(); // now it should be visible
});

it.todo("should collapse when clicked again");
