import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../components/wortkoutStyles";
import { OptionsCard } from "../components/optionsCard";
import {
  equipments,
  full_exercise_data,
} from "../../../DataBase/newExerciseData";

export const EquipmentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("WorkoutType")}>
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
        Select the equipment you want to use
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
        {equipments.map((a, index) => {
          const n = a.name;
          // console.log(n);
          return (
            <OptionsCard
              image={a.uri}
              title={a.name}
              key={index}
              onClick={() => {
                // console.log(n);
                // console.log(full_exercise_data[n]);
                navigation.navigate("WorkoutType", {
                  data: full_exercise_data[n],
                  metaData: { equipment: a.name },
                });
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
