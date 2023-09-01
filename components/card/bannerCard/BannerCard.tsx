import React, { FC } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import data from "../../../assets/animation/banner.json";
import LottieView from "lottie-react-native";

export const BannerCard: FC = () => {
  return (
    <View style={{ padding: 10 }}>
      <Card style={{ backgroundColor: "black" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LottieView
            source={data}
            autoPlay
            loop={false}
            style={{ width: "100%", height: 150 }}
          />
        </View>
      </Card>
    </View>
  );
};
