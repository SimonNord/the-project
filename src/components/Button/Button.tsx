import React, { ReactNode } from "react";
import "styled-components/macro";
/* import styled from "styled-components/macro"; */
import { Color } from "variables";
/* import { Background } from "components/Sidebar/components/UserCard/styles"; */

type Props = {
  children: ReactNode;
  type?: "primary" | void | undefined;
};

const Button = (props: Props) => {
  let backgroundColor: string = "";

  if (props.type === "primary") {
    backgroundColor = Color.DodgerBlue;
  } else {
    backgroundColor = Color.LimedSpruce;
  }

  return (
    <button
      css={`
        background-color: ${backgroundColor};
        border-radius: 3px;
        padding: 12px 15px 12px 15px;
        border: 0px;
        color: #fff;
        font-size: 15px;
        display: flex;
        align-items: center;
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
