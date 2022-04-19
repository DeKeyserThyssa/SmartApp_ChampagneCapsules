import { Text, View } from 'react-native'
import { CapsuleDetail as styling } from '../styles/capsuleDetails'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Feather } from '@expo/vector-icons'

export const CapsuleDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.titel })
  }, [])

  return (
    <View style={styling.detail}>
      <Text style={styling.titel}>{payload.titel}</Text>
      <Text style={styling.huis}>{payload.huis}</Text>
      <Text>{payload.beschrijving}</Text>
      <View style={styling.oplage}>
        <Feather name="hash" size={24} color="black" />
        <Text style={styling.oplage}>{payload.oplage} exemplaren</Text>
      </View>
      <View style={styling.kleuren}>
          <Text style={styling.kleuren}>KLEUREN</Text>
          <Text>Vooraan: {payload.kleuren.vooraan}</Text>
          <Text>Opzij: {payload.kleuren.opzij}</Text>
          <Text>Recto/verso: {payload.kleuren.rectoverso}</Text>
      </View>
      <View style={styling.tekst}>
          <Text style={styling.tekst}>TEKST</Text>
          <Text>Vooraan: {payload.tekst.vooraan}</Text>
          <Text>Opzij: {payload.tekst.opzij}</Text>
          <Text>Recto/verso: {payload.tekst.rectoverso}</Text>
      </View>
      {/* <View style={styling.symbolen}>
        <Text>{payload.isBelgisch}</Text>
        <Text>{payload.isPalm}</Text>
      </View> */}
    </View>
  )
}
