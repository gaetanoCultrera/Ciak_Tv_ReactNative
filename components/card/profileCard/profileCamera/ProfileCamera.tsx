import React, { useState, FC, memo, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { IPropsProfileCamera } from "../../../../interfaces/IPropsProfileCamera";
import { useHandleCameraType } from "./utils/hooks/useHandleCameraType";
import { button, buttonContainer, camera, container } from "./style";
import { useHandleTakePicture } from "./utils/hooks/useHandleTakePicture";
import { AvatarIcon } from "../../../icon/AvatarIcon";
import { Icon } from "../../../../constans/Icon";
import { useHandleHardwareBackPressAndroid } from "./utils/hooks/useHandleHardwareBackPressAndroid";
export const ProfileCamera: FC<IPropsProfileCamera> = memo(
  ({ setShowCamera }) => {
    const [type, setType] = useState(CameraType.back);
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const cameraRef = useRef<Camera>(null);

    const handleCameraType = useHandleCameraType({ setType });
    const { handleTakePicture, handleFlashMode } = useHandleTakePicture({
      cameraRef,
      flashMode,
      setFlashMode,
    });

    useHandleHardwareBackPressAndroid(setShowCamera);

    return (
      <View style={container}>
        <Camera
          style={camera}
          type={type}
          flashMode={flashMode}
          ref={cameraRef}
        >
          <View style={buttonContainer}>
            <TouchableOpacity style={button} onPress={handleCameraType}>
              <AvatarIcon nameIcon={"camera-party-mode"} size={60} />
            </TouchableOpacity>
            <TouchableOpacity
              style={button}
              onPress={() => void handleTakePicture()}
            >
              <AvatarIcon nameIcon={"camera-iris"} size={60} />
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={handleFlashMode}>
              <AvatarIcon
                nameIcon={
                  flashMode === FlashMode.on ? Icon.FLASH : Icon.FLASHOFF
                }
                size={60}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={button}
              onPress={() => setShowCamera(false)}
            >
              <AvatarIcon nameIcon={"alpha-x-circle"} size={60} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
);
