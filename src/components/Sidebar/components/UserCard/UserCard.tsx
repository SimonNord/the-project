import React, { useState } from "react";
import styled from "styled-components/macro";

import { User } from "types";

import avatar from "./assets/avatar-image.png";

/* Import styles */
import {
  Flex_row_container,
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
      <Flex_row_container>
        <Image src={avatar} alt="" />
        <TextContainer>
          <Username>{props.user.firstName}</Username>
          <Email>{props.user.email}</Email>
        </TextContainer>
        <ArrowDown onClick={() => setShow(!show)} />
      </Flex_row_container>
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
