import { StyleSheet } from "react-native";
export const { containerCardTitle, cardTitle } = StyleSheet.create({
  containerCardTitle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    shadowColor: "black",
    textAlign: "center",
  },
});
