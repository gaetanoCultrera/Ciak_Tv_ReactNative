import React, { lazy, Suspense } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import RootNavigator from "./screens/routing/RootNavigator";
import { persistor, setupStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import LottieView from "lottie-react-native";
import splashScreen from "./assets/animation/ciak.json";
//di caricamento: Il valore di caricamento fornito sarà reso fino al completamento della persistenza e a quel punto saranno resi i bambini.
//TODO render empty list skeleton nel login
const { registerComponent } = AppRegistry;
export default function App() {
  registerComponent("RootNavigator", () => RootNavigator);
  const LazyNavigator = lazy(() => import("./screens/routing/RootNavigator"));
  return (
    <Provider store={setupStore}>
      <PersistGate
        persistor={persistor}
        // loading={<LottieView source={splashScreen} autoPlay loop />}
      >
        <Suspense fallback={<LottieView source={splashScreen} autoPlay loop />}>
          <LazyNavigator />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}
