import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { WorkoutContext } from "../../../services/workouts/workout.context";

export const CreateWorkoutScreen = ({ navigation, route }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [restTime, setRestTime] = useState(30);
  const { data, metaData } = route.params;
  const { addWorkout } = useContext(WorkoutContext);

  const capitalize = (word) => {
    word = word.trim();
    return word[0].toUpperCase() + word.slice(1);
  };

  const DetailsView = ({ name, value }) => {
    if (name == "Bodyparts targeted") {
      return (
        <View style={ScreenStyles.diaplayView}>
          <Text style={ScreenStyles.displayText}>{name}: </Text>
          {value.map((a, index) => {
            if (index == value.length - 1) {
              return <Text key={index}>{capitalize(a)}. </Text>;
            }
            return <Text key={index}>{capitalize(a)}, </Text>;
          })}
        </View>
      );
    } else if (name == "Total calorie burned") {
      return (
        <View style={ScreenStyles.diaplayView}>
          <Text style={ScreenStyles.displayText}>{name}: </Text>
          <Text>&#128293;{value}</Text>
        </View>
      );
    }

    return (
      <View style={ScreenStyles.diaplayView}>
        <Text style={ScreenStyles.displayText}>{name}: </Text>
        <Text>{capitalize(value)}</Text>
      </View>
    );
  };
  return (
    <View style={ScreenStyles.container}>
      <KeyboardAvoidingView
        style={ScreenStyles.KeyboardAvoidingView}
        behavior={Platform.OS == "ios" ? "position" : "padding"}
        keyboardVerticalOffset={0}
      >
        <TextInput
          label={"Enter Workout name"}
          value={workoutName}
          onChangeText={(text) => setWorkoutName(text)}
          style={ScreenStyles.textInput}
        />
        <View style={{ width: "100%" }}>
          <Text
            style={{ fontFamily: "Air-travelers", fontSize: 40, marginTop: 10 }}
          >
            Rest Time :
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            width: "90%",
            height: 80,
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setRestTime(restTime + 5);
            }}
          >
            <Entypo name="circle-with-plus" size={36} color="black" />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#ffffff",
              width: "50%",
              height: "90%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              elevation: 20,
            }}
          >
            <Text style={{ fontSize: 22 }}>{restTime} sec</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setRestTime(restTime - 5);
            }}
          >
            <Entypo name="circle-with-minus" size={36} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }} />
        <DetailsView name={"Equipment used"} value={metaData["equipment"]} />
        <DetailsView name={"Workout type"} value={metaData["Workout Type"]} />
        <DetailsView
          name={"Bodyparts targeted"}
          value={metaData["Body parts"]}
        />
        <DetailsView
          name={"Total calorie burned"}
          value={metaData["total_calorie_burned"]}
        />
        <DetailsView
          name={"Total Time spent"}
          value={"(Approx) " + Math.round(metaData["time"] / 60) + " minutes"}
        />
        <View style={{ marginTop: 80 }} />
        <View style={ScreenStyles.createView}>
          <TouchableOpacity
            style={ScreenStyles.createButton}
            onPress={() => {
              metaData["Workout name"] = workoutName;
              metaData["Rest Time"] = restTime;
              addWorkout({ data, metaData });

              navigation.dispatch(StackActions.popToTop());
            }}
          >
            <Text>Create Workout</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  KeyboardAvoidingView: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  textInput: {
    width: "95%",
  },
  diaplayView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  displayText: {
    fontFamily: "Caprasimo-Regular",
    fontSize: 18,
    marginVertical: 10,
  },
  createButton: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: "#2ba2d5",
    justifyContent: "center",
    alignItems: "center",
  },
  createView: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
