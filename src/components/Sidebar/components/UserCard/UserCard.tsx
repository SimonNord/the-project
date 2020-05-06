import React, { useState } from "react";
import styled from "styled-components/macro";

import { User } from "types";

import avatar from "./assets/avatar-image.png";

/* Import styles */
import {
  FlexRowContainer,
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
      <FlexRowContainer>
        <Image src={avatar} alt="" />
        <TextContainer>
          <Username>{props.user.firstName}</Username>
          <Email>{props.user.email}</Email>
        </TextContainer>
        <ArrowDown onClick={() => setShow(!show)} />
      </FlexRowContainer>
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
