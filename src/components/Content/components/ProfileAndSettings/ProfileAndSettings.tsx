import React from "react";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import SettingsMenu from "./components/SettingsMenu";
import General from "./components/General";
import AppSettings from "./components/AppSettings";
import Password from "./components/Password";
import Spacer from "components/Spacer/Spacer";

const ProfileSettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileAndSettings = () => {
  return (
    <Spacer top={2} right={2} bottom={2} left={2}>
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
    </Spacer>
  );
};

export default ProfileAndSettings;
