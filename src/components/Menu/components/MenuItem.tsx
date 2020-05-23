import React, { ReactNode } from "react";
import "styled-components/macro";
import styled from "styled-components/macro";
import { Color } from "variables";

type Props = {
  children: ReactNode;
};

const MenuListItem = styled.li`
  list-style-type: none;
  margin-bottom: 8px;

  a {
    display: flex;
    padding: 11px 15px;
    vertical-align: center;
    color: ${Color.White};
    font-size: 15px;
    text-decoration: none;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
  a:hover {
    color: ${Color.White};
    background-color: ${Color.DodgerBlue};
  }
`;

const MenuItem = ({ children }: Props) => {
  return <MenuListItem>{children}</MenuListItem>;
};

export default MenuItem;
