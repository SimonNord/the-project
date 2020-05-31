import React from "react";
import AnchorLink from "components/AnchorLink/AnchorLink";
import { MenuListItem } from "components/Menu/components/MenuItem";
import LinkText from "components/AnchorLink/components/LinkText";
import styled from "styled-components/macro";
import { Color, RoutePath } from "variables";
import Menu from "components/Menu/Menu";

const StyledSettingsMenu = styled(Menu)`
  width: 300px;
  flex-shrink: 0;
  border: 1px solid #e5eafa;
  border-right: none;
  border-radius: 5px 0 0 5px;
`;

const MenuListItemP0 = styled(MenuListItem)`
  margin-bottom: 0;
`;

const SettingsMenu = () => {
  return (
    <StyledSettingsMenu>
      <Menu>
        <MenuListItemP0>
          <AnchorLink to={RoutePath.SettingsGeneral} linkColor={Color.Black}>
            <LinkText>General</LinkText>
          </AnchorLink>
        </MenuListItemP0>
        <MenuListItemP0>
          <AnchorLink
            to={RoutePath.SettingsAppSettings}
            linkColor={Color.Black}
          >
            <LinkText>App Settings</LinkText>
          </AnchorLink>
        </MenuListItemP0>
        <MenuListItemP0>
          <AnchorLink to={RoutePath.SettingsPassword} linkColor={Color.Black}>
            <LinkText>Password</LinkText>
          </AnchorLink>
        </MenuListItemP0>
      </Menu>
    </StyledSettingsMenu>
  );
};

export default SettingsMenu;
