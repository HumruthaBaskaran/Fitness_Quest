import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

export const FullView = ({ navigation, route }) => {
  const { item } = route.params;
  var title = item.name;
  const w = window.width * 0.8;

  return (
    <View style={fullStyles.conatainer}>
      <Image
        source={{ uri: item.gifUrl }}
        style={fullStyles.image}
        resizeMode="contain"
      />
      <Text style={fullStyles.title}>
        {title[0].toUpperCase() + title.slice(1)}
      </Text>
      <ScrollView
        // horizontal={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flex: 1,
          }}
        >
          {item.instructions.map((instruction, index) => {
            return (
              <Text
                key={index}
                style={{
                  textAlign: "justify",
                  width: "90%",
                  fontSize: 16,
                }}
              >
                {`\u2022 ${instruction}\n`}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const fullStyles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    height: 250,
    width: "90%",
  },
  title: {
    fontFamily: "Caprasimo-Regular",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10,
  },
  subDetailsView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
