import React from "react";
// import { View, Text } from "react-native";
import { accountStyle } from "../components/accountScreen.styles";
import { ImageBackground, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
// import LottieView from "lottie-react-native";

export const AccountsScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={accountStyle.BackgroundImage}
      source={require("../../../../assets/home_bg4.jpg")}
    >
      <View style={accountStyle.BackgroundView}>
        {/* <AnimationWraper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
          />
        </AnimationWraper> */}
        <View style={accountStyle.TitleView}>
          <Text style={accountStyle.Title}>Kitchen Magic </Text>
        </View>
        <View style={accountStyle.ButtonView}>
          <Button
            icon={"lock-open-outline"}
            mode="contained"
            buttonColor="#4fa7ff"
            onPress={() => navigation.navigate("Login")}
            style={accountStyle.AuthButton}
          >
            Login
          </Button>
          <Button
            icon={"lock-open-outline"}
            buttonColor="#4fa7ff"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
            style={accountStyle.AuthButton}
          >
            Create an Account
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};
