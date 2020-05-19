import React from "react";
import Menu from "./Menu";
import MenuItem from "./components/MenuItem";
import Spacer from "../Spacer/Spacer";
import "styled-components/macro";

export default {
  title: "Menu",
};

export const MenuStory = () => (
  <div>
    <Menu>
      <MenuItem>
        <a href="/">Menu Link 1</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Menu Link 2</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Menu Link 3</a>
      </MenuItem>
    </Menu>
    <Spacer top={4} />
    <Menu>
      <MenuItem>
        <a href="/">Menu Link with Icon 1</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Menu Link with Icon 2</a>
      </MenuItem>
      <MenuItem>
        <a href="/">Menu Link with Icon 3</a>
      </MenuItem>
    </Menu>
  </div>
);

MenuStory.story = {
  name: "default",
};
