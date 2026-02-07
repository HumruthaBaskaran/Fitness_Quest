import React, { memo, useContext, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import YourComponent from "../../../../rough";

const WorkoutList = ({ navigation, route }) => {
  //METs x 3.5 x (your body weight in kilograms) / 200 = calories burned per minute.
  let weight = 93;
  const { data, metaData } = route.params;
  // console.log(data);
  const [totalcalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [globalIndex, setGlobalIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [selected, setSelected] = useState([]);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [OptimizedData, setOptimizedData] = useState([]);

  useEffect(() => {
    fetchData(0);
  }, []);
  useEffect(() => {
    fetchData(globalIndex);
  }, [globalIndex]);

  let len = data.length;
  let fullLen = 0;
  for (let i = 0; i < len; i++) {
    fullLen += data[i].length;
  }
  const calorieCalculator = (met, time) => {
    return (weight / 200) * met * 3.5 * (time / 60);
  };

  let checkObj = {};
  let timeObject = {};
  let calObject = {};
  data.forEach((d) => {
    d.forEach((workout) => {
      checkObj[workout["id"]] = false;
      timeObject[workout["id"]] = 30;
      calObject[workout["id"]] = Math.round(
        calorieCalculator(workout["met"], 30)
      );
    });
  });
  const [checked, setChecked] = useState(checkObj);
  const [time, setTime] = useState(timeObject);
  const [calories, setCalories] = useState(calObject);

  const updateUi = (item, operation) => {
    let oldCal = calories[item.id];
    let arr = time;
    if (operation == "+") {
      arr[item.id] += 5;
      if (selected.includes(item)) {
        setTotalTime(totalTime + 5);
      }
    } else {
      arr[item.id] -= 5;
      if (selected.includes(item)) {
        setTotalTime(totalTime - 5);
      }
    }
    setTime(arr);
    setAdded(!added);
    let cal = calories;
    cal[item.id] = Math.round(calorieCalculator(item.met, time[item.id]));
    setCalories(cal);
    if (selected.includes(item)) {
      setTotalCalories(totalcalories + (calories[item.id] - oldCal));
    }
  };

  const SingleWorkout = ({ item, index }) => {
    let itemCal = Math.round(calorieCalculator(item.met, time[item.id]));
    // item["calorie"] = itemCal;
    // if(index == data)
    // console.log()
    var title = item.name;
    return (
      <TouchableOpacity
        style={workoutStyles.container}
        onPress={() => navigation.navigate("FullView", { item })}
      >
        <Image source={{ uri: item.gifUrl }} style={workoutStyles.image} />
        <View style={workoutStyles.detailsView}>
          <Text style={workoutStyles.title}>
            {title[0].toUpperCase() + title.slice(1)}
          </Text>
          <View style={workoutStyles.subDetailsView}>
            <Text>&#128293; {itemCal}</Text>
            <View style={workoutStyles.timeView}>
              <TouchableOpacity
                style={workoutStyles.timeButton}
                onPress={() => {
                  updateUi(item, "+");
                }}
              >
                <Entypo name="circle-with-plus" size={22} color="black" />
              </TouchableOpacity>
              <Text>{time[item.id]} sec</Text>
              <TouchableOpacity
                style={workoutStyles.timeButton}
                onPress={() => {
                  updateUi(item, "-");
                }}
              >
                <Entypo name="circle-with-minus" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Checkbox
          status={checked[item.id] ? "checked" : "unchecked"}
          onPress={() => {
            let previous = checked;
            previous[item.id] = !previous[item.id];
            setChecked(previous);
            var arr = selected;
            if (arr.includes(item)) {
              let i = arr.indexOf(item);
              arr.splice(i, 1);
              setTotalCalories(totalcalories - calories[item.id]);
              setTotalTime(totalTime - time[item.id]);
            } else {
              arr.push(item);
              setTotalCalories(totalcalories + calories[item.id]);
              setTotalTime(totalTime + time[item.id]);
            }
            setSelected(arr);
          }}
        />
      </TouchableOpacity>
    );
  };

  let arr2 = [];
  const fetchData = (index) => {
    console.log(globalIndex, pageSize, loading);
    if (globalIndex < data.length) {
      // setLoading(true);
      console.log(loading);
      arr2 = OptimizedData;
      if (arr2.length <= index) {
        arr2.push([]);
        // arr2.push([]);
      }
      arr2[index] = arr2[index].concat(
        data[index].slice(pageSize, pageSize + 10)
      );
      setOptimizedData(arr2);

      if (pageSize >= data[index].length) {
        setPageSize(0);
        setGlobalIndex(globalIndex + 1);
        // fetchData(globalIndex);
      } else {
        setPageSize(pageSize + 10);
      }
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#2ba2d5",
      }}
    >
      <View style={workoutStyles.planDetails}>
        <Text
          style={{
            fontFamily: "Air-travelers",
            fontSize: 36,
            textAlign: "center",
            marginRight: 15,
            width: "100%",
          }}
        >
          Select the exercises you want to add to your workout plan
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          No.of workouts selected: {selected.length}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Total calories burened:&#128293; {totalcalories}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Total Time spent: {totalTime} sec
        </Text>
      </View>
      <View style={workoutStyles.flatListTop}></View>
      <FlatList
        // key={index}
        data={OptimizedData}
        renderItem={({ item, index }) => {
          if (item.length > 0) {
            // console.log("Index: ", index);
            let bodyPart = item[0]["bodyPart"];
            return (
              <View>
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 24,
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  {bodyPart[0].toUpperCase() + bodyPart.slice(1)}:
                </Text>
                {item.map((exercise, i) => {
                  return <SingleWorkout item={exercise} key={i} />;
                })}
                {loading && <ActivityIndicator />}
              </View>
            );
          }
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={workoutStyles.oneBodyPartView}
        initialNumToRender={1}
        removeClippedSubviews={true}
        onEndReached={() => {
          setLoading(true);
          fetchData(globalIndex);
          setLoading(false);
        }} // Load more data as the user scrolls
        onEndReachedThreshold={0.1} // Adjust as needed
      />
      <View style={workoutStyles.createView}>
        <TouchableOpacity
          style={workoutStyles.createButton}
          onPress={() => {
            metaData["no_of_exercises"] = selected.length;
            metaData["total_calorie_burned"] = totalcalories;
            metaData["time"] = totalTime;
            if (metaData["Workout Type"] == "Cardio") {
              metaData["Body parts"] = ["full Body"];
            }
            navigation.navigate("FinalScreen", {
              data: selected,
              metaData: metaData,
            });
          }}
        >
          <Text style={workoutStyles.createButtonText}>Create Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(WorkoutList);
const workoutStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
    paddingRight: 10,
    // marginVertical: 10,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  planDetails: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    width: "97%",
    height: 250,
    backgroundColor: "#2ba2d5",
    padding: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  image: {
    marginLeft: 5,
    width: "25%",
    height: "100%",
    resizeMode: "center",
  },
  title: {
    fontFamily: "Caprasimo-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  detailsView: {
    height: "100%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#076875",
  },
  subDetailsView: {
    flexDirection: "row",
    width: "100%",
    marginTop: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
  },
  flatListTop: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#ffffff",
    height: 20,
    width: "100%",
  },
  oneBodyPartView: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#ffffff",
    width: "99%",
    paddingBottom: 30,
  },
  createButton: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  createView: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  createButtonText: {
    color: "#ffffff",
  },
  timeView: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },
  timeButton: {
    height: 22,
    width: 22,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  timeText: {
    marginBottom: 2,
    fontSize: 18,
  },
});
