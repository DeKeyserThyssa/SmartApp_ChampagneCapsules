import { StyleSheet } from 'react-native'
import { black } from 'react-native-paper/lib/typescript/styles/colors'
import { checkColor } from '../components/Colors'
import color from './color'

export const Beurs = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 50,
    backgroundColor: '#d6d6d6'
  },

  beurs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },

  locatie: {
    flexDirection: 'row',
  },

  datum: {
    flexDirection: 'row',
    marginLeft: 8

  },
})
