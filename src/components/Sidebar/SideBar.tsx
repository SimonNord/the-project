import React from "react";

import "styled-components/macro";
import styled from "styled-components/macro";

import { Color } from "variables";

import UserCard from "./components/UserCard/UserCard";
import { User } from "types";
import SectionHeadline from "./components/SectionHeadline/SectionHeadline";
import Button from "components/Button/Button";
import { ReactComponent as plus } from "components/Sidebar/assets/plus.svg";

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
  padding: 13px 10px;
`;

const SideBar = (props: Props) => {
  return (
    <Background className={props.className}>
      <TopPart>
        <UserCard user={props.user} />
        <SectionHeadline>More</SectionHeadline>
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

export default SideBar;
