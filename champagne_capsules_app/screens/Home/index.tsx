import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useState } from 'react'
import { Text } from 'react-native'
import { AuthContext } from '../../utils/AuthContext'
import { auth } from '../../utils/firebase'
import AppNavigation from '../AppNavigation'
import Capsules from '../Capsules'
import Login from './Login'
import Register from './Register'
import Start from './Start'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export default () => {
  const [user, setUser] = useState<User>()
  const [resolved, setResolved] = useState<boolean>(false)

  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        setUser(user as User) 
      }
      setResolved(true)
    },
    (error) => {
      console.log(error)
      setResolved(true)
    },
  )
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AppNavigation" component={AppNavigation} />
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}
