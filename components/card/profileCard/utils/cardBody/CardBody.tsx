/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC, memo } from "react";
import { Card } from "react-native-paper";
import { useHandleSetLogout } from "../hooks/useHandleSetLogout";
import { useHandleSetDeleteAccount } from "../hooks/useHandleSetDeleteAccount";
import { UserActionButton } from "../../../../button/userActionButton/UserActionButton";
import { Icon } from "../../../../../constans/Icon";

export const CardBody: FC = memo(() => {
  const handleSetLogout = useHandleSetLogout();
  const handleDeleteAccount = useHandleSetDeleteAccount();
  return (
    <Card.Actions>
      <UserActionButton
        title={"Logout"}
        icon={Icon.LOGOUT}
        handleAction={handleSetLogout}
      />
      <UserActionButton
        title={"Delete Account"}
        icon={Icon.DELETEACCOUNT}
        handleAction={handleDeleteAccount}
      />
    </Card.Actions>
  );
});
