import HomeScreen from "./screens/HomeScreen";

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
