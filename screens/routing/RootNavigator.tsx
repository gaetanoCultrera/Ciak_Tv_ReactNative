import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useCheckUserData } from "./utils/hooks/useCheckUserData";
import { useCheckFavoriteData } from "./utils/hooks/useCheckFavoriteData";

//controllo di auth qui, li fare solo la reinderizzazione
export const RootNavigator = () => {
  const { username } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );

  const handleCheckUser = useCheckUserData();
  const handleCheckFavorite = useCheckFavoriteData();

  useEffect(() => {
    if (!username) {
      void handleCheckUser();
    }
  }, [handleCheckUser, username]);

  useEffect(() => {
    void handleCheckFavorite();
  }, [handleCheckFavorite]);

  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};
