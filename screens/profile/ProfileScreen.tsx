import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChangePassword } from "../../components";
import { ProfileCard } from "../../components/card/profileCard/ProfileCard";
import { useRenderIcon } from "../routing/utils/hooks/useRenderIcon";
import { ProfileCamera } from "../../components/card/profileCard/profileCamera/ProfileCamera";
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
export const ProfileScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const renderIcon = useRenderIcon();
  const navigation = useNavigation();

  useEffect(() => {
    if (showCamera) {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: "flex" },
      });
    }
  }, [navigation, showCamera]);
  return (
    <>
      {showCamera ? (
        <ProfileCamera setShowCamera={setShowCamera} />
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="DetailsProfile"
            options={{
              tabBarIcon: () => renderIcon("account"),
              title: "Details Profile",
            }}
          >
            {() => <ProfileCard setShowCamera={setShowCamera} />}
          </Tab.Screen>
          <Tab.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              tabBarIcon: () => renderIcon("keyboard-settings"),
              title: "Change Password",
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};
