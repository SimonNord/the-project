import React from "react";
import { render } from "@testing-library/react";
import SideBar from "./SideBar";

test("renders learn react link", () => {
  const testUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doesNotReject.com"
}

  const { getByText } = render(<SideBar user={testUser} />);
  const linkElement = getByText(testUser.firstName);
  expect(linkElement).toBeInTheDocument();
});
