import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const StyledExpandedList = styled.div`
  position: absolute;
  margin: 3px 0;
  padding: 4px 0;
  border-radius: 3px;
  background-color: white;
  text-align: left;

  a {
    display: block;
    padding: 11px 15px;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    color: ${Color.CodGray};
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }

  a:hover {
    color: white;
    background-color: ${Color.DodgerBlue};
  }
`;

const ExpandedList = ({ children }: Props) => {
  return <StyledExpandedList>{children}</StyledExpandedList>;
};

export default ExpandedList;
