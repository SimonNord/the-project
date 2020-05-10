import React, { ReactNode } from "react";
import { Color, fontWeights } from "variables";
import "styled-components/macro";

type Props = {
  children: ReactNode;
  color: Color;
  weight: "regular" | "medium" | "bold";
};

const FormattedText = (props: Props) => {
  return (
    <span
      css={`
        font-size: 15px;
        fontweight: ${fontWeights[props.weight]};
        color: ${props.color};
      `}
    >
      {props.children}
    </span>
  );
};

FormattedText.defaultProps = {
  color: Color.Black,
  weight: "medium",
};

export default FormattedText;
