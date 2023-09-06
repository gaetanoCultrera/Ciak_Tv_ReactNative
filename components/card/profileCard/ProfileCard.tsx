/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useHandleSetLogout } from "./utils/hooks/useHandleSetLogout";
import { useHandleSetDeleteAccount } from "./utils/hooks/useHandleSetDeleteAccount";
import { useLeftContent } from "./utils/useLeftContent";

const ProfileCard = () => {
  const { username, email } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );

  const handleSetLogout = useHandleSetLogout();
  const handleDeleteAccount = useHandleSetDeleteAccount();
  const leftContent = useLeftContent();

  return (
    <Card style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card.Title
        title={<Text variant="titleLarge">Hello! {username}</Text>}
        subtitle={<Text variant="bodyMedium">{email}</Text>}
        left={leftContent}
      />
      <Card.Actions>
        <Button icon={"account-off"} onPress={handleSetLogout}>
          Logout
        </Button>
        <Button icon={"delete"} onPress={handleDeleteAccount}>
          Delete Account
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ProfileCard;
