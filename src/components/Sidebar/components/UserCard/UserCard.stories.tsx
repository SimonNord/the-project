import React from "react";
import UserCard from "./UserCard";
import "styled-components/macro";

export default {
  title: "UserCard",
};

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
};

export const UserCardStory = () => (
  <div>
    <div css="width: 300px">
      <UserCard user={user} />
    </div>
    <div css="padding-top: 64px;" />
    <div css="width: 400px">
      <UserCard user={user} />
    </div>
    <div css="padding-top: 64px;" />
    <div css="width: 500px">
      <UserCard user={user} />
    </div>
  </div>
);

UserCardStory.story = {
  name: "with user info",
};
