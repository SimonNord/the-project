import React from "react";
import styled from "styled-components/macro";
import NoContentPlaceholder from "./components/NoContentPlaceholder/NoContentPlaceholder";
import ProfileAndSettings from "./components/ProfileAndSettings";
import { Switch, Route } from "react-router-dom";
import { Routes } from "variables";

type Props = {
  className?: string;
};

const FullHeightAndWidth = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Content = (props: Props) => {
  return (
    <FullHeightAndWidth className={props.className}>
      <Switch>
        <Route path={Routes.Settings}>
          <ProfileAndSettings />
        </Route>
        <Route path={Routes.Home}>
          <NoContentPlaceholder />
        </Route>
      </Switch>
    </FullHeightAndWidth>
  );
};

export default Content;
