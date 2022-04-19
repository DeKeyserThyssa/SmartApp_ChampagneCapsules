import { StyleSheet } from 'react-native'
import color from './color'

export default StyleSheet.create({
  //BACKGOURNDS
  backgroundDark: {
    backgroundColor: color.dark,
  },
  backgroundLight: {
    backgroundColor: color.light,
  },

  backgroundGrey100: {
    backgroundColor: color.grey[100],
  },
  backgroundGrey500: {
    backgroundColor: color.grey[500],
  },
  backgroundGrey900: {
    backgroundColor: color.grey[900],
  },

  //TEXT-COLORS
  TextDark: {
    color: color.dark,
  },
  TextLight: {
    color: color.light,
  },

  textPlayFair: {
    fontFamily: 'PlayfairDisplay_400Regular',
  },

  container: {
    marginHorizontal: 16,
  },

  // STYLING
  rounded: {
    borderRadius: 16,
  },
})
