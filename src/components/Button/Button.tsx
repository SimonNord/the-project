import React, { ReactNode } from "react";
import "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const Button = (props: Props) => {
  return (
    <button
      css={`
        background-color: ${Color.LimedSpruce};
        border-radius: 3px;
        padding: 12px 15px 12px 15px;
        border: 0px;
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
