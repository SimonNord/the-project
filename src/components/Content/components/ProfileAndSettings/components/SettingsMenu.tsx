import React from "react";
import styled from "styled-components/macro";
import SettingsMenuItem from "./SettingsMenuItem";

const Menu = styled.div`
  max-width: 300px;
  border: 1px solid #e5eafa;
  border-right: 0;
  border-radius: 3px;
`;

const SettingsMenu = () => {
  return (
    <Menu>
      <SettingsMenuItem path="/settings/general">General</SettingsMenuItem>
      <SettingsMenuItem path="/settings/app-settings">
        App Settings
      </SettingsMenuItem>
      <SettingsMenuItem path="/settings/password">Password</SettingsMenuItem>
    </Menu>
  );
};

export default SettingsMenu;
