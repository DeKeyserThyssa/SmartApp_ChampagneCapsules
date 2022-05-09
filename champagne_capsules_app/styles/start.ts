import { StyleSheet } from 'react-native'
import { white } from 'react-native-paper/lib/typescript/styles/colors'
import color from './color'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 64,
    margin: 24,
  },
  foto: {
    width: 300,
    height: 100,
    marginBottom: 32,
  },
  buttonImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 24,
    borderRadius: 50,
    backgroundColor: '#f4e3b6'
  },
  buttontext: {
    color: 'black',
    fontSize: 24,
  },
  welkom: {
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    top: 48,
  },
  coverImage: {
    width: 150,
    height: 150,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
