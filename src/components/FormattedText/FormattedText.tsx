import React, { ReactNode } from "react";
import { Color, fontWeights, fontSizes } from "variables";
import "styled-components/macro";

type Props = {
  children: ReactNode;
  color: Color;
  weight: "regular" | "medium" | "bold";
  size: "1" | "2";
};

const FormattedText = (props: Props) => {
  return (
    <span
      css={`
        font-size: ${fontSizes[props.size]};
        font-weight: ${fontWeights[props.weight]};
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
  size: "1",
};

export default FormattedText;
