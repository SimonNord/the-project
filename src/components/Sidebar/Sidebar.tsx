import React, { useState } from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import styled from "styled-components/macro";

import { Color, RoutePath } from "variables";

import Spacer from "../Spacer/Spacer";
import UserCard from "./components/UserCard/UserCard";
import { User } from "types";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/components/MenuItem";
import AnchorLink from "../AnchorLink/AnchorLink";
import LinkText from "../AnchorLink/components/LinkText";
import Button from "components/Button/Button";
import { ReactComponent as plus } from "components/Sidebar/assets/plus.svg";
import ExpandedList, {
  ExpandedListItem,
} from "./components/ExpandedList/ExpandedList";

type Props = {
  className?: string;
  user: User;
};

const Container = styled.div`
  background-color: ${Color.Cinder};
`;

const SidebarFooter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 8px;
`;

const Plus = styled(plus)`
  fill: ${Color.White};
  margin-right: 5px;
`;

const Sidebar = (props: Props) => {
  let [show, setShow] = useState(false);

  return (
    <Container className={props.className}>
      <Spacer top={2} />
      <UserCard user={props.user} />
      <Spacer top={2} />
      <Menu>
        <MenuItem>
          <AnchorLink to={RoutePath.Home} linkColor={Color.White}>
            <LinkText>Afternoon</LinkText>
          </AnchorLink>
        </MenuItem>
        <MenuItem>
          <AnchorLink to={RoutePath.Home} linkColor={Color.White}>
            <LinkText>All Habits</LinkText>
          </AnchorLink>
        </MenuItem>
        <MenuItem>
          <AnchorLink to={RoutePath.Home} linkColor={Color.White}>
            <LinkText>Progress</LinkText>
          </AnchorLink>
        </MenuItem>
        <MenuItem>
          <AnchorLink to={RoutePath.Home} linkColor={Color.White}>
            <LinkText>Manage Habits</LinkText>
          </AnchorLink>
        </MenuItem>
        <MenuItem>
          <AnchorLink to={RoutePath.Home} linkColor={Color.White}>
            <LinkText>Resources</LinkText>
          </AnchorLink>
        </MenuItem>
      </Menu>

      <SidebarFooter>
        <Button onClick={() => setShow(!show)}>
          <Plus />
          <span css={{ color: Color.White }}>Add New...</span>
        </Button>
        {show && (
          <div
            css={{
              position: "relative",
              width: "160%",
              left: "-9px",
            }}
          >
            <ExpandedList direction={true}>
              <ExpandedListItem>
                <AnchorLink to={RoutePath.Home}>
                  <LinkText>Add Area</LinkText>
                </AnchorLink>
              </ExpandedListItem>
              <ExpandedListItem>
                <AnchorLink to={RoutePath.Home}>
                  <LinkText>New Habits</LinkText>
                </AnchorLink>
              </ExpandedListItem>
            </ExpandedList>
          </div>
        )}
      </SidebarFooter>
    </Container>
  );
};

export default Sidebar;
