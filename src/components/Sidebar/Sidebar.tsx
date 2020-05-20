import React from "react";

import "styled-components/macro";
import styled from "styled-components/macro";

import { Color } from "variables";

import Spacer from "../Spacer/Spacer";
import UserCard from "./components/UserCard/UserCard";
import { User } from "types";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import Button from "components/Button/Button";
import { ReactComponent as plus } from "components/Sidebar/assets/plus.svg";

type Props = {
  className?: string;
  user: User;
};

const SidebarWrapper = styled.div`
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

const Sidebar = ({ className, user }: Props) => {
  return (
    <SidebarWrapper className={className}>
      <Spacer top={2} />
      <UserCard user={user} />
      <Spacer top={2} />
      <SidebarItem children={"Afternoon"} />
      <SidebarItem children={"All Habits"} />
      <SidebarItem children={"Progress"} />
      <SidebarItem children={"Manage Habits"} />
      <SidebarItem children={"Resources"} />
      <SidebarFooter>
        <Button>
          <Plus />
          <span css={{ color: Color.White }}>Add New...</span>
        </Button>
      </SidebarFooter>
    </SidebarWrapper>
  );
};

export default Sidebar;
