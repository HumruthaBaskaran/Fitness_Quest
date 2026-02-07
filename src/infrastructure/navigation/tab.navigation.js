import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SettingsScreen } from "../../features/Settings/screens/settings.screen";
import { Home } from "../../features/Home/screens/home.screen";

const Tabs = createBottomTabNavigator();

// const Settings = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings</Text>
//     </View>
//   );
// };
const TabNavigator = () => {
  const TABS = {
    Home: "ios-home",
    Settings: "ios-settings",
  };
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = TABS[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0a71d8",
        tabBarInactiveTintColor: "#797777",
      })}
      initialRouteName="Home"
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
