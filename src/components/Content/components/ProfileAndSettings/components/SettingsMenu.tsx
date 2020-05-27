import React from "react";
import { MenuListItem } from "components/Menu/components/MenuItem";
import { Link } from "react-router-dom";
import { LinkText } from "components/Sidebar/components/UserCard/styles";
/* import { Color } from "variables"; */
import styled from "styled-components/macro";
import Menu from "components/Menu/Menu";

const SettingsMenuWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;
  border: 1px solid #e5eafa;
  border-right: none;
  border-radius: 3px 0 0 3px;
`;

const SettingsListItem = styled(MenuListItem)`
  margin-bottom: 0;
  & a {
    display: block;
  }
`;

const SettingsMenu = () => {
  return (
    <SettingsMenuWrapper>
      <Menu>
        <SettingsListItem>
          {/* AnchorLink */}{" "}
          <Link to="/settings/general" /* linkColor="${Color.Black}" */>
            <LinkText>General</LinkText>
            {/* /AnchorLink */}
          </Link>
        </SettingsListItem>
        <SettingsListItem>
          {/* AnchorLink */}
          <Link to="/settings/app-settings" /* linkColor="${Color.Black}" */>
            <LinkText>App Settings</LinkText>
            {/* AnchorLink */}
          </Link>
        </SettingsListItem>
        <SettingsListItem>
          {/* AnchorLink */}{" "}
          <Link to="/settings/password" /* linkColor="${Color.Black}" */>
            <LinkText>Password</LinkText>
            {/* AnchorLink */}{" "}
          </Link>
        </SettingsListItem>
      </Menu>
    </SettingsMenuWrapper>
  );
};

export default SettingsMenu;
