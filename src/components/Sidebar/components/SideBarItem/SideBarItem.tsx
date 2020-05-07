import React, { ReactNode } from "react";
import styled from "styled-components/macro";

type Props = {
  children: ReactNode;
};

const StyledSideBoardItem = styled.div`
  background-color: #24292e;
  color: white;
  display: table-cell;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  height: 25px;
  width: 200px;
  padding: 11px 15px;
  vertical-align: middle;

  &:hover {
    background-color: #0366d6;
  }
`;

const SideBarItem = (props: Props) => {
  return (
    <div>
      props.children: {props.children}
      <StyledSideBoardItem>Progress</StyledSideBoardItem>
      <StyledSideBoardItem>Progress</StyledSideBoardItem>
      <StyledSideBoardItem>Progress</StyledSideBoardItem>
    </div>
  );
};

export default SideBarItem;
