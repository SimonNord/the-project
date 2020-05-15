import React from "react";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import SettingsMenu from "./components/SettingsMenu";
import General from "./components/General";
import AppSettings from "./components/AppSettings";
import Password from "./components/Password";

const ProfileSettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const ProfileAndSettings = () => {
  return (
    <div>
      <ProfileSettingsContainer>
        <SettingsMenu />
        <Switch>
          <Route path="/settings/general">
            <General />
          </Route>
          <Route path="/settings/app-settings">
            <AppSettings />
          </Route>
          <Route path="/settings/password">
            <Password />
          </Route>
        </Switch>
      </ProfileSettingsContainer>
    </div>
  );
};

export default ProfileAndSettings;
