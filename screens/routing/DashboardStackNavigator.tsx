import React from "react";
import { Route } from "../../constans/Route";
import { DashboardScreen } from "../dashboard/DashboardScreen";
import { useRenderIcon } from "./utils/hooks/useRenderIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchScreen } from "../search/SearchScreen";
import { FavoriteScreen } from "../favorite/FavoriteScreen";
import { ProfileScreen } from "../profile/ProfileScreen";

const Tab = createBottomTabNavigator();
export const DashboardStackNavigator = () => {
  const renderIcon = useRenderIcon();
  return (
    <Tab.Navigator initialRouteName={Route.DASHBOARD}>
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
        name={Route.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => renderIcon("account-settings"),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
