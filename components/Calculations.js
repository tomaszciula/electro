import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const Calculations = ({ navigation }) => {
  const handleFusePress = () => {
    navigation.navigate("Dobieranie bezpiecznika");
  };

  const handleCablePress = () => {
    navigation.navigate("Dobór przekroju kabla");
  };

  return (
    <>
      <Text style={styles.text} onPress={handleFusePress}>
        Dobieranie wyłącznika
      </Text>
      <Text style={styles.text} onPress={handleCablePress}>
        Dobór przekroju przewodu
      </Text>
      <Text style={styles.text}>
        Obliczanie spadku napięcia
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
});

export default Calculations;
