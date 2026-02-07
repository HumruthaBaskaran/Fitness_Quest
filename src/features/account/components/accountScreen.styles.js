import { StyleSheet, Platform, StatusBar } from "react-native";

export const accountStyle = StyleSheet.create({
  BackgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BackgroundView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonView: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  AuthButton: {
    buttonColor: "#4fa7ff",
    borderRadius: 5,
    padding: 4,
    margin: 8,
  },
  AuthTextInput: {
    height: 50,
    width: 300,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 8,
  },
  ErrorContainer: {
    maxwidth: 300,
    alignitems: "center",
    alignself: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  TitleView: {
    flexDirection: "row",
    position: "absolute",
    top: 150,
  },
  Title: {
    fontFamily: "Air-travelers",
    fontSize: 45,
    color: "#00ffffff",
  },
  Errormessage: {
    color: "red",
    fontWeight: "bold",
  },
  Loading: {
    margintop: 16,
  },
  AnimationWraper: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: 30,
    padding: 4,
  },
});
