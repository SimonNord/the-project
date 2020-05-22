import React from "react";

import "styled-components/macro";
import styled from "styled-components/macro";

import { Color } from "variables";

import UserCard from "./components/UserCard/UserCard";
import { User } from "types";
import Button from "components/Button/Button";
import { ReactComponent as plus } from "components/Sidebar/assets/plus.svg";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/components/MenuItem";
import Spacer from "../Spacer/Spacer";

type Props = {
  className?: string;
  user: User;
};

const Background = styled.div`
  background-color: ${Color.Cinder};
  display: flex;
  flex-flow: column nowrap;
`;

const BottomPart = styled.div`
  margin: auto auto 15px 10px;
`;

const Plus = styled(plus)`
  fill: ${Color.White};
  margin-right: 5px;
`;

const TopPart = styled.div`
  padding: 13px 0px;
`;

const Sidebar = (props: Props) => {
  return (
    <Background className={props.className}>
      <TopPart>
        <UserCard user={props.user} />
        <Spacer top={2} />
        <Menu>
          <MenuItem>
            <a href="/">Morning</a>
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
      </TopPart>
      <BottomPart>
        <Button>
          <Plus />
          <span css={{ color: Color.White }}>Add New...</span>
        </Button>
      </BottomPart>
    </Background>
  );
};

export default Sidebar;
