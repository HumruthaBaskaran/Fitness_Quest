import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { detailStyles } from "../components/details.styles";
import RenderHtml from "react-native-render-html";

export const DetailsScreen = ({ route, navigation }) => {
  const { recipes } = route.params;
  const { width } = useWindowDimensions();

  const {
    id,
    image = "https://popmenucloud.com/nfholvza/02c42ec6-4338-4a02-9a91-0b6e33b0a571.jpg",
    title = "This is My Recipe that I Like The Most",
    readyInMinutes = "45",
    servings = "2",
    ingredientsArray = [
      {
        id: 1,
        ingImage:
          "https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=600",
        ingName: "First ingredient",
        original: "1 cup of 1st ingredient",
      },
      {
        id: 2,
        ingImage:
          "https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=600",
        ingName: "2 ingredient",
        original: "x",
      },
      {
        id: 3,
        ingImage:
          "https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=600",
        ingName: "3 ingredient",
        original: "y",
      },
    ],
    summary = {
      html: "This is My Summery. I love this recipe that I am going to make using this app",
    },
    sourceName = "Full Belly Sisters",
  } = recipes;

  const array = [1, 2, 3, 4, 5];
  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.viewTitle}>
        <Text style={detailStyles.title}>{title} </Text>
      </View>
      <View>
        <Image source={{ uri: image }} style={detailStyles.image} />
      </View>
      <Text style={detailStyles.textReadyInMin}>
        Time for preparation: {readyInMinutes} Minutes
      </Text>
      <Text style={detailStyles.textReadyInMin}>Source Name: {sourceName}</Text>
      <ScrollView>
        <View style={detailStyles.viewIngredients}>
          <View style={detailStyles.viewIngredientsHeader}>
            <Text style={detailStyles.textIngredients}>Ingredients </Text>
            <Text style={detailStyles.noOfItemsText}>
              {ingredientsArray.length} Items
            </Text>
          </View>
          <View>
            {ingredientsArray.map((ingredient, index) => {
              return (
                <View style={detailStyles.ingredientCard} key={index}>
                  <Image
                    source={{ uri: ingredient.ingImage }}
                    style={detailStyles.ingredientCardImage}
                  />
                  <View style={detailStyles.ingredientCardTextView}>
                    <Text style={detailStyles.ingredientCardText}>
                      {ingredient.original}{" "}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={detailStyles.viewSummary}>
          <Text style={detailStyles.textSummary}>Summary </Text>
          <RenderHtml source={summary} contentWidth={width} />
        </View>
        <TouchableOpacity
          style={detailStyles.viewTouchableOpacity}
          onPress={() =>
            navigation.navigate("Instructions", { recipes: recipes })
          }
        >
          <Text style={detailStyles.textTouchableOpacity}>
            See step by step instructions
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
