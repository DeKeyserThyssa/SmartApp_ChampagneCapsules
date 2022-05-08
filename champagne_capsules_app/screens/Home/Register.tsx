import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { useAuth } from '../../utils/AuthContext'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import start from '../../styles/start'
import { ParamListBase, StackActions, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import signin from '../../styles/signin'

// TODO: errors
// TODO: verwijder skip buttons

export default () => {
  const navigation = useNavigation();
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    displayName: '',
  })
  const [name, setName] = useState<string>()
  const { setUser } = useAuth()

  const registerUser = (): void => {
    if (newUser.email && newUser.password) {
      createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password,
      ).then((user: UserCredential) => {
        setUser(async () => {
          if (user.user) await updateProfile(user.user, { displayName: name })
          return user.user
        })
        setNewUser({
          email: '',
          password: '',
          displayName: '',
        })
        setName('')
        navigate('AppNavigation', { screen: 'Account' })
        console.log(newUser, name)
        navigation.dispatch(
          StackActions.replace('AppNavigation', { newUser: 'displayName', screen: 'Account'})
        )
      })
    }
  }
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  return (
    <View style={[signin.container]}>
      <Text style={start.buttontext}>Maak hier een account!</Text>
      <View>
        <TextInput
          placeholder="Gebruikersnaam"
          value={name}
          onChangeText={(name) => setName(name)}
        />

        <TextInput
          placeholder="Email"
          value={newUser.email}
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
        />

        <TextInput
          placeholder="Wachtwoord"
          value={newUser.password}
          onChangeText={(text) => setNewUser({ ...newUser, password: text })}
          secureTextEntry={true}
        />

        <Pressable
          onPress={registerUser}
          style={[start.button, start.register]}
        >
          <Text style={[start.buttontext]}>Log in</Text>
        </Pressable>
        <Pressable
          onPress={() => navigate('AppNavigation', { screen: 'Account' })}
          style={[start.button, start.register]}
        >
          <Text style={[start.buttontext]}>Skip</Text>
        </Pressable>
      </View>
    </View>
  )
}
