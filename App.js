import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// import "./myfirebase";
// import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import AppNavigation from "./src/infrastructure/navigation/tab.navigation.js";
import { NavigationContainer } from "@react-navigation/native";
import { EquipmentsScreen } from "./src/features/CreateWorkout/screens/equipments";
import { WorkoutType } from "./src/features/CreateWorkout/screens/workoutType.js";
import { BodyPart } from "./src/features/CreateWorkout/screens/bodyPart.js";
import { WorkoutList } from "./src/features/CreateWorkout/screens/workoutList.js";
import { FullView } from "./src/features/CreateWorkout/screens/workoutFullView.js";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigation.js";
import { WorkoutContextProvider } from "./src/services/workouts/workout.context.js";
import { CreateWorkoutScreen } from "./src/features/CreateWorkout/screens/createWorkout.js";
import { SingleWorkout } from "./src/features/Home/components/singleWorkout.js";
// import { Test } from "./test.js";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Caprasimo-Regular": require("./assets/Caprasimo-Regular.ttf"),
    "Katerlin-51": require("./assets/Katerlin-51zjB.ttf"),
    "Air-travelers": require("./assets/AirtravelerspersonaluseBdit-gxgyE.otf"),
    "Ananda-Black": require("./assets/AnandaBlackPersonalUseRegular-rg9Rx.ttf"),
    "Born-land": require("./assets/BornlanddemoScript-x3zOr.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // return <SingleWorkout />;
  return (
    // <AuthenticationContextProvider>
    <WorkoutContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WorkoutContextProvider>
    // </AuthenticationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
