import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ProfileAndSettings from "./ProfileAndSettings";

it("General Settings should only be visible after clicking the link", () => {
  render(
    <MemoryRouter>
      <ProfileAndSettings />
    </MemoryRouter>
  );
  expect(screen.queryByText("General Settings")).toBeInTheDocument();
  userEvent.click(screen.queryByText("General"));
  expect(screen.getByText("General Settings")).toBeInTheDocument();
});

it("Password Settings should only be visible after clicking the link", () => {
  render(
    <MemoryRouter>
      <ProfileAndSettings />
    </MemoryRouter>
  );
  expect(screen.queryByText("Password Settings")).not.toBeInTheDocument();
  userEvent.click(screen.queryByText("Password"));
  expect(screen.getByText("Password Settings")).toBeInTheDocument();
});

it("Application Settings should only be visible after clicking the link", () => {
  render(
    <MemoryRouter>
      <ProfileAndSettings />
    </MemoryRouter>
  );
  expect(screen.queryByText("Application Settings")).not.toBeInTheDocument();
  userEvent.click(screen.queryByText("App Settings"));
  expect(screen.getByText("Application Settings")).toBeInTheDocument();
});
