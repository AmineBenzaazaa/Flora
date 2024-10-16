const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ReminderAddplant from "./screens/ReminderAddplant";
import OnboardingScreen1 from "./screens/OnboardingScreen1";
import OnboardingScreen2 from "./screens/OnboardingScreen2";
import WelcomeScreen from "./screens/WelcomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import TaskWildmintCare from "./screens/TaskWildmintCare";
import ChangeScheduleeditOnState from "./screens/ChangeScheduleeditOnState";
import ReminderChanfeSchedule from "./screens/ReminderChanfeSchedule";
import ChangeScheduleeditState from "./screens/ChangeScheduleeditState";
import TaskWildmintInfo from "./screens/TaskWildmintInfo";
import ReminderTaskAll from "./screens/ReminderTaskAll";
import ReminderTaskWater from "./screens/ReminderTaskWater";
import ChangeScheduleedit1One from "./screens/ChangeScheduleedit1One";
import ReminderTaskFertilizer from "./screens/ReminderTaskFertilizer";
import ReminderChanfeSchedule1 from "./screens/ReminderChanfeSchedule1";
import ExplorePlants from "./screens/ExplorePlants";

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
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
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
              name="ReminderAddplant"
              component={ReminderAddplant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen1"
              component={OnboardingScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen2"
              component={OnboardingScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TaskWildmintCare"
              component={TaskWildmintCare}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeScheduleeditOnState"
              component={ChangeScheduleeditOnState}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReminderChanfeSchedule"
              component={ReminderChanfeSchedule}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeScheduleeditState"
              component={ChangeScheduleeditState}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TaskWildmintInfo"
              component={TaskWildmintInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReminderTaskAll"
              component={ReminderTaskAll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReminderTaskWater"
              component={ReminderTaskWater}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeScheduleedit1One"
              component={ChangeScheduleedit1One}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReminderTaskFertilizer"
              component={ReminderTaskFertilizer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReminderChanfeSchedule1"
              component={ReminderChanfeSchedule1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExplorePlants"
              component={ExplorePlants}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
