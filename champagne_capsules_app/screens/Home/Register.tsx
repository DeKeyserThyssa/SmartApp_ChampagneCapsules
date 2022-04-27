import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { useAuth } from '../../utils/AuthContext'
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import start from '../../styles/start'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import signin from '../../styles/signin'

export default () => {
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
  })
  const { setUser } = useAuth()

  const registerUser = (): void => {
    if (newUser.displayName && newUser.email && newUser.password) {
      createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((user: UserCredential) => {
          setUser(user.user)
          navigate('AppNavigation', { screen: 'Account' })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <View style={[signin.container]}>
      <Text>Signup screen!</Text>

      {/* {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>} */}

      <View>
        <TextInput
          placeholder="Displayname"
          value={newUser.displayName}
          onChangeText={(text) => setNewUser({ ...newUser, displayName: text })}
        />

        <TextInput
          placeholder="Email"
          value={newUser.email}
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
        />

        <TextInput
          placeholder="Password"
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
