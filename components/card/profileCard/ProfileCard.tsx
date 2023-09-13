import React, { FC, memo } from "react";
import { Card } from "react-native-paper";
import { CardBody } from "./utils/cardBody/CardBody";
import { container } from "../style";
import { IPropsProfileCamera } from "../../../interfaces/IPropsProfileCamera";
import { CardHeader } from "./utils/cardHeader/CardHeader";

<<<<<<< HEAD
export const ProfileCard: FC<IPropsProfileCamera> = memo(
  ({ setShowCamera }) => {
    return (
      <Card style={container}>
        <CardHeader setShowCamera={setShowCamera} />
        <CardBody />
      </Card>
    );
  }
);
=======
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
>>>>>>> origin/feat/biometric-auth
