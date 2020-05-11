import React, { ReactNode } from "react";
import "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
  type?: "primary" | void;
};

const Button = (props: Props) => {
  const backgroundColor =
    props.type === "primary" ? Color.DodgerBlue : Color.LimedSpruce;

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
