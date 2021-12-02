import React from "react";
import { AppNavigation } from "./src/navigation/";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store } from "./src/store";

import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
