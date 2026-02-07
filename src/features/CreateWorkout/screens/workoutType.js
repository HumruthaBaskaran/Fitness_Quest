import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../components/wortkoutStyles";
import { OptionsCard } from "../components/optionsCard";
import {
  full_exercise_data,
  workoutType,
} from "../../../DataBase/exerciseData";

export const WorkoutType = ({ navigation, route }) => {
  const { data, metaData } = route.params;
  const keys = Object.keys(data);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("BodyParts")}>
        <Text>Navigate to next</Text>
      </TouchableOpacity> */}
      <Text
        style={{
          fontFamily: "Air-travelers",
          fontSize: 36,
          textAlign: "center",
          color: "#0a71d8",
        }}
      >
        Select the type of workout
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollContainer}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {workoutType.map((a, index) => {
          var handelClick;
          if (a.name == "strength ") {
            if (!keys.includes(a.name)) {
              return null;
            }
            handelClick = () => {
              metaData["Workout Type"] = "Strength";
              navigation.navigate("BodyParts", {
                newData: data[a.name],
                metaData: metaData,
              });
            };
          } else if (a.name == "cardio ") {
            if (!keys.includes(a.name)) {
              return null;
            }
            handelClick = () => {
              metaData["Workout Type"] = "Cardio";
              navigation.navigate("WorkoutList", {
                data: [data[a.name]],
                metaData: metaData,
              });
            };
          }
          return (
            <OptionsCard
              image={a.uri[0]}
              title={a.name}
              key={index}
              onClick={handelClick}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
