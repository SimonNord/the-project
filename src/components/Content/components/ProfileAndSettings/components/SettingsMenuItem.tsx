import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Color } from "../../../../../variables";
import { LinkText } from "../../../../Sidebar/components/UserCard/styles";

const ListItem = styled.div`
  background-color: white;
  color: ${Color.Black};
  display: block;
  padding: 15px 20px;
  width: 300px;

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
    <div>
      <ListItem>
        <Link to={props.path}>
          <LinkText>{props.children}</LinkText>
        </Link>
      </ListItem>
    </div>
  );
};

export default SettingsMenuItem;
