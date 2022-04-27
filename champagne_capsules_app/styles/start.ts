import { StyleSheet } from 'react-native'
import { white } from 'react-native-paper/lib/typescript/styles/colors'
import color from './color'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 64,
    margin: 24,

  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  buttontext: {
    color: "white",
    fontSize: 24,
  },
  login: {
      marginBottom: 24
  },
  register: {
      marginTop: 24,
  },
  foto: {
    width: 400,
    height: 300

  }
})
