import { StyleSheet, Platform, StatusBar } from "react-native";
import { styled } from "styled-components/native";
import { fonts } from "../../../infrastructure/theme/fonts";

export const homeStyles = StyleSheet.create({
  //home component
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  nameTag: {
    height: "20%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    flexWrap: "wrap",
  },
  trendingText: {
    fontFamily: "Air-travelers",
    fontSize: 26,
    marginLeft: 5,
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: "Caprasimo-Regular",
    marginRight: 5,
  },
  nameText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Ananda-Black",
  },
  profilePic: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginTop: 15,
    marginRight: 10,
  },
  stateContainer: {
    height: 250,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    // backgroundColor: "green",
  },
  no_of_workouts_container: {
    height: "93%",
    width: "45%",
    borderRadius: 10,
    backgroundColor: "#4998e8",
  },
  stateContainer2: {
    height: "100%",
    width: "55%",
    // backgroundColor: "yellow",
  },
  calorieBurned: {
    height: "40%",
    borderRadius: 10,
    backgroundColor: "#4998e8",
    marginLeft: 8,
    marginTop: 10,
  },
  timeSpent: {
    height: "46%",
    borderRadius: 10,
    backgroundColor: "#4998e8",
    marginLeft: 8,
    marginTop: 15,
  },
  stateheadings: {
    fontFamily: "Caprasimo-Regular",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  stateContent: {
    fontSize: 24,
    fontWeight: "300",
    // fontStyle: "italic",
    textAlign: "center",
  },
  shadowProp: {
    elevation: 25,
    shadowColor: "#000000",
  },
  yourWorkoutContainer: {
    marginVertical: 20,
    borderRadius: 10,
  },
  yourWorkoutContainerTitle: {
    flexDirection: "row",
  },
  yourWorkoutTitleImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 5,
    resizeMode: "center",
    borderWidth: 2,
    borderColor: "#0a71d8",
  },
  createWorkoutcontainer: {
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 10,
  },
});
