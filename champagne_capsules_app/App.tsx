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

export default function App() {
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