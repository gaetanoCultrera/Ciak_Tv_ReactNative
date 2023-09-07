import React, { useState, memo } from "react";
import { Card } from "react-native-paper";
import { CardHeader } from "./utils/cardHeader/CardHeader";
import { ProfileCamera } from "./utils/profileCamera/ProfileCamera";
import { CardBody } from "./utils/cardBody/CardBody";
import { container } from "../style";

const ProfileCard = memo(() => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      {showCamera ? (
        <ProfileCamera setShowCamera={setShowCamera} />
      ) : (
        <Card style={container}>
          <CardHeader setShowCamera={setShowCamera} />
          <CardBody />
        </Card>
      )}
    </>
  );
});

export default ProfileCard;
