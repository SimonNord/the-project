import React from "react";
import UserCard from "./UserCard";

export default {
  title: "UserCard",
};

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
};

export const UserCardStory = () => <UserCard user={user} />;

UserCardStory.story = {
  name: "with user info",
};
