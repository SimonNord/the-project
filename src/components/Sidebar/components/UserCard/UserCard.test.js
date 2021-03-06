import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import { RoutePath } from "variables";

it("should render the first name", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  render(<UserCard user={testUser} />);
  const firstName = screen.queryByText(testUser.firstName);
  expect(firstName).toBeInTheDocument();
});

it("should render the email", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  render(<UserCard user={testUser} />);
  const email = screen.queryByText(testUser.email);
  expect(email).toBeInTheDocument();
});

it("should expand when being clicked", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  render(
    <MemoryRouter>
      <UserCard user={testUser} />
    </MemoryRouter>
  );

  expect(screen.queryByText("Profile & Settings")).not.toBeInTheDocument(); // not expanded yet, should be invisible
  userEvent.click(screen.queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(screen.queryByText("Profile & Settings")).toBeInTheDocument(); // now it should be visible
});

it("should collapse when clicked again", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };

  render(
    <MemoryRouter>
      <UserCard user={testUser} />
    </MemoryRouter>
  );

  expect(screen.queryByText("Profile & Settings")).not.toBeInTheDocument(); // not expanded yet, should be invisible

  userEvent.click(screen.queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(screen.queryByText("Profile & Settings")).toBeInTheDocument(); // now it should be visible

  userEvent.click(screen.queryByText(testUser.firstName)); // now I clicked on the card (in this case firstName, but could have been anything else)
  expect(screen.queryByText("Profile & Settings")).not.toBeInTheDocument(); // collapsed again, should be invisible
});

it("should redirect to settings", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };
  render(
    <MemoryRouter>
      <UserCard user={testUser} />
      <Route path={RoutePath.Settings}>Only visible when on /settings</Route>
    </MemoryRouter>
  );
  expect(screen.queryByText("Profile & Settings")).not.toBeInTheDocument(); // not expanded yet, should be invisible
  userEvent.click(screen.queryByText(testUser.firstName));
  userEvent.click(screen.queryByText("Profile & Settings"));
  expect(
    screen.queryByText("Only visible when on /settings")
  ).toBeInTheDocument();
});
