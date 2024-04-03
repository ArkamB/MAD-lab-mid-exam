import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import First from "./First";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Second from "./Second";
import { DataFetching } from "./DataFetching";
import { Urdudata } from "./Urdudata";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={First}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Books Info" component={DataFetching} />

        <Stack.Screen
          name="Search"
          component={Second}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen name="urdu" component={Urdudata} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
