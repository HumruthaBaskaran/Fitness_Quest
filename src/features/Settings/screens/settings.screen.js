import React from "react";
import { View, Text, TouchableOpacity, Audio } from "react-native";
import SoundPlayer from "react-native-sound-player";

export const SettingsScreen = () => {
  const songUrl = "https://www.shazam.com/track/11177141/lose-yourself";
  const audioUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const play = () => {
    try {
      // play the file tone.mp3
      // SoundPlayer.playSoundFile('tone', 'mp3')
      // or play from url
      SoundPlayer.playUrl(audioUrl);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => play()}>
        <Text>Settings Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

// import React, { useContext } from "react";
// import { TouchableOpacity } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
// import {
//   ListSection,
//   AvatarContainer,
//   StyledAvatarIcon,
//   StyledAvatarImage,
//   Email,
// } from "../components/settings.styles";
// import { List } from "react-native-paper";
// import { AntDesign } from "@expo/vector-icons";
// import { AuthenticationContext } from "../../../services/authentication/authentication.context";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState } from "react";
// import { useCallback } from "react";

// export const SettingsScreen = ({ navigation }) => {
//   const { onLogout, user } = useContext(AuthenticationContext);
//   const [photo, setPhoto] = useState(null);

//   const getProfilePic = async (currentUser) => {
//     const photouri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
//     setPhoto(photouri);
//   };

//   useFocusEffect(
//     useCallback(() => {
//       getProfilePic(user);
//     }, [user])
//   );
//   return (
//     <>
//       <AvatarContainer>
//         <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
//           {!photo && (
//             <StyledAvatarIcon size={180} label={user.email[0].toUpperCase()} />
//           )}
//           {photo && <StyledAvatarImage size={180} source={{ uri: photo }} />}
//         </TouchableOpacity>
//         <Email>{user.email}</Email>
//       </AvatarContainer>
//       <ListSection>
//         <List.Item
//           title="Favourites"
//           left={() => <AntDesign name={"heart"} size={24} color={"black"} />}
//           onPress={() => navigation.navigate("Favorites")}
//         />
//         <List.Item
//           title="Logout"
//           left={() => <AntDesign name={"logout"} size={24} color={"black"} />}
//           onPress={() => onLogout()}
//         />
//       </ListSection>
//     </>
//   );
// };
