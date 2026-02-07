import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { bodyParts } from "../../../DataBase/exerciseData";
import { styles } from "../components/wortkoutStyles";

export const BodyPart = ({ navigation, route }) => {
  const [parts, setParts] = useState([]);
  const { newData, metaData } = route.params;
  // console.log(metaData);
  const keys = Object.keys(newData);
  const handelClick = (value) => {
    if (parts.includes(value)) {
      var i = parts.indexOf(value);
      var arr = parts;
      arr.splice(i, 1);
      setParts(arr);
    } else {
      var arr = parts;
      arr.push(value);
      setParts(arr);
    }
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("WorkoutList")}>
        <Text>Navigate to next</Text>
      </TouchableOpacity> */}
      <Text
        style={{
          fontFamily: "Air-travelers",
          fontSize: 36,
          textAlign: "center",
          color: "#2ba2d5",
        }}
      >
        Select the Body part you want to target
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollContainer}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {bodyParts.map((a, index) => {
          if (keys.includes(a.name)) {
            return (
              <SingleCard
                image={a.uri[0]}
                title={a.name}
                key={index}
                onClick={handelClick}
              />
            );
          }
        })}
        <TouchableOpacity
          style={BodyPartstyles.button}
          onPress={() => {
            var arr = [];
            keys.forEach((element) => {
              if (parts.includes(element)) {
                arr.push(newData[element]);
              }
            });
            metaData["Body parts"] = parts;
            navigation.navigate("WorkoutList", { data: arr, metaData });
          }}
        >
          <Text style={BodyPartstyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const SingleCard = ({ image, title, onClick }) => {
  const [bg, setbg] = useState(true);
  const [bgcolor, setBgcolor] = useState("#ffffff");
  return (
    <TouchableOpacity
      style={BodyPartstyles.container}
      onPress={() => {
        setbg(!bg);
        if (bg) {
          setBgcolor("#2ba2d5");
        } else {
          setBgcolor("#ffffff");
        }
        onClick(title);
      }}
    >
      <Image source={{ uri: image }} style={BodyPartstyles.image} />
      <View style={[BodyPartstyles.textView, { backgroundColor: bgcolor }]}>
        <Text style={BodyPartstyles.text}>
          {title[0].toUpperCase() + title.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BodyPartstyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    width: "90%",
    marginVertical: 10,
    alignItems: "center",
    // backgroundColor: "green",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#2ba2d5",
    zIndex: 9999,
  },
  text: {
    fontFamily: "Ananda-Black",
    fontSize: 20,
    marginLeft: 30,
  },
  textView: {
    flexDirection: "row",
    height: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    width: "72%",
    alignItems: "center",
    borderWidth: 3,
    elevation: 30,
    position: "absolute",
    right: -1,
    borderStartWidth: 0,
    borderColor: "#2ba2d5",
    shadowColor: "#000000",
  },
  button: {
    width: 150,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#2ba2d5",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Caprasimo-Regular",
    fontSize: 24,
  },
});
