/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useCallback } from "react";
import { Button, Card, Text } from "react-native-paper";
import { Alert, TouchableOpacity } from "react-native";
import { useHandleSetLogout } from "./utils/hooks/useHandleSetLogout";
import { useHandleSetDeleteAccount } from "./utils/hooks/useHandleSetDeleteAccount";
import { CardHeader } from "./utils/cardHeader/CardHeader";
import { Camera } from "expo-camera";
import { ProfileCamera } from "./profileCamera/ProfileCamera";

const ProfileCard = () => {
  const [showCamera, setShowCamera] = useState(false);
  const handleSetLogout = useHandleSetLogout();
  const handleDeleteAccount = useHandleSetDeleteAccount();

  const __startCamera = useCallback(async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    granted ? setShowCamera(true) : Alert.alert("Access denied");
  }, []);

  return (
    <>
      {showCamera ? (
        <ProfileCamera setShowCamera={setShowCamera} />
      ) : (
        <Card
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CardHeader />
          <Card.Actions>
            <Button icon={"account-off"} onPress={handleSetLogout}>
              Logout
            </Button>
            <Button icon={"delete"} onPress={handleDeleteAccount}>
              Delete Account
            </Button>
          </Card.Actions>
          <TouchableOpacity onPress={__startCamera}>
            <Text>Open Camera</Text>
          </TouchableOpacity>
        </Card>
      )}
    </>
  );
};

export default ProfileCard;
