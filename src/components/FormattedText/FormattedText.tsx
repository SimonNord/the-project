import React, { ReactNode } from "react";
import { Color } from "variables";
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
  size: "0",
};

const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700,
};

const fontSizes = {
  "-2": "12px",
  "-1": "14px",
  "0": "16px",
  "1": "18px",
  "2": "20px",
  "3": "24px",
  "4": "30px",
  "5": "36px",
  "6": "48px",
  "7": "60px",
  "8": "72px",
};

export default FormattedText;
