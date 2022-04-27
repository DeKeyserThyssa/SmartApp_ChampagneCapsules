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
        navigate('/login')
      })
      .catch(() => {
        // show something
      })
  }

  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <View style={signin.container}>
      {/* TODO: displayname ipv email */}
      <Text>Welcome {user?.email}!</Text>

      <Pressable
        onPress={() => navigate('Home')}
        style={[start.button, start.register]}
      >
        <Text style={[start.buttontext]}>Sign Out</Text>
      </Pressable>
    </View>
  )
}
