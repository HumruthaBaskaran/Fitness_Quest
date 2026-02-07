import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from "react-native";
import { MealsType } from "../../../services/tendingRecipe/ListOfMealTypes";
import { TrendingContext } from "../../../services/tendingRecipe/trendingRecipes.context";
import { CategoryRecipeCard } from "./recipeByCategory.component";
import { mockStepWiseInstructions } from "../../../mockDatabase/mock.data";

export const CategoryCard = ({ onCardPress }) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const [focusName, setFocusName] = useState("main course");
  const [RecipeArray, setRecipeArray] = useState([]);
  const { recipeByMeal, setMealType } = useContext(TrendingContext);
  // const something = getRecipesByTags("side dish");
  // console.log(something);

  x = useMemo(() => {
    setMealType(focusName);
  }, [focusName]);
  const handelPress = (TVkey, mealtype) => {
    setFocusIndex(TVkey);
    setFocusName(mealtype);
    // const ListOfRecipes = getRecipesByTags(mealtype);
    // setRecipeArray(ListOfRecipes);
  };
  const array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <View>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {MealsType.map((mealtype, index) => {
          const words = mealtype.split(" ");
          for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            if (i != words.length - 1) {
              words[i] = words[i] + " ";
            }
          }
          return (
            <TouchableOpacity
              style={[
                styles.container,
                {
                  backgroundColor: index === focusIndex ? "#4fa7ff" : "#ffffff",
                },
              ]}
              onPress={() => handelPress(index, mealtype)}
              key={index}
            >
              <Text
                style={[
                  styles.text,
                  { color: index === focusIndex ? "white" : "black" },
                ]}
              >
                {words}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView horizontal={true}>
        {recipeByMeal
          ? recipeByMeal.map((val) => {
              return (
                <CategoryRecipeCard
                  key={val}
                  recipe={val}
                  onPress={onCardPress}
                />
              );
            })
          : array.map((val) => {
              return (
                <CategoryRecipeCard
                  key={val}
                  recipe={val}
                  onPress={onCardPress}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 15,
  },
  text: {
    fontSize: 14,
    fontFamily: "Ananda-Black",
  },
  scrollView: {
    marginTop: 10,
  },
});

const list = [
  {
    id: 634486,
    image: "https://spoonacular.com/recipeImages/634486-556x370.jpg",
    ingredientsArray: [
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
    stepWiseInstructions: mockStepWiseInstructions,
    readyInMinutes: 45,
    servings: 8,
    sourceName: "Foodista",
    summary: {
      html: 'BBQ Beef Brisket is a Jewish main course. For <b>$3.07 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. Watching your figure? This gluten free and dairy free recipe has <b>514 calories</b>, <b>48g of protein</b>, and <b>21g of fat</b> per serving. 19 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of onion powder, smokey barbecue sauce, oil, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for <b>Hanukkah</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 69%</b>, which is pretty good. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/bbq-beef-brisket-128731">BBQ Beef Brisket</a>, <a href="https://spoonacular.com/recipes/bbq-beef-brisket-597496">BBQ Beef Brisket</a>, and <a href="https://spoonacular.com/recipes/bbq-beef-brisket-1371705">BBQ Beef Brisket</a>',
    },
    title: "BBQ Beef Brisket",
  },
];
