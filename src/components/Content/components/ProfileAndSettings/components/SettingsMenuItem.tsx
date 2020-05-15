import React from "react";
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
  }
`;

type Props = {
  path: string;
  linkText: string;
};

const SettingsMenuItem = (props: Props) => {
  return (
    <div>
      <ListItem>
        <Link to={props.path}>
          <LinkText>{props.linkText}</LinkText>
        </Link>
      </ListItem>
    </div>
  );
};

export default SettingsMenuItem;
