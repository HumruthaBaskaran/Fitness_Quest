import { createStackNavigator } from "@react-navigation/stack";
import { WorkoutType } from "../../features/CreateWorkout/screens/workoutType";
import { BodyPart } from "../../features/CreateWorkout/screens/bodyPart";
import { EquipmentsScreen } from "../../features/CreateWorkout/screens/equipments";
import WorkoutList from "../../features/CreateWorkout/screens/workoutList";
import { FullView } from "../../features/CreateWorkout/screens/workoutFullView";
import TabNavigator from "./tab.navigation";
import { CreateWorkoutScreen } from "../../features/CreateWorkout/screens/createWorkout";

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Root"
    >
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="Equipments" component={EquipmentsScreen} />
      <Stack.Screen name="WorkoutType" component={WorkoutType} />
      <Stack.Screen name="BodyParts" component={BodyPart} />
      <Stack.Screen name="WorkoutList" component={WorkoutList} />
      <Stack.Screen name="FinalScreen" component={CreateWorkoutScreen} />
      <Stack.Screen name="FullView" component={FullView} />
    </Stack.Navigator>
  );
}
