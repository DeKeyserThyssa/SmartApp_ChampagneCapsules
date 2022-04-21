import { Image, Text, View } from 'react-native'
import { CapsuleDetail as styling } from '../styles/capsuleDetails'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import Capsule from '../interfaces/Capsule'

export const BeursDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.locatie })
  }, [])

  return (
    <View style={styling.detail}>
      <Text style={styling.titel}>{payload.locatie}</Text>
      <Text style={styling.huis}>{payload.adres}</Text>
      <View style={styling.kleuren}>
        <Text>Opzij: {payload.datum}</Text>
        <Text>Recto/verso: {payload.uur}</Text>
      </View>
      <Text style={styling.tekst}>{payload.organisator}</Text>
      <Text>{payload.prijs}</Text>
      <Text>{payload.beschrijving}</Text>
    </View>
  )
}
