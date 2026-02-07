import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import {
  mockStepWiseInstructions,
  stepWiseInstructions,
} from "../../../mockDatabase/mock.data";
import { instructionStyle } from "../components/instructions.style";

export const StepWiseInstructions = ({ route }) => {
  const { recipes = {} } = route.params;
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
  } = recipes;
  return (
    <View style={instructionStyle.container}>
      <ImageBackground
        source={require("../../../../assets/home_bg3.jpg")}
        style={instructionStyle.bgImage}
      >
        {/* <ImageBackground source={{ uri: image }} style={instructionStyle.bgImage}> */}
        <View style={instructionStyle.blurView} />
        <ScrollView>
          <View style={instructionStyle.viewTitle}>
            <Text style={instructionStyle.textTitle}>{title} </Text>
          </View>
          <View style={instructionStyle.viewTitle2}>
            <Text style={instructionStyle.textTitle2}>
              This Recipe can be made in {stepWiseInstructions.steps.length}{" "}
              Steps{" "}
            </Text>
          </View>
          <View style={instructionStyle.viewSteps}>
            {stepWiseInstructions.steps.map((step, index) => {
              return (
                <View key={index} style={instructionStyle.viewSingleStep}>
                  <Text style={instructionStyle.textStepsNumber}>
                    {" "}
                    Step {step.number}:{" "}
                  </Text>
                  <Text style={instructionStyle.textStepsDescription}>
                    {step.step}{" "}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
