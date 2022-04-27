import { Link, ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Alert, Button, Image, Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import start from '../../styles/start'
import Account from '../Account'

export default () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  return (
    <SafeAreaView style={[start.container]}>
      <Pressable onPress={() => navigate('Login')} style={[start.button, start.login]}>
        <Text style={[start.buttontext]}>Sign In</Text>
      </Pressable>
      <Pressable onPress={() => navigate('Register')} style={[start.button, start.register]}>
        <Text style={[start.buttontext]}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => navigate('AppNavigation', {screen: "Account"})} style={[start.button, start.register]}>
        <Text style={[start.buttontext]}>Skip</Text>
      </Pressable>
    </SafeAreaView>
  )
}
