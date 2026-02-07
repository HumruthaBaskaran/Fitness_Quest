// const SingleWorkout = ({ item }) => {
//     let itemCal = Math.round(calorieCalculator(item.met, time[item.id]));
//     item["calorie"] = itemCal;

//     var title = item.name;
//     return (
//       <TouchableOpacity
//         style={workoutStyles.container}
//         // onPress={() => navigation.navigate("FullView")}
//       >
//         <Image source={{ uri: item.gifUrl }} style={workoutStyles.image} />
//         <View style={workoutStyles.detailsView}>
//           <Text style={workoutStyles.title}>
//             {title[0].toUpperCase() + title.slice(1)}
//           </Text>
//           <View style={workoutStyles.subDetailsView}>
//             <Text>&#128293; {item.calorie}</Text>
//             <View style={workoutStyles.timeView}>
//               <TouchableOpacity
//                 style={workoutStyles.timeButton}
//                 onPress={() => {
//                   updateUi(item, "+");
//                 }}
//               >
//                 <Entypo name="circle-with-plus" size={22} color="black" />
//               </TouchableOpacity>
//               <Text>{time[item.id]} sec</Text>
//               <TouchableOpacity
//                 style={workoutStyles.timeButton}
//                 onPress={() => {
//                   updateUi(item, "-");
//                 }}
//               >
//                 <Entypo name="circle-with-minus" size={22} color="black" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <Checkbox
//           status={checked[item.id] ? "checked" : "unchecked"}
//           onPress={() => {
//             let previous = checked;
//             previous[item.id] = !previous[item.id];
//             setChecked(previous);
//             var arr = selected;
//             if (arr.includes(item)) {
//               let i = arr.indexOf(item);
//               arr.splice(i, 1);
//               setTotalCalories(totalcalories - calories[item.id]);
//               setTotalTime(totalTime - time[item.id]);
//             } else {
//               arr.push(item);
//               setTotalCalories(totalcalories + calories[item.id]);
//               setTotalTime(totalTime + time[item.id]);
//             }
//             setSelected(arr);
//           }}
//         />
//       </TouchableOpacity>
//     );
//   };

//   const singleBodyPart = ({ item }) => {
//     return (
//       <View style={{ width: "100%", padding: 10 }}>
//         <Text
//           style={{
//             fontSize: 20,
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#000000",
//             marginLeft: 20,
//             textDecorationLine: "underline",
//           }}
//         >
//           {item[0]["bodyPart"].toUpperCase()}
//         </Text>
//         <FlatList
//           data={item}
//           renderItem={SingleWorkout}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     );
//   };
//   return (
//     <View
//       style={{
//         justifyContent: "center",
//         flex: 1,
//         alignItems: "center",
//         backgroundColor: "#2ba2d5",
//       }}
//     >
//       {/* <TouchableOpacity onPress={() => navigation.navigate("FinalScreen")}>
//         <Text>Navigate to next</Text>
//       </TouchableOpacity> */}
//       <View style={workoutStyles.planDetails}>
//         <Text
//           style={{
//             fontFamily: "Air-travelers",
//             fontSize: 36,
//             textAlign: "center",
//             marginRight: 15,
//             width: "100%",
//           }}
//         >
//           Select the exercises you want to add to your workout plan
//         </Text>
//         <Text
//           style={{
//             fontSize: 20,
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#ffffff",
//           }}
//         >
//           No.of workouts selected: {selected.length}
//         </Text>
//         <Text
//           style={{
//             fontSize: 20,
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#ffffff",
//           }}
//         >
//           Total calories burened:&#128293; {totalcalories}
//         </Text>
//         <Text
//           style={{
//             fontSize: 20,
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#ffffff",
//           }}
//         >
//           Total Time spent: {totalTime} sec
//         </Text>
//       </View>
//       <View style={workoutStyles.flatList}></View>
//       <FlatList
//         data={data}
//         renderItem={singleBodyPart}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ backgroundColor: "#ffffff" }}
//       />
//       <View style={workoutStyles.createView}>
//         <TouchableOpacity
//           style={workoutStyles.createButton}
//           onPress={() => {
//             metaData["no_of_exercises"] = selected.length;
//             metaData["total_calorie_burned"] = totalcalories;
//             metaData["time"] = time;
//             // Inside the component where you want to log the stack navigation state
//             // navigation.dispatch(StackActions.popToTop());
//             navigation.navigate("FinalScreen", {
//               data: selected,
//               metaData: metaData,
//             });
//           }}
//         >
//           <Text>Create Workout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
