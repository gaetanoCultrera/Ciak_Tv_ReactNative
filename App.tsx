import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { RootNavigator } from "./screens/routing/RootNavigator";

export default function App() {
  //onMount carica rootNavigator
  return (
    <Provider store={setupStore()}>
      <RootNavigator />
    </Provider>
  );
}
