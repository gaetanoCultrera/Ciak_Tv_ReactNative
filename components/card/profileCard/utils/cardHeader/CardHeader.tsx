import React, { FC, memo } from "react";
import { Card, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useLeftContent } from "../hooks/useLeftContent";

export const CardHeader: FC = memo(() => {
  const { username, email } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const leftContent = useLeftContent();

  return (
    <Card.Title
      title={<Text variant="titleLarge">Hello! {username}</Text>}
      subtitle={<Text variant="bodyMedium">{email}</Text>}
      left={leftContent}
    />
  );
});
