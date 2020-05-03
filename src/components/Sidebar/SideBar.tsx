import React from "react";
import "styled-components/macro";
import { Color } from "variables";
import { User } from "types";
import UserCard from "./components/UserCard/UserCard";

type Props = {
  className?: string;
  user: User;
};

const SideBar = (props: Props) => {
  return (
    <div
      className={props.className}
      css={`
        background-color: ${Color.Cinder};
      `}
    >
      <UserCard user={props.user} />
    </div>
  );
};

export default SideBar;
