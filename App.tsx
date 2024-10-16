const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Notification1 from "./screens/Notification1";
import PlantDetails from "./screens/PlantDetails";
import CareGuide from "./screens/CareGuide";
import Snaptip from "./screens/Snaptip";
import Camera from "./screens/Camera";
import Snaptip1 from "./screens/Snaptip1";
import Snaptip2 from "./screens/Snaptip2";
import MyPlantsaddedReminder1 from "./screens/MyPlantsaddedReminder1";
import MyPlantsaddedReminder from "./screens/MyPlantsaddedReminder";
import MyPlantsaddedReminder3 from "./screens/MyPlantsaddedReminder3";
import MyPlantsaddedReminder2 from "./screens/MyPlantsaddedReminder2";
import MyPlantsaddReminder from "./screens/MyPlantsaddReminder";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlantDetails"
              component={PlantDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CareGuide"
              component={CareGuide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Snaptip"
              component={Snaptip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Snaptip1"
              component={Snaptip1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Snaptip2"
              component={Snaptip2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPlantsaddedReminder1"
              component={MyPlantsaddedReminder1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPlantsaddedReminder"
              component={MyPlantsaddedReminder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPlantsaddedReminder3"
              component={MyPlantsaddedReminder3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPlantsaddedReminder2"
              component={MyPlantsaddedReminder2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPlantsaddReminder"
              component={MyPlantsaddReminder}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
