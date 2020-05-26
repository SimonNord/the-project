import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
  direction?: boolean;
};

const StyledExpandedList = styled.div.attrs({
  role: "menu",
})`
  position: absolute;
  left: 0;
  right: 0;
  margin: 3px 10px;
  padding: 4px 0;
  border-radius: 3px;
  background-color: ${Color.White};
  text-align: left;
  z-index: 999;
`;

const StyledExpandedListUp = styled(StyledExpandedList)`
  bottom: 43px;
`;

export const ExpandedListItem = styled.span.attrs({
  role: "menuitem",
})`
  display: block;
  font-size: 15px;
  font-weight: 500;
`;

const ExpandedList = ({ children, direction }: Props) => {
  if (direction) {
    return <StyledExpandedListUp>{children}</StyledExpandedListUp>;
  } else {
    return <StyledExpandedList>{children}</StyledExpandedList>;
  }
};

export default ExpandedList;
