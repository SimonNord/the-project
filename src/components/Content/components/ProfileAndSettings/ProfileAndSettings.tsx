import React from "react";
import { Switch, Route } from "react-router-dom";
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

const PageTitle = styled.h1`
  font-size: 20px;
  border: 1px solid #e5eafa;
`;

const ProfileAndSettings = () => {
  return (
    <div>
      <PageTitle>
        <Spacer top={1} right={1} bottom={1} left={1}>
          Profile And Settings
        </Spacer>
      </PageTitle>
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
    </div>
  );
};

export default ProfileAndSettings;
