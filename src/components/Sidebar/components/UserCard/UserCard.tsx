import React, { useState } from "react";

import { User } from "types";
import { Color } from "../../../../variables";
import { withTheme } from "styled-components";
import styled from "styled-components/macro";
import { ReactComponent as ChevronDown } from "./assets/chevron-down.svg";
import avatar from "./assets/avatar-image.png";

type Props = {
  user: User;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0px;
  width: 200px;
`;
const Div = styled.div`
  margin: 0px;
  display: flex;
  align-items: space-between;
  background-color: ${Color.LimedSpruce};
  padding: 15px;
  width: 200px;
`;

const Username = styled.p`
  color: ${Color.White};
  margin: 0px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
`;

const Email = styled.a`
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.5);
`;

const TextContainer = styled.div`
  margin: "10px";
`;

const Image = styled.img`
  width: 50px;
  height: 50%;
  border-radius: 3px;
`;

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
