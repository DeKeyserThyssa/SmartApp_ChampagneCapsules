import { Image, Text, View } from 'react-native'
import { CapsuleDetail as styling } from '../styles/capsuleDetails'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import Capsule from '../interfaces/Capsule'

export const CapsuleDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.titel })
  }, [])

  const isPalm = (payload: Capsule) => {
    if (payload.palm == true) {
      return <Ionicons name="brush" style={styling.symbol_true} size={16} color="black" />
    } else {
      return <Ionicons name="brush" style={styling.symbol_false} size={16} color="black" />
    }
  }

  return (
    <View style={styling.detail}>
      <View style={styling.header}>
        <View style={styling.header_text}>
          <Text style={styling.titel}>{payload.titel}</Text>
          <Text style={styling.huis}>{payload.huis}</Text>
          <Text>{isPalm(payload)}</Text>
        </View>
        <Image
          style={styling.foto}
          source={{
            uri: payload.foto,
          }}
        />
      </View>
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
      {/* <View style={styling.symbolen}> */}
      {/* <Text>{payload.isBelgisch}</Text> */}

      {/* </View> */}
    </View>
  )
}
