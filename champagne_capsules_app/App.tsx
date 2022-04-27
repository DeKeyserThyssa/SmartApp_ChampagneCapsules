import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './screens/AppNavigation'
import { useEffect } from 'react';
import { setBackgroundColorAsync } from 'expo-navigation-bar';
import { osName } from 'expo-device';
import Home from './screens/Home';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs([`AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage`])
  const [fontsLoaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar />

          <Home/>
          {/* <AppNavigation /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    )
  }
}