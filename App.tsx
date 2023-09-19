import React from "react";
import { Provider } from "react-redux";
import { RootNavigator } from "./screens/routing/RootNavigator";
import { persistor, setupStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={setupStore}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
