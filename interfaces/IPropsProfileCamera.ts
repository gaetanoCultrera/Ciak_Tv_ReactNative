import { CameraType } from "expo-camera";

export interface IPropsProfileCamera {
  showCamera?: boolean;
  setShowCamera: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPropsTypeCamera {
  setType: React.Dispatch<React.SetStateAction<CameraType>>;
}
