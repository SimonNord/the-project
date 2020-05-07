import React, { ReactNode } from "react";
import { Color } from "variables";

type Props = {
  children: ReactNode;
  color: Color;
};

const FormattedText = (props: Props) => {
  return <span>{props.children}</span>;
};

FormattedText.defaultProps = {
  color: Color.Black,
};

export default FormattedText;
