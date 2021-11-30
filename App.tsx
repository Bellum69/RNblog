import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { fonts } from "./src/config";
import AppNavigation from "./src/navagation";

export const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <AppNavigation />;
};
