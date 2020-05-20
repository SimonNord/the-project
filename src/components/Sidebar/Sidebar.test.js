import React from "react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "./SideBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("Should expand when being clicked", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };
  render(
    <MemoryRouter>
      <SideBar user={testUser}></SideBar>
    </MemoryRouter>
  );
  expect(
    screen.queryByRole("menuitem", { name: "Add Area" })
  ).not.toBeInTheDocument(); // not expanded yet, should be invisible
  userEvent.click(screen.queryByText("Add New...")); //Clicked on 'Add New...' button
  expect(
    screen.queryByRole("menuitem", { name: "Add Area" })
  ).toBeInTheDocument(); // now it should be visible
});

it("Should collapse when clicked again", () => {
  const testUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };
  render(
    <MemoryRouter>
      <SideBar user={testUser}></SideBar>
    </MemoryRouter>
  );
  expect(
    screen.queryByRole("menuitem", { name: "Add Area" })
  ).not.toBeInTheDocument(); // not expanded yet, should be invisible
  userEvent.click(screen.queryByText("Add New...")); //Clicked on 'Add New...' button
  expect(
    screen.queryByRole("menuitem", { name: "Add Area" })
  ).toBeInTheDocument(); // now it should be visible
  userEvent.click(screen.queryByText("Add New...")); //Clicked on 'Add New...' button again
  expect(
    screen.queryByRole("menuitem", { name: "Add Area" })
  ).not.toBeInTheDocument(); //now it should not be visible agian
});
