import React, { ReactNode } from "react";
import "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const Button = (props: Props) => {
  return (
    <div
      css={`
        background-color: ${Color.White};
      `}
    >
      content: {props.children}
    </div>
  );
};

export default Button;
