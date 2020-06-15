import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import NoContentPlaceholder from "./components/NoContentPlaceholder/NoContentPlaceholder";
import ProfileAndSettings from "./components/ProfileAndSettings/ProfileAndSettings";
import { RoutePath } from "variables";

type Props = {
  className?: string;
};

const FullHeightAndWidth = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = (props: Props) => {
  return (
    <FullHeightAndWidth className={props.className}>
      <Switch>
        <Route path={RoutePath.Settings}>
          <ProfileAndSettings />
        </Route>
        <Route path={RoutePath.Home}>
          <NoContentPlaceholder />
        </Route>
      </Switch>
    </FullHeightAndWidth>
  );
};

export default Content;
