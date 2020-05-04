import React, { useState } from "react";

import { User } from "types";
import { Color } from "../../../../variables";
import { withTheme } from "styled-components";
import { ReactComponent as ChevronDown } from "./assets/chevron-down.svg";
import avatar from "./assets/avatar-image.png";

type Props = {
  user: User;
};

const container = {
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  margin: "0px",
  width: "200px",
};
const divStyles = {
  margin: "0px",
  display: "flex",
  alignItems: "space-between",
  backgroundColor: Color.LimedSpruce,
  padding: "15px",
  width: "200px",
};

const nameStyles = {
  color: Color.White,
  margin: "0px",
  fontSize: "15px",
  lineHeight: "18px",
  fontWeight: 600,
};

const emailStyles = {
  fontSize: "13px",
  lineHeight: "18px",
  fontWeight: 500,
  color: "hsla(0,0%,100%,.5)",
};

const textDiv = {
  margin: "10px",
};

const imageStyles = {
  width: "50px",
  height: "50%",
  borderRadius: "3px",
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
    <div style={container}>
      <div style={divStyles}>
        <img style={imageStyles} src={avatar} alt="" />
        <div style={textDiv}>
          <p style={nameStyles}>{props.user.firstName}!</p>
          <a style={emailStyles} href="">
            {props.user.email}
          </a>
        </div>
        <ChevronDown style={arrowStyles} onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div style={expandedList}>
          <p style={expandedListItem}>Profile & Settings</p>
          <p style={expandedListItem}> Sign Out</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
