import React, { ReactNode } from "react";
import "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
  type?: "primary" | void;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Button = (props: Props) => {
  const backgroundColor =
    props.type === "primary" ? Color.DodgerBlue : Color.LimedSpruce;

  return (
    <button
      onClick={props.onClick}
      css={`
        background-color: ${backgroundColor};
        border-radius: 3px;
        padding: 12px 15px 12px 15px;
        border: 0px;
        color: #fff;
        font-size: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;

        :focus {
          outline-color: #c7dff3;
        }
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
