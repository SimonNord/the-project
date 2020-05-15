import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const StyledExpandedList = styled.div`
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

export const ExpandedListItem = styled.span`
  display: block;
  font-size: 15px;
  padding: 11px 15px;
  font-weight: 500;
  color: ${Color.CodGray};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: ${Color.DodgerBlue};
  }
`;

const ExpandedList = ({ children }: Props) => {
  return <StyledExpandedList>{children}</StyledExpandedList>;
};

export default ExpandedList;
