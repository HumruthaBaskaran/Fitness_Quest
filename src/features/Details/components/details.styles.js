import { Platform, StatusBar, StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // backgroundColor: "#4fa7ff",
    marginHorizontal: 10,
  },
  viewTitle: {
    width: "100%",
    // backgroundColor: "green",
  },
  title: {
    fontFamily: "Air-travelers",
    fontSize: 30,
    lineHeight: 30,
    marginTop: 20,
    marginRight: 17,
    textAlign: "center",
  },
  image: {
    height: 200,
    width: 320,
    borderRadius: 20,
  },
  textReadyInMin: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: "Caprasimo-Regular",
  },
  viewIngredients: {
    marginTop: 10,
  },
  viewIngredientsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
  },
  textIngredients: {
    fontFamily: "Air-travelers",
    fontSize: 30,
  },
  noOfItemsText: {
    color: "#8e8c8c",
  },
  ingredientCard: {
    width: 335,
    height: 85,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "#cdcbcb",
    backgroundColor: "#4fa7ff",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 10,
    marginRight: 50,
  },
  ingredientCardImage: {
    height: 55,
    width: 55,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  ingredientCardTextView: {
    width: 260,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  ingredientCardText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  viewSummary: {
    width: 320,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textSummary: {
    // fontFamily: "Ananda-Black",
    fontFamily: "Air-travelers",
    fontSize: 30,
    marginBottom: 10,
  },
  viewTouchableOpacity: {
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  textTouchableOpacity: {
    color: "#0d7ff1",
    textDecorationLine: "underline",
    marginRight: 40,
  },
});
