import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { workoutType } from "../../../DataBase/exerciseData";
import { Entypo } from "@expo/vector-icons";
import { WorkoutContext } from "../../../services/workouts/workout.context";

export const SingleWorkout = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const { removeWorkout } = useContext(WorkoutContext);
  // let data = {
  //   data: [[Object], [Object]],
  //   metaData: {
  //     "Body parts": ["waist", "legs"],
  //     "Workout Type": "Cardio",
  //     "Workout name": "Second",
  //     equipment: "body weight",
  //     no_of_exercises: 2,
  //     time: 60,
  //     total_calorie_burned: 5,
  //   },
  // };

  // console.log(data);

  let imageUri;
  data["metaData"]["Workout Type"] == "Strength"
    ? (imageUri =
        "https://img.freepik.com/free-photo/young-caucasian-woman-doing-exercise-with-dumbbells-while-training-arms-gym_158595-2278.jpg?w=2000")
    : (imageUri =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3T9ov5U9kmaBnDrPhb3xBj6dQmLWeCAObbBGD7Kd0f9eOF1Myvsd2vgsAl7BNTalvQjM&usqp=CAU");

  return (
    // <Text>Hi</Text>
    <View style={styles.container}>
      <TouchableOpacity style={styles.options} onPress={() => setVisible(true)}>
        <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
      {visible && (
        <View style={styles.deleteView}>
          <TouchableOpacity
            onPress={() => removeWorkout(data["metaData"]["Workout name"])}
          >
            <Text>Delete Workout</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => {
          if (visible) {
            setVisible(false);
          }
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "30%",
              marginLeft: 10,
              marginRight: 5,
            }}
          >
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.title}>
              {data["metaData"]["Workout name"]}{" "}
            </Text>
            <View>
              <View style={styles.detailsView}>
                <Text>
                  &#9201; {Math.round(data["metaData"]["time"] / 60)} Min |{" "}
                </Text>
                <Text>
                  &#128293; {data["metaData"]["total_calorie_burned"]} kcal{" "}
                </Text>
              </View>
              <Text>{capitalize(data["metaData"]["equipment"])} </Text>
              <View style={styles.detailsView}>
                {data["metaData"]["Body parts"].map((part, index) => {
                  if (index == data["metaData"]["Body parts"].length - 1) {
                    return <Text key={index}>{capitalize(part)}. </Text>;
                  }
                  return <Text key={index}>{capitalize(part)}, </Text>;
                })}
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Training </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const capitalize = (word) => {
  word = word.trim();
  return word[0].toUpperCase() + word.slice(1);
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderRadius: 20,
    // justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    elevation: 20,
    backgroundColor: "#ffffff",
    marginVertical: 20,
  },
  title: {
    fontFamily: "Caprasimo-Regular",
    fontSize: 24,
    textAlign: "center",
    marginRight: 15,
    width: "100%",
  },
  detailsView: {
    flexDirection: "row",
    marginVertical: 1,
    flexWrap: "wrap",
  },
  image: {
    height: 100,
    width: "100%",
    borderRadius: 20,
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2ba2d5",
    marginVertical: 15,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontFamily: "Air-travelers",
  },
  textView: {
    width: "60%",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  options: {
    position: "absolute",
    right: 5,
    top: 15,
    zIndex: 999,
  },
  deleteView: {
    backgroundColor: "#a8a8a8",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 9999,
  },
});
