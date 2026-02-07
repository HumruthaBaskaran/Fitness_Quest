import React from "react";
import { Card } from "react-native-paper";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { mockStepWiseInstructions } from "../../../mockDatabase/mock.data";

export const CategoryDisplayView = ({ onPress }) => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {array.map((val) => {
        return <CategoryRecipeCard key={val} onPress={onPress} />;
      })}
    </ScrollView>
  );
};

export const CategoryRecipeCard = ({ recipe = {}, onPress }) => {
  const {
    image = "https://popmenucloud.com/nfholvza/02c42ec6-4338-4a02-9a91-0b6e33b0a571.jpg",
    title = "This is My Recipe",
    readyInMinutes = "45 mins",
    servings = "2",
    ingredients = [
      {
        ingImage: require("../../../../assets/ingredientsSample.jpg"),
        ingName: "First ingredient",
        original: "1 cup of 1st ingredient",
      },
    ],
    summary = "My Summery",
    stepWiseInstructions = mockStepWiseInstructions,
  } = recipe;

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <Image
        source={require("../../../../assets/Plate.jpg")}
        style={styles.platImage}
      />
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.viewTitle}>
        <Text style={styles.text}>{title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    // height: 180,
    width: 120,
    borderRadius: 60,
    marginLeft: 20,
    // marginTop: 10,
    alignItems: "center",
  },
  platImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: "hidden",
    // margin: 8,
  },
  imageView: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    position: "absolute",
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: "hidden",
    position: "absolute",
    top: 20,
  },
  viewTitle: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
  text: {
    fontSize: 20,
    marginRight: 5,
    textAlign: "center",
    fontFamily: "Born-land",
  },
});
