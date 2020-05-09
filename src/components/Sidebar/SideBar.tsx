import React from "react";
import "styled-components/macro";
import { Color } from "variables";
import { User } from "types";
import styled from "styled-components/macro";
import UserCard from "./components/UserCard/UserCard";

type Props = {
  className?: string;
  user: User;
};

const Background = styled.div`
  background-color: ${Color.Cinder};
`;

const TopPart = styled.div`
  padding: 13px 10px;
`;

const SideBar = (props: Props) => {
  return (
    <Background className={props.className}>
      <TopPart>
        <UserCard user={props.user} />
      </TopPart>
      <div>Bottom part</div>
    </Background>
  );
};

export default SideBar;
