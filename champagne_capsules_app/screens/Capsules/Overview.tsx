import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CapsuleListing } from '../../components/CapsuleListing'
import SearchBar from '../../components/SearchBar'
import Capsule from '../../interfaces/Capsule'
import core from '../../styles/core'

export const Overview = ({ capsule }: { capsule: Capsule }) => {
  const nav = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    nav.getParent()?.setOptions({ title: 'Capsules' })
  }, [isFocused]) // TODO: check correct dependency

  return (
    <SafeAreaView style={core.container}>
      <SearchBar />
      <CapsuleListing capsule={capsule} />
    </SafeAreaView>
  )
}
