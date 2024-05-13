import React from "react";
import { StyleSheet, ScrollView, Text, Alert } from "react-native";

const MainView = () => {
  const xx = () => {
    Alert.alert("Dobieranie wyłącznika");
  };
  return (
    <ScrollView style={styles.container}>
      <Text onPress={xx} style={styles.text}>Dobieranie wyłącznika</Text>
	  <Text onPress={xx} style={styles.text}>Dobór przekroju przewodu</Text>
	  <Text onPress={xx} style={styles.text}>Obliczanie spadku napięcia</Text>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
      marginVertical: 10,
	  fontSize: 20,
  }
});
export default MainView;
