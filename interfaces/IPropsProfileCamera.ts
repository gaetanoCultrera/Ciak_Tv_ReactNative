import { Camera, CameraType, FlashMode } from "expo-camera";

export interface IPropsProfileCamera {
  setShowCamera: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPropsTypeCamera {
  setType: React.Dispatch<React.SetStateAction<CameraType>>;
}

export interface IPropsTakePicture {
  cameraRef: React.RefObject<Camera>;
  flashMode: FlashMode;
  setFlashMode: React.Dispatch<React.SetStateAction<FlashMode>>;
}
