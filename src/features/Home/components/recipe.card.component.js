import React from "react";
import { Card } from "react-native-paper";
import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "./home.style";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { mockStepWiseInstructions } from "../../../mockDatabase/mock.data";

export const RecipeCard = ({ recipe = {}, onPress }) => {
  const {
    image = "https://popmenucloud.com/nfholvza/02c42ec6-4338-4a02-9a91-0b6e33b0a571.jpg",
    title = "This is My Recipe that I Like The Most",
    readyInMinutes,
    servings = "2",
    ingredients = [
      {
        id: 1,
        ingImage: require("../../../../assets/ingredientsSample.jpg"),
        ingName: "First ingredient",
        original: "1 cup of 1st ingredient",
      },
    ],
    summary = "My Summery",
    stepWiseInstructions = mockStepWiseInstructions,
  } = recipe;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={homeStyles.card}>
        <Card.Cover source={{ uri: image }} style={homeStyles.cardCover} />
        <Card.Content style={homeStyles.cardContent}>
          <View style={homeStyles.titleView}>
            <Text style={homeStyles.title}>{title} </Text>
          </View>
          <View style={homeStyles.detailsView}>
            <View style={homeStyles.readyTimeView}>
              <Ionicons name="timer" size={24} color="#000000" />
              <Text style={homeStyles.detailsText}>
                {readyInMinutes} Minutes
              </Text>
            </View>
            <View style={homeStyles.readyTimeView}>
              <MaterialIcons name="food-bank" size={24} color="#000000" />
              <Text style={homeStyles.detailsText}>Plates: {servings}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
