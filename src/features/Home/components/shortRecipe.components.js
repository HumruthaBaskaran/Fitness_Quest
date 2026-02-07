import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { CategoryDisplayView } from "./recipeByCategory.component";

export const ShortRecipes = () => {
  return <CategoryDisplayView />;
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 20,
    backgroundColor: "yellow",
  },
});
