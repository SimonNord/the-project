import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Color } from "../../../../../variables";
import { LinkText } from "../../../../Sidebar/components/UserCard/styles";

const ListItem = styled.li`
  background-color: ${Color.White};
  color: ${Color.Black};
  display: block;
  padding: 15px 20px;
  width: 300px;
  &:first-child {
    border-radius: 3px 3px 0 0;
  }
  &:last-child {
    border-radius: 0 0 3px 3px;
  }
  &:hover {
    background-color: ${Color.DodgerBlue};
    color: ${Color.White};
  }
`;

type Props = {
  path: string;
  children: ReactNode;
};

const SettingsMenuItem = (props: Props) => {
  return (
    <ListItem>
      <Link to={props.path}>
        <LinkText css="padding: 0;">{props.children}</LinkText>
      </Link>
    </ListItem>
  );
};

export default SettingsMenuItem;
