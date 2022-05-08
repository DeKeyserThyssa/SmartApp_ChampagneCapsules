import { Link, ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import start from '../../styles/start'
export default () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  // TODO: verwijder skip buttons
  return (
    <SafeAreaView style={[start.container]}>
      {/* <Image
        style={start.foto}
        source={{
          uri: 'https://www.allcaps.eu/img/default_cap.png',
        }}
      />
      <Text style={start.textimage}>Welkom!</Text> */}

      <Pressable
        onPress={() => navigate('Login')}
        style={[start.buttonImage]}
      >
        <ImageBackground
          style={start.coverImage}
          source={{
            uri: 'https://www.allcaps.eu/img/default_cap.png',
          }}
        >
          <View style={start.textView}>
            <Text style={start.buttontext}>Inloggen!</Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable
        onPress={() => navigate('Register')}
        style={[start.buttonImage]}
      >
        <ImageBackground
          style={start.coverImage}
          source={{
            uri: 'https://www.allcaps.eu/img/default_cap.png',
          }}
        >
          <View style={start.textView}>
            <Text style={start.buttontext}>Registeren!</Text>
          </View>
        </ImageBackground>
      </Pressable>

      <Pressable
        onPress={() => navigate('AppNavigation', { screen: 'Account' })}
        style={[start.button, start.button]}
      >
        <Text style={[start.buttontext]}>Skip</Text>
      </Pressable>
    </SafeAreaView>
  )
}
