import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { homeStyles } from "../components/home.style";
import { SingleWorkout } from "../components/singleWorkout";
import { WorkoutContext } from "../../../services/workouts/workout.context";

export const Home = ({ navigation }) => {
  const [fullWorkoutList, setFullWorkoutList] = useState({});
  const [keys, setkeys] = useState([]);
  const { masterWorkouts } = useContext(WorkoutContext);

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.nameTag}>
        <View>
          <Text style={homeStyles.trendingText}>Welcome !!! &#129303;</Text>
          <Text style={homeStyles.nameText}>Humrutha Baskaran</Text>
        </View>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={homeStyles.profilePic}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={homeStyles.stateContainer}>
          <View
            style={[homeStyles.no_of_workouts_container, homeStyles.shadowProp]}
          >
            <Text style={homeStyles.stateheadings}>
              &#128170; Workouts Completed{" "}
            </Text>
            <Text style={[homeStyles.stateContent, { marginTop: 30 }]}>
              0 {"\n"} workouts
            </Text>
          </View>
          <View style={homeStyles.stateContainer2}>
            <View style={[homeStyles.calorieBurned, homeStyles.shadowProp]}>
              <Text style={[homeStyles.stateheadings, { fontSize: 14 }]}>
                &#128293; Calories Burned
              </Text>
              <Text
                style={[
                  homeStyles.stateContent,
                  { fontSize: 20, marginTop: 10 },
                ]}
              >
                0 Calories
              </Text>
            </View>
            <View style={[homeStyles.timeSpent, homeStyles.shadowProp]}>
              <Text style={homeStyles.stateheadings}>&#9201; Time Spent</Text>
              <Text
                style={[
                  homeStyles.stateContent,
                  { fontSize: 20, marginTop: 10 },
                ]}
              >
                0 Minutes
              </Text>
            </View>
          </View>
        </View>
        <View style={homeStyles.yourWorkoutContainer}>
          <View style={homeStyles.yourWorkoutContainerTitle}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHuDiQX0ZaGneOrO2cfMsvYFiixYMwLe3iQ&usqp=CAUs",
              }}
              style={homeStyles.yourWorkoutTitleImage}
            />
            <Text style={[homeStyles.stateheadings, { fontSize: 24 }]}>
              Your Workouts
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {masterWorkouts.map((a, i) => {
            return <SingleWorkout key={i} data={a} />;
          })}
        </View>
        <TouchableOpacity
          style={homeStyles.createWorkoutcontainer}
          onPress={() => navigation.navigate("Equipments")}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "200",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
