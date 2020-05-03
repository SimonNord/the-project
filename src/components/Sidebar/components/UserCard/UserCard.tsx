import React, { useState } from "react";

import { User } from "types";
import { Color } from "../../../../variables";

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
  justifySelf: "flex-end",
};

const expandedList = {
  backgroundColor: "white",
  textAlign: "center",
};
const expandedListText = {
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
        <img style={imageStyles} src="avatar-image.png" alt="avatar Image" />
        <div style={textDiv}>
          <p style={nameStyles}>{props.user.firstName}!</p>
          <a style={emailStyles} href="#">
            {props.user.email}
          </a>
        </div>
        <img
          onClick={() => setShow((show = !show))}
          style={arrowStyles}
          src="./chevron-down.svg"
          alt=""
        />
      </div>
      {show ? (
        <div style={expandedList}>
          <p style={expandedListText}>Profile & Settings</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
{
  /* <expandedList show={show}/> */
}

export default UserCard;
