import React, { useState } from "react";
import "styled-components/macro";
import { User } from "types";
import avatar from "./assets/avatar-image.png";
import ExpandedList, { ExpandedListItem } from "../ExpandedList/ExpandedList";
import { Link } from "react-router-dom";

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
          <ExpandedListItem>
            <Link to="/settings">Profile & Settings</Link>
          </ExpandedListItem>
          <ExpandedListItem>
            <Link to="/">Sign Out</Link>
          </ExpandedListItem>
        </ExpandedList>
      )}
    </div>
  );
};

export default UserCard;
