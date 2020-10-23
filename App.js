import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [yourGoals, setYourGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // here ...yourGoals is previous goals that we already inserted and entered goal is new goal that we are inserted latest
    // here we create object of array in yourGoals because flatlist accept KEY value objects so that's why
    setYourGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setShowModal(false);
  };

  const removeGoalHandler = (goalId) => {
    setYourGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  const cancelButtonModalHandler = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setShowModal(true)} />
      <GoalInput
        modalVisibility={showModal}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelButtonModalHandler}
      />
      {/* In FlatList data contain an array of OBJECT and renderItem contain function which is called for every item in your data */}
      <FlatList
        // keyExtractor={(item, index) => item.uid} --------> if you don't have KEY property in your object then other than that so you can use this.
        data={yourGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            id={itemData.item.key}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
