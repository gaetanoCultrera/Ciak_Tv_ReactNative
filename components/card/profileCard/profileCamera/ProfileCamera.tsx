import React, { useState, FC, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { IPropsProfileCamera } from "../../../../interfaces/IPropsProfileCamera";

export const ProfileCamera: FC<IPropsProfileCamera> = ({ setShowCamera }) => {
  const [type, setType] = useState(CameraType.back);

  const toggleCameraType = useCallback(() => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowCamera(false)}
          >
            <Text style={styles.text}>Close Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
