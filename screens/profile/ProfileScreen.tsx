import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChangePassword } from "../../components";
import { ProfileCard } from "../../components/card/profileCard/ProfileCard";
import { useRenderIcon } from "../routing/utils/hooks/useRenderIcon";
import { ProfileCamera } from "../../components/card/profileCard/profileCamera/ProfileCamera";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const Tab = createBottomTabNavigator();
export const ProfileScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const { renderIcon, renderImage } = useRenderIcon();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { uriProfileImg } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );

  //TODO quando cambio screen deve chiudersi la fotocamera set(false)
  useEffect(() => {
    if (!isFocused) setShowCamera(false);

    if (showCamera) {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: "flex" },
      });
    }
  }, [isFocused, navigation, showCamera]);
  return (
    <>
      {showCamera ? (
        <ProfileCamera setShowCamera={setShowCamera} />
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="DetailsProfile"
            options={{
              tabBarIcon: () =>
                uriProfileImg
                  ? renderImage(uriProfileImg)
                  : renderIcon("account"),
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
