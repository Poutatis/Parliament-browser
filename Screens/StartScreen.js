import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "../Styles/styles";
/*Simpel start screen med ett välkomst meddelande 
och en knapp som går till Active Members List screen */
const StartScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.startPageText}>Welcome to Parilament Browser</Text>
      <Button
        title="Go to members list"
        onPress={() => navigation.navigate("Active Members List")}
      />
    </View>
  );
};

export default StartScreen;
