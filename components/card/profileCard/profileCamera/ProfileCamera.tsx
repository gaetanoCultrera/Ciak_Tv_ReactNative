/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, FC, memo, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { IPropsProfileCamera } from "../../../../interfaces/IPropsProfileCamera";
import { useHandleCameraType } from "./utils/hooks/useHandleCameraType";
import { button, buttonContainer, camera, container } from "./style";
import { useHandleTakePicture } from "./utils/hooks/useHandleTakePicture";
import { AvatarIcon } from "../../../icon/AvatarIcon";
import { Icon } from "../../../../constans/Icon";

export const ProfileCamera: FC<IPropsProfileCamera> = memo(
  ({ setShowCamera }) => {
    const [type, setType] = useState(CameraType.back);
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const cameraRef = useRef<Camera>(null);

    //TODO da implementare la preview photo, tasto rifai foto e quando esco dallo screen con la gesture del cellulare settare a false camera
    //TODO implementare tasto per inserire immagine dall'immagine
    const handleCameraType = useHandleCameraType({ setType });
    const { handleTakePicture, handleFlashMode } = useHandleTakePicture({
      cameraRef,
      flashMode,
      setFlashMode,
    });

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
            <TouchableOpacity style={button} onPress={handleTakePicture}>
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
