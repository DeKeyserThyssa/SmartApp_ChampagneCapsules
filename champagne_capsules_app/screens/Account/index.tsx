import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
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

      <Pressable style={[start.buttonImage]}>
      <ImageBackground
          style={start.coverImage}
          source={{
            uri: 'https://www.allcaps.eu/img/default_cap.png',
          }}
        >
          <View style={start.textView}>
            <Text style={start.buttontext}>Favorieten</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable style={[start.buttonImage]}>
      <ImageBackground
          style={start.coverImage}
          source={{
            uri: 'https://www.allcaps.eu/img/default_cap.png',
          }}
        >
          <View style={start.textView}>
            <Text style={start.buttontext}>Dubbele</Text>
          </View>
        </ImageBackground>
      </Pressable>

      <Pressable
        onPress={logout}
        style={[start.button]}
      >
        <Text style={[start.buttontext]}>Afmelden</Text>
      </Pressable>
    </View>
  )
}
