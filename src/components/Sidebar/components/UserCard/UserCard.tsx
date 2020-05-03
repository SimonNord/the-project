import React from "react";
import { User } from "types";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  return <div>{props.user.firstName}</div>;
};

export default UserCard;
