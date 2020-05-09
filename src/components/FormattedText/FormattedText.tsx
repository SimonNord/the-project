import React, { ReactNode } from "react";
import { Color } from "variables";
import styled from "styled-components/macro";

type Props = {
  children: ReactNode;
  color: Color;
};

const StyledFormattedText = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

const FormattedText = (props: Props) => {
  return (
    <StyledFormattedText color={props.color}>
      {props.children}
    </StyledFormattedText>
  );
};

FormattedText.defaultProps = {
  color: Color.Black,
};

export default FormattedText;
