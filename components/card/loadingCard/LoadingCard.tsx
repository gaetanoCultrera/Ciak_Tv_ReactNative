import React from "react";
import { Card } from "react-native-paper";
import { SpinnerLoading } from "../../spinner/SpinnerLoading";
import { View } from "react-native";
import { cardDimension } from "./style";

export const LoadingCard = () => {
  return (
    <View style={{ padding: 10 }}>
      <Card style={cardDimension}>
        <Card.Content>
          <SpinnerLoading color={"red"} />
        </Card.Content>
      </Card>
    </View>
  );
};
