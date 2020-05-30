import { ReactNode } from "react";
import { Color } from "variables";
import styled from "styled-components/macro";

export type Props = {
  children: ReactNode;
  className?: string;
  color?: Color;
  weight?: "regular" | "medium" | "bold";
  size?: "-2" | "-1" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
};

const FormattedText = styled.span<Props>`
  font-size: ${(props) => fontSizes[props.size!]};
  font-weight: ${(props) => fontWeights[props.weight!]};
  color: ${(props) => props.color};
`;

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
