import { StyleSheet, TextInput } from 'react-native'
import color from '../styles/color'

export default () => {
  return (
    <TextInput
      style={styles.textSearch}
      placeholder={'Search capsules'}
      placeholderTextColor={color.grey[500]}
    />
  )
}

export const styles = StyleSheet.create({
  textSearch: {
    backgroundColor: color.grey[100],
    color: color.light,
    paddingVertical: 10,
    paddingHorizontal: 16,
    textAlign: 'center',
    marginBottom: 24,
    borderRadius: 50,
  },
})
