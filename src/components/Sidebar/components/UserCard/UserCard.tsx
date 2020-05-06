import React, { useState } from "react";

import { User } from "types";
import avatar from "./assets/avatar-image.png";

/* Import styles */
import {
  Background,
  BackgroundLeft,
  Image,
  TextContainer,
  Username,
  Email,
  ExpandedList,
  ExpandedListItem,
  ArrowDown,
} from "./styles";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  let [show, setShow] = useState(false);

  return (
    <div>
      <Background onClick={() => setShow(!show)}>
        <BackgroundLeft>
          <Image src={avatar} alt="" />
          <TextContainer>
            <Username>{props.user.firstName}</Username>
            <Email>{props.user.email}</Email>
          </TextContainer>
        </BackgroundLeft>
        <ArrowDown />
      </Background>
      {show && (
        <ExpandedList>
          <ExpandedListItem href="#">Profile & Settings</ExpandedListItem>
          <ExpandedListItem href="#">Sign Out</ExpandedListItem>
        </ExpandedList>
      )}
    </div>
  );
};

export default UserCard;
