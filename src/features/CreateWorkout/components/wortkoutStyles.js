import { StyleSheet, StatusBar, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flex: 1,
    // backgroundColor: "green",
    width: "100%",
  },
  optionsContainer: {
    width: "90%",
    height: 180,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    elevation: 20,
    shadowColor: "#000000",
    marginVertical: 10,
    // backgroundColor: "green",
  },
  optionText: {
    fontFamily: "Caprasimo-Regular",
    fontSize: 34,
    textAlign: "center",
  },
  optionImage: {
    flex: 1,
    borderRadius: 20,
  },
  optionoverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
});
