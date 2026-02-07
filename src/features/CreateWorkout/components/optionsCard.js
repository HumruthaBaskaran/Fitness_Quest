import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./wortkoutStyles";

export const OptionsCard = ({ image, title, onClick }) => {
  return (
    <TouchableOpacity style={styles.optionsContainer} onPress={onClick}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 20 }}
        style={styles.optionImage}
      >
        <View style={styles.optionoverlay}>
          <Text style={styles.optionText}>
            {" "}
            {title[0].toUpperCase() + title.slice(1)}{" "}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
// function capitalizeFirstLetter(str) {
//   var s = str
//     .split(" ")
//     .map((word) => {
//       if (word != undefined) {
//         word[0].toUpperCase() + word.slice(1);
//       }
//     })
//     .join(" ");
//   console.log("title is " + s);
// }
