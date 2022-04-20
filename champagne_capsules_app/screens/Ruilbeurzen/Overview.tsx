import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BeursListing } from '../../components/BeursListing'
import SearchBar from '../../components/SearchBar'
import Beurs from '../../interfaces/Beurs'
import core from '../../styles/core'

export const Overview = ({ beurs }: { beurs: Beurs }) => {
  const nav = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    nav.getParent()?.setOptions({ title: 'Beurs' })
  }, [isFocused]) // TODO: check correct dependency

  return (
    <SafeAreaView style={core.container}>
      <BeursListing beurs={beurs} />
    </SafeAreaView>
  )
}