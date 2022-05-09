import { StyleSheet } from 'react-native'
import { black } from 'react-native-paper/lib/typescript/styles/colors'
import { checkColor } from '../components/Colors'
import color from './color'

export const Beurs = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 50,
    backgroundColor: '#d6d6d6',
    marginVertical: 8,
  },

  beurs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: 8,
  },

  locatie: {
    flexDirection: 'row',
    alignItems: "center",
    maxWidth: "50%"
  },

  datum: {
    flexDirection: 'row',
    marginLeft: 8
  },
  map: {
    marginLeft: 8
  }
})
