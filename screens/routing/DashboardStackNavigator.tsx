import React from "react";
import { Route } from "../../constans/Route";
import { DashboardScreen } from "../dashboard/DashboardScreen";
import { useRenderIcon } from "./utils/hooks/useRenderIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchScreen } from "../search/SearchScreen";
import { FavoriteScreen } from "../favorite/FavoriteScreen";
import { ProfileScreen } from "../profile/ProfileScreen";
import { TheaterScreen } from "../theater/TheaterScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Tab = createBottomTabNavigator();
export const DashboardStackNavigator = () => {
  const { uriProfileImg } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const { renderIcon, renderImage } = useRenderIcon();
  return (
    <Tab.Navigator
      initialRouteName={Route.DASHBOARD}
      screenOptions={{
        tabBarHideOnKeyboard: false,
      }}
    >
      <Tab.Screen
        name={Route.DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: () => renderIcon("view-dashboard"),
        }}
      />
      <Tab.Screen
        name={Route.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: () => renderIcon("card-search"),
        }}
      />
      <Tab.Screen
        name={Route.FAVORITE}
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => renderIcon("cards-heart"),
        }}
      />
      <Tab.Screen
        name={Route.THEATER}
        component={TheaterScreen}
        options={{
          tabBarIcon: () => renderIcon("theater"),
        }}
      />
      <Tab.Screen
        name={Route.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: () =>
            uriProfileImg ? renderImage(uriProfileImg) : renderIcon("account"),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
