import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Alert, Pressable, Text, TextInput, View } from 'react-native'
import { useAuth } from '../../utils/AuthContext'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import start from '../../styles/start'
import {
  ParamListBase,
  StackActions,
  useNavigation,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import signin from '../../styles/signin'
import { FormErrors } from '../../interfaces/FormErrors'
import color from '../../styles/color'

// TODO: errors

export default () => {
  const navigation = useNavigation()
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    displayName: '',
  })
  const [errors, setErrors] = useState<FormErrors>({
    generic: { title: '', message: '' },
  })
  const [name, setName] = useState<string>()
  const { setUser } = useAuth()

  const registerUser = (): void => {
    if (newUser.email && newUser.password) {
      createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password,
      )
      .then((user: UserCredential) => {
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
          StackActions.replace('AppNavigation', {
            newUser: 'displayName',
            screen: 'Account',
          }),
        )
      })
      .catch((err) => {
        setErrors((currentErrors: FormErrors) => {
          currentErrors.generic = {
            title: err.code,
            message: err.message,
          }
          return { ...currentErrors }
        })

        console.dir(err)
      })
    } else {
      Alert.alert('Je moet alle velden invullen')
    }
  }
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  return (
    <View style={[signin.container]}>
      <Text style={start.buttontext}>Maak hier een account!</Text>
      {errors.generic.title && errors.generic.message ? (
        <Text style={{ color: color.rood }}>
          {errors.generic.title}
        </Text>
      ) : (
        <Text>{errors.generic.message}</Text>
      )}
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

        <Pressable onPress={registerUser} style={[start.button]}>
          <Text style={[start.buttontext]}>Log in</Text>
        </Pressable>
      </View>
    </View>
  )
}
