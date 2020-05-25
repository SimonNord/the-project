import React from "react";

import "styled-components/macro";
import styled from "styled-components/macro";

import { Color } from "variables";

import Spacer from "../Spacer/Spacer";
import UserCard from "./components/UserCard/UserCard";
import { User } from "types";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/components/MenuItem";
import Button from "components/Button/Button";
import { ReactComponent as plus } from "components/Sidebar/assets/plus.svg";

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
  return (
    <Container className={props.className}>
      <Spacer top={2} />
      <UserCard user={props.user} />
      <Spacer top={2} />
      <Menu>
        <MenuItem>
          <a href="/">Afternoon</a>
        </MenuItem>
        <MenuItem>
          <a href="/">All Habits</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Progress</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Manage Habits</a>
        </MenuItem>
        <MenuItem>
          <a href="/">Resources</a>
        </MenuItem>
      </Menu>
      <SidebarFooter>
        <Button>
          <Plus />
          <span css={{ color: Color.White }}>Add New...</span>
        </Button>
      </SidebarFooter>
    </Container>
  );
};

export default Sidebar;
