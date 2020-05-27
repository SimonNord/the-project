import React from "react";
import MenuItem from "components/Menu/components/MenuItem";
import AnchorLink from "components/AnchorLink/AnchorLink";
import LinkText from "components/AnchorLink/components/LinkText";
import { MenuListItem } from "components/Menu/components/MenuItem";
import styled from "styled-components/macro";
import { Color, RoutePath } from "variables";
import Menu from "components/Menu/Menu";

const SettingsMenuWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;
  border: 1px solid #e5eafa;
  border-right: none;
  border-radius: 5px 0 0 5px;
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
        <MenuItem>
          <AnchorLink to={RoutePath.SettingsGeneral} linkColor={Color.Black}>
            <LinkText>General</LinkText>
          </AnchorLink>
        </MenuItem>
        <MenuItem>
          <AnchorLink
            to={RoutePath.SettingsAppSettings}
            linkColor={Color.Black}
          >
            <LinkText>App Settings</LinkText>
          </AnchorLink>
        </MenuItem>
        <MenuItem>
          <AnchorLink to={RoutePath.SettingsPassword} linkColor={Color.Black}>
            <LinkText>Password</LinkText>
          </AnchorLink>
        </MenuItem>
      </Menu>
    </SettingsMenuWrapper>
  );
};

export default SettingsMenu;
