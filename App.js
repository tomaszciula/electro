import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./components/BottomTabs";
import Calculations from "./components/Calculations";
import Fuse from "./components/Fuse";
import Cable from "./components/Cable";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Electro by TC" component={BottomTabs} />
        <Stack.Screen name="Dobieranie bezpiecznika" component={Fuse} />
        <Stack.Screen name="Dobór przekroju kabla" component={Cable} />
        <Stack.Screen name="Wybór prądu" component={Calculations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
