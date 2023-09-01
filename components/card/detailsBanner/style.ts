import { StyleSheet } from "react-native";
export const {
  containerDetailsCard,
  borderContent,
  imageCard,
  otherItemStyle,
} = StyleSheet.create({
  containerDetailsCard: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  borderContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 16,
    margin: 0,
  },
  imageCard: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth: 3,
    resizeMode: "cover",
  },
  otherItemStyle: {
    color: "red",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    shadowColor: "black",
    textAlign: "center",
  },
});
