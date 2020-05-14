import React from "react";
import { render } from "@testing-library/react";
import UserCard from "./UserCard";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

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

it("should render the email", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  const { queryByText } = render(<UserCard user={testUser} />);
  const email = queryByText(testUser.email);
  expect(email).toBeInTheDocument();
});

it("should expand when being clicked", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  const { queryByText } = render(
    <MemoryRouter>
      <UserCard user={testUser} />
    </MemoryRouter>
  );

  expect(queryByText("Profile & Settings")).not.toBeInTheDocument(); // not expanded yet, should be invisible
  userEvent.click(queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(queryByText("Profile & Settings")).toBeInTheDocument(); // now it should be visible
});

it("should collapse when clicked again", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  const { queryByText } = render(
    <MemoryRouter>
      <UserCard user={testUser} />
    </MemoryRouter>
  );

  expect(queryByText("Profile & Settings")).not.toBeInTheDocument(); // not expanded yet, should be invisible

  userEvent.click(queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(queryByText("Profile & Settings")).toBeInTheDocument(); // now it should be visible

  userEvent.click(queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(queryByText("Profile & Settings")).not.toBeInTheDocument(); // collapsed again, should be invisible
});
