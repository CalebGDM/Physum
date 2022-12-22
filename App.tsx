import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import ModuleContextProvider from "./src/context/ModuleContext";
import { useEffect } from "react";
import { registerForPushNotificationsAsync } from "./src/utils/PushNotifications";
import UserContextProvider from "./src/context/UserContext";

Amplify.configure(awsmobile);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

 

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
       <UserContextProvider>
          <ModuleContextProvider>
            <Navigation colorScheme={null} />
          </ModuleContextProvider>
        </UserContextProvider>
        <StatusBar/>
      </SafeAreaProvider>
    );
  }
}
