import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./HomeStackNavigator";

//controllo di auth qui, li fare solo la reinderizzazione
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
