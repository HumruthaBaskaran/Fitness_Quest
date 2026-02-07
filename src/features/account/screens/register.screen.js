import React, { useState, useContext } from "react";
import { accountStyle } from "../components/accountScreen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ImageBackground, View, Text } from "react-native";
import { ActivityIndicator, TextInput, Button } from "react-native-paper";
// import { colors } from "../../../infrastructure/theme/colors";

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
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
          <TextInput
            label={"Re-Enter Password"}
            value={repassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setRePassword(text)}
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
              icon={"email"}
              buttonColor="#4fa7ff"
              style={accountStyle.AuthButton}
              mode="contained"
              onPress={() => {
                onRegister(email, password, repassword);
                console.log("registered");
                navigation.navigate("Home");
              }}
            >
              Register
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
          buttonColor="#4fa7ff"
          mode="contained"
          style={accountStyle.AuthButton}
          onPress={() => {
            navigation.navigate("Account");
          }}
        >
          Back
        </Button>
      </View>
    </ImageBackground>
    // <BackgroundImage>
    //   <BackgroundView>
    //     <ButtonView>
    //       <AuthTextInput
    //         label={"E-mail"}
    //         value={email}
    //         textContentType="emailAddress"
    //         keyboardType="email-address"
    //         autoCapitalize="none"
    //         onChangeText={(text) => setEmail(text)}
    //       />
    //       <AuthTextInput
    //         label={"Password"}
    //         value={password}
    //         textContentType="password"
    //         autoCapitalize="none"
    //         secureTextEntry
    //         onChangeText={(text) => setPassword(text)}
    //       />
    //       <AuthTextInput
    //         label={"Re-Enter Password"}
    //         value={repassword}
    //         textContentType="password"
    //         autoCapitalize="none"
    //         secureTextEntry
    //         onChangeText={(text) => setRePassword(text)}
    //       />
    //       {/* {console.log(password)} */}
    //       {error && (
    //         <ErrorContainer>
    //           <Errormessage>{error}</Errormessage>
    //         </ErrorContainer>
    //       )}
    //       <AuthButton
    //         icon={"email"}
    //         mode="contained"
    //         onPress={() => {
    //           onRegister(email, password, repassword);
    //           console.log("registered");
    //           // navigation.navigate("Restaurant Screen");
    //         }}
    //       >
    //         Register
    //       </AuthButton>
    //     </ButtonView>
    //     {!isLoading ? (
    //       <AuthButton
    //         icon={"step-backward"}
    //         mode="contained"
    //         onPress={() => {
    //           navigation.navigate("Account");
    //         }}
    //       >
    //         Back
    //       </AuthButton>
    //     ) : (
    //       <Loading animating={true} color="#4fa7ff" />
    //     )}
    //   </BackgroundView>
    // </BackgroundImage>
  );
};
