import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChangePassword } from "../../components";
import ProfileCard from "../../components/card/profileCard/ProfileCard";
import { useRenderIcon } from "../routing/utils/hooks/useRenderIcon";
const Tab = createBottomTabNavigator();
export const ProfileScreen = () => {
  const renderIcon = useRenderIcon();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DetailsProfile"
        component={ProfileCard}
        options={{
          tabBarIcon: () => renderIcon("account"),
          title: "Details Profile",
        }}
      />
      <Tab.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          tabBarIcon: () => renderIcon("keyboard-settings"),
          title: "Change Password",
        }}
      />
    </Tab.Navigator>
  );
};
