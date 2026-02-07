import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, createContext } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [masterWorkouts, setMasterWorkouts] = useState([]);

  const saveMasterWorkouts = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@masterWorkouts-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadMasterWorkouts = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@masterWorkouts-${uid}`);
      if (value !== null) {
        setMasterWorkouts(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (workout) => {
    setMasterWorkouts([...masterWorkouts, workout]);
  };

  const remove = (workoutName) => {
    const newmasterWorkouts = masterWorkouts.filter(
      (x) => x["metaData"]["Workout name"] !== workoutName
    );
    setMasterWorkouts(newmasterWorkouts);
  };

  useEffect(() => {
    // if (user && user.uid) {
    loadMasterWorkouts("admin");
    // console.log(masterWorkouts);
    // }
  }, []);

  useEffect(() => {
    // if (user && user.uid && masterWorkouts.length) {
    saveMasterWorkouts(masterWorkouts, "admin");
    // }
  }, [masterWorkouts]);
  return (
    <WorkoutContext.Provider
      value={{
        masterWorkouts,
        saveWorkout: saveMasterWorkouts,
        getWorkout: loadMasterWorkouts,
        addWorkout: add,
        removeWorkout: remove,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
