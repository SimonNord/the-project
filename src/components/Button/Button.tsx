import React, { ReactNode } from "react";
import "styled-components/macro";
import styled from "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
  type?: "primary" | void | undefined;
};

const Button = (props: Props) => {
  let color: string = "";

  if (props.type === "primary") {
    color = Color.DodgerBlue;
  } else {
    color = "#fff";
  }

  return (
    <button
      css={`
        background-color: ${Color.LimedSpruce};
        border-radius: 3px;
        padding: 12px 15px 12px 15px;
        border: 0px;
        color: ${color};
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
