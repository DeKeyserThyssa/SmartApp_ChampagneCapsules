import { NavigateFunction, useNavigate } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'
import { Button, Pressable, Text, TextInput, View } from 'react-native'
import { useAuth } from '../../utils/AuthContext'
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { ParamListBase, StackActions, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import signin from '../../styles/signin'
import start from '../../styles/start'
import Account from '../Account'
import { FormErrors } from '../../interfaces/FormErrors'

// TODO: errors
// TODO: verwijder skip buttons

export default () => {
  const navigation = useNavigation();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    displayName: '',
    error: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    generic: { title: '', message: '' },
    fields: {
      email: {
        hasError: true,
        inlineErrorMessage: 'Email not formated correctly',
        dirty: false,
      },

      password: {
        hasError: true,
        inlineErrorMessage: 'Password too short',
        dirty: false,
      },
    },
  })

  const discardErrorMessage = () => {
    setErrors((currentErrors: FormErrors) => {
      currentErrors.generic = { title: '', message: '' }

      return { ...currentErrors }
    })
  }

  const { user, setUser } = useAuth()

  const login = (): void => {
    if (userCredentials.email === '' || userCredentials.password === '') {
      setUserCredentials({
        ...userCredentials,
      })
      return;
    }
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password,
    )
      .then((u: UserCredential) => {
        setUser(u.user)
        navigation.dispatch(
          StackActions.replace('AppNavigation', {
            user: 'displayName', screen : 'Account'
          })
        );
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


  useEffect(() => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,99})+$/.test(
        userCredentials.email,
      )
    ) {
      setErrors((currentErrors: FormErrors) => {
        currentErrors.fields.email.hasError = true
        currentErrors.fields.email.inlineErrorMessage =
          'Not a valid emailaddress.'
        return { ...currentErrors }
      })
    } else {
      setErrors((currentErrors: FormErrors) => {
        currentErrors.fields.email.hasError = false
        currentErrors.fields.email.inlineErrorMessage =
          'Not a valid emailaddress.'
        return { ...currentErrors }
      })
    }
  }, [userCredentials.email])


  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <View style={[signin.container]}>
      <Text style={start.buttontext}>Log in pagina</Text>

      {!!userCredentials.error && (
        <View>
          <Text>{userCredentials.error}</Text>
        </View>
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

        <Pressable onPress={login} style={[start.button, start.register]}>
          <Text style={[start.buttontext]}>Log in</Text>
        </Pressable>
        <Pressable onPress={() => navigate('AppNavigation', {screen: 'Account'})} style={[start.button, start.register]}>
          <Text style={[start.buttontext]}>Skip</Text>
        </Pressable>
      </View>
    </View>
  )
}
