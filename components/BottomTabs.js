import React from "react";
import MainView from "./MainView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, Settings, Text } from "react-native";
import Calculations from "./Calculations";
import Tables from "./Tables";
import Profil from "./Profil";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Obliczenia" component={Calculations} />
      <Tab.Screen name="Tabele" component={Tables} />
      <Tab.Screen name="Ustawienia" component={Profil} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
