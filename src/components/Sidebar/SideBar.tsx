import React from "react";
import "styled-components/macro";
import { Color } from "variables";
import { User } from "types";
import styled from "styled-components/macro";
import Button from "components/Button/Button";
import UserCard from "./components/UserCard/UserCard";

type Props = {
  className?: string;
  user: User;
};

const Background = styled.div`
  background-color: ${Color.Cinder};
`;

const SideBar = (props: Props) => {
  return (
    <Background className={props.className}>
      <UserCard user={props.user} />
      <div>Bottom part</div>
    </Background>
  );
};

export default SideBar;
