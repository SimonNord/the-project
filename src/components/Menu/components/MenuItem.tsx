import React, { ReactNode } from "react";
import "styled-components/macro";
import styled from "styled-components/macro";

type Props = {
  children: ReactNode;
};

export const MenuListItem = styled.li`
  list-style-type: none;
  margin-bottom: 8px;
`;

const MenuItem = ({ children }: Props) => {
  return <MenuListItem>{children}</MenuListItem>;
};

export default MenuItem;
