import React, { useState, useContext } from "react";
import { accountStyle } from "../components/accountScreen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ImageBackground, View, Text } from "react-native";
import { ActivityIndicator, TextInput, Button } from "react-native-paper";
// import { colors } from "../../../infrastructure/theme/colors";

export const LoginScreen = ({ navigation }) => {
  const { isAuthenticated, onLogin, error, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      style={accountStyle.BackgroundImage}
      source={require("../../../../assets/home_bg4.jpg")}
    >
      <View style={accountStyle.BackgroundView}>
        <View style={accountStyle.ButtonView}>
          <TextInput
            label={"E-mail"}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            style={accountStyle.AuthTextInput}
          />
          <TextInput
            label={"Password"}
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            style={accountStyle.AuthTextInput}
          />
          {/* {console.log(password)}
          {console.log(error)} */}
          {error && (
            <View style={accountStyle.ErrorContainer}>
              <Text style={accountStyle.Errormessage}>{error}</Text>
            </View>
          )}
          {!isLoading ? (
            <Button
              icon={"lock-open-outline"}
              mode="contained"
              buttonColor="#4fa7ff"
              style={accountStyle.AuthButton}
              onPress={() => {
                onLogin(email, password);
                if (isAuthenticated) {
                  navigation.navigate("Home");
                }
              }}
            >
              Login
            </Button>
          ) : (
            <ActivityIndicator
              style={accountStyle.Loading}
              animating={true}
              color="#4fa7ff"
            />
          )}
        </View>
        <Button
          icon={"step-backward"}
          mode="contained"
          buttonColor="#4fa7ff"
          style={accountStyle.AuthButton}
          onPress={() => {
            navigation.navigate("Account");
          }}
        >
          Back
        </Button>
      </View>
    </ImageBackground>
  );
};
