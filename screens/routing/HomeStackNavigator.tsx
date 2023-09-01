import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { DetailsScreen } from "../details/DetailsScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Route } from "../../constans/Route";
import { AuthScreen } from "../auth/AuthScreen";

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  const { isLogged } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  // screenOptions={{headerRight:}}
  return (
    <Stack.Navigator>
      {isLogged ? (
        <>
          <Stack.Screen
            name={Route.HOME}
            component={DashboardStackNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={Route.DETAILS} component={DetailsScreen} />
        </>
      ) : (
        <Stack.Screen name={Route.AUTH} component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};
