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
      <Background>
        <BackgroundLeft>
          <Image src={avatar} alt="" />
          <TextContainer>
            <Username>{props.user.firstName}</Username>
            <Email>{props.user.email}</Email>
          </TextContainer>
        </BackgroundLeft>
        <ArrowDown onClick={() => setShow(!show)} />
      </Background>
      {show && (
        <ExpandedList>
          <ExpandedListItem> Profile & Settings </ExpandedListItem>
          <ExpandedListItem> Sign Out </ExpandedListItem>
        </ExpandedList>
      )}
    </div>
  );
};

export default UserCard;
