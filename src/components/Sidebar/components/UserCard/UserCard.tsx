import React, { useState } from "react";
import "styled-components/macro";
import { User } from "types";
import avatar from "./assets/avatar-image.png";
import AnchorLink from "../../../AnchorLink/AnchorLink";
import LinkText from "../../../AnchorLink/components/LinkText";
import ExpandedList, { ExpandedListItem } from "../ExpandedList/ExpandedList";
import { RoutePath } from "variables";

/* Import styles */
import {
  Background,
  LeftContent,
  Image,
  TextContainer,
  Username,
  Email,
  ArrowDown,
} from "./styles";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  let [show, setShow] = useState(false);

  return (
    <div css={{ position: "relative" }}>
      <Background onClick={() => setShow(!show)}>
        <LeftContent>
          <Image src={avatar} alt="" />
          <TextContainer>
            <Username>{props.user.firstName}</Username>
            <Email title={props.user.email}>{props.user.email}</Email>
          </TextContainer>
        </LeftContent>
        <ArrowDown />
      </Background>
      {show && (
        <ExpandedList>
          <AnchorLink to={RoutePath.Settings}>
            <LinkText>Profile & Settings</LinkText>
          </AnchorLink>
        </ExpandedList>
      )}
    </div>
  );
};

export default UserCard;
