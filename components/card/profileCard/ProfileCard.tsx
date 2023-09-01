/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useCallback } from "react";
import { Button, Card, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { AvatarIcon } from "../../index";
import { useHandleSetLogout } from "./utils/hooks/useHandleSetLogout";
import { useHandleSetDeleteAccount } from "./utils/hooks/useHandleSetDeleteAccount";

const ProfileCard = () => {
  const { username, email } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );

  const handleSetLogout = useHandleSetLogout();
  const handleDeleteAccount = useHandleSetDeleteAccount();

  const leftContent = useCallback(
    () => <AvatarIcon nameIcon={"account"} />,
    []
  );

  return (
    <Card style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card.Title
        title={<Text variant="titleLarge">Hello! {username}</Text>}
        subtitle={<Text variant="bodyMedium">{email}</Text>}
        left={leftContent}
      />
      <Card.Actions>
        {/* TODO fare i custom button */}
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
