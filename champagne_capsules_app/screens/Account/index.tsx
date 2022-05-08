import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import signin from '../../styles/signin'
import start from '../../styles/start'
import { useAuth } from '../../utils/AuthContext'
import { auth } from '../../utils/firebase'

export default () => {
  const { user, setUser } = useAuth()
  const [token, setToken] = useState('')

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        navigate('Start')
      })
      .catch(() => {
        //TODO: show something
      })
  }

  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <View style={signin.container}>
      <Text style={start.welkom}>Welkom {user?.displayName}!</Text>

      <Pressable style={[start.button, start.register]}>
        <Text style={[start.buttontext]}>Favorieten</Text>
      </Pressable>
      <Pressable style={[start.button, start.register]}>
        <Text style={[start.buttontext]}>Dubbele</Text>
      </Pressable>

      <Pressable
        onPress={logout}
        style={[start.button, start.register]}
      >
        <Text style={[start.buttontext]}>Uitloggen</Text>
      </Pressable>
    </View>
  )
}
