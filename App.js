import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [yourGoals, setYourGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // here ...yourGoals is previous goals that we already inserted and entered goal is new goal that we are inserted latest
    setYourGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What's your new goal?"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View>
        {yourGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: "70%",
  },
});
