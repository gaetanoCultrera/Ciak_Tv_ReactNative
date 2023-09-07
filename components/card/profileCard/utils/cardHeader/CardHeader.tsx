import React, { FC, memo } from "react";
import { Card } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useLeftContent } from "../hooks/useLeftContent";
import { IPropsProfileCamera } from "../../../../../interfaces/IPropsProfileCamera";
import { TextContent } from "../../../../text/TextContent";
import { Variant } from "../../../../../constans/Variant";

export const CardHeader: FC<IPropsProfileCamera> = memo(({ setShowCamera }) => {
  const { username, email } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const leftContent = useLeftContent({ setShowCamera });

  return (
    <Card.Title
      title={
        <TextContent
          variant={Variant.TITLE_LARGE}
          title={`Hello ${username}`}
        />
      }
      subtitle={
        <TextContent variant={Variant.BODY_LARGE} title={`Hello ${email}`} />
      }
      left={leftContent}
    />
  );
});
