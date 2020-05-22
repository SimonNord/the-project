import React from "react";

import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

// A test user for all the following tests
const testUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
};

// Test for a UserCard
test("should render a Sidebar with a UserCard", () => {
  render(<Sidebar user={testUser} />);
  const firstName = screen.queryByText(testUser.firstName);
  expect(firstName).toBeInTheDocument();
});

// Test for the presence of each menu item
test.each([
  ["Afternoon"],
  ["All Habits"],
  ["Progress"],
  ["Manage Habits"],
  ["Resources"],
])("should render a Sidebar with a link to %s", (menuItem) => {
  render(<Sidebar user={testUser} />);

  const menuItemResult = screen.queryByText(menuItem);
  expect(menuItemResult).toBeInTheDocument();
});

// Test for the presence of the sidebar footer button
test("should render a Sidebar with an Add New button", () => {
  render(<Sidebar user={testUser} />);
  const footerButton = screen.queryByText("Add New...");
  expect(footerButton).toBeInTheDocument();
});
