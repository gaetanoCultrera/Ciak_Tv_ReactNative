import React, { FC, memo } from "react";
import { Card } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { IPropsProfileCamera } from "../../../../../interfaces/IPropsProfileCamera";
import { TextContent } from "../../../../text/TextContent";
import { Variant } from "../../../../../constans/Variant";
import { ProfileImage } from "../../profileImage/ProfileImage";

export const CardHeader: FC<IPropsProfileCamera> = memo(({ setShowCamera }) => {
  const { username, email } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );

  return (
    <>
      <ProfileImage setShowCamera={setShowCamera} />
      <Card.Title
        title={
          <TextContent
            variant={Variant.TITLE_LARGE}
            title={`Hello ${username}`}
          />
        }
        subtitle={
          <TextContent variant={Variant.BODY_LARGE} title={`${email}`} />
        }
      />
    </>
  );
});
