import React, { useState } from "react";
import "styled-components/macro";
import { User } from "types";
import avatar from "./assets/avatar-image.png";
import ExpandedList, { ExpandedListItem } from "../ExpandedList/ExpandedList";
import { Link } from "react-router-dom";
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
  LinkText,
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
          <ExpandedListItem>
            <Link css={{ textDecoration: "none" }} to={RoutePath.Settings}>
              <LinkText>Profile & Settings</LinkText>
            </Link>
          </ExpandedListItem>
          <ExpandedListItem>
            <Link css={{ textDecoration: "none" }} to={RoutePath.SignOut}>
              <LinkText>Sign Out</LinkText>
            </Link>
          </ExpandedListItem>
        </ExpandedList>
      )}
    </div>
  );
};

export default UserCard;
