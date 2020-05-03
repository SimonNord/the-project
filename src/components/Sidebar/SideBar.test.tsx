import React from "react";
import { render } from "@testing-library/react";
import SideBar from "./SideBar";

test("renders learn react link", () => {
  const { getByText } = render(<SideBar />);
  const linkElement = getByText("This will be the sidebar");
  expect(linkElement).toBeInTheDocument();
});
