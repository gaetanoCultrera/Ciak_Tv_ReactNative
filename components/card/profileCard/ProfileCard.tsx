import React, { FC, memo } from "react";
import { Card } from "react-native-paper";
import { CardBody } from "./utils/cardBody/CardBody";
import { container } from "../style";
import { IPropsProfileCamera } from "../../../interfaces/IPropsProfileCamera";
import { CardHeader } from "./utils/cardHeader/CardHeader";

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
