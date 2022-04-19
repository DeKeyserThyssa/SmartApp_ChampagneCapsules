import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { Text } from 'react-native'
import Detail from './Detail'
import Overview from './Overview'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}