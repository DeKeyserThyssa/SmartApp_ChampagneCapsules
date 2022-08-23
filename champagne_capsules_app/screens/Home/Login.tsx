import { NavigateFunction, useNavigate } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'
import { Button, Pressable, Text, TextInput, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { useAuth } from '../../utils/AuthContext'
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import {
  ParamListBase,
  StackActions,
  useNavigation,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import signin from '../../styles/signin'
import start from '../../styles/start'
import Account from '../Account'
import { FormErrors } from '../../interfaces/FormErrors'
import color from '../../styles/color'

// TODO: errors

export default () => {
  const navigation = useNavigation()
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    displayName: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    generic: { title: '', message: '' },
  })

  const { user, setUser } = useAuth()

  const login = (): void => {
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password,
    )
      .then((u: UserCredential) => {
        setUser(u.user)
        navigation.dispatch(
          StackActions.replace('AppNavigation', {
            user: 'displayName',
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
          // Do new render => new data
          return { ...currentErrors }
        })

        console.dir(err)
      })
  }

  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <View style={[signin.container]}>
      <Text style={start.buttontext}>Log in pagina</Text>

      {errors.generic.title && errors.generic.message ? (
        <Text style={{ color: color.rood }}>{errors.generic.title}</Text>
      ) : (
        <Text>{errors.generic.message}</Text>
      )}

      <View>
        <TextInput
          placeholder="Email"
          value={userCredentials.email}
          onChangeText={(text) =>
            setUserCredentials({ ...userCredentials, email: text })
          }
        />

        <TextInput
          placeholder="Wachtwoord"
          value={userCredentials.password}
          onChangeText={(text) =>
            setUserCredentials({ ...userCredentials, password: text })
          }
          secureTextEntry={true}
        />

        <Pressable onPress={login} style={[start.button]}>
          <Text style={[start.buttontext]}>Log in</Text>
        </Pressable>
      </View>
    </View>
  )
}
