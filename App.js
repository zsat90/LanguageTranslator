import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TranslatorPage from "./src/screens/translatorScreen";
import WelcomeScreen from "./src/screens/welcomeScreen";
import TranslatedText from "./src/screens/translatedTextScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Translator" component={TranslatorPage} />
        <Stack.Screen name="TranslatedText" component={TranslatedText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
