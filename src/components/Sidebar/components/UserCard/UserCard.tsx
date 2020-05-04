import React, { useState } from "react";

import { User } from "types";
import { Color } from "../../../../variables";
import { withTheme } from "styled-components";
import { ReactComponent as ChevronDown } from "./assets/chevron-down.svg";
import avatar from "./assets/avatar-image.png";

/* Import styles */
import {
  Container,
  Div,
  Image,
  TextContainer,
  Username,
  Email,
} from "./styles";

type Props = {
  user: User;
};

const arrowStyles = {
  alignSelf: "center",
  marginLeft: "30px",
};

const expandedList = {
  textAlign: "left",
  padding: "15px",
  width: "200px",
};

const expandedListItem = {
  fontSize: "15px",
  lineHeight: "18px",
  fontWeight: 500,
  color: Color.CodGray,
};

const UserCard = (props: Props) => {
  let [show, setShow] = useState(false);

  return (
    <Container>
      <Div>
        <Image src={avatar} alt="" />
        <TextContainer>
          <Username>{props.user.firstName}</Username>
          <Email>{props.user.email}</Email>
        </TextContainer>
        <ChevronDown style={arrowStyles} onClick={() => setShow(!show)} />
      </Div>
      {show && (
        <div style={expandedList}>
          <p style={expandedListItem}>Profile & Settings</p>
          <p style={expandedListItem}> Sign Out</p>
        </div>
      )}
    </Container>
  );
};

export default UserCard;
