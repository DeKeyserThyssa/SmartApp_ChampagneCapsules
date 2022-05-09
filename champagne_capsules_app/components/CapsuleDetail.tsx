import { Image, Text, View } from 'react-native'
import { CapsuleDetail as styling } from '../styles/capsuleDetails'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Capsule from '../interfaces/Capsule'
import {
  IsBelgisch,
  IsPalm,
  KleurenOpzij,
  KleurenRectoVerso,
  KleurenVooraan,
  Oplage,
  TekstOpzij,
  TekstRectoVerso,
  TekstVooraan,
} from './IsTrue'
import { checkColor } from './Colors'

export const CapsuleDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.titel })
  }, [])

  return (
    <View style={styling.detail}>
      <View style={styling.nav}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigate('Overview')}
        />
        <View style={styling.nav}>
          <Feather name="heart" size={24} color="black" />
          <FontAwesome name="handshake-o" size={24} color="black" />
        </View>
      </View>

      <View style={styling.header}>
        <View style={styling.header_text}>
          <Text style={styling.titel}>{payload.titel}</Text>
          <Text style={styling.huis}>{payload.huis}</Text>
          {IsBelgisch(payload)}
          {IsPalm(payload)}
        </View>
        <View>
          <Image
            style={styling.foto}
            source={{
              uri: payload.foto,
            }}
          />
          {
            <Image
              style={styling.foto}
              source={{
                uri: payload.fotobinnenkant,
              }}
            />
          }
        </View>
      </View>
      <Text>{payload.beschrijving}</Text>
      {Oplage(payload)}
      <View style={styling.kleuren}>
        <Text style={styling.kleuren}>KLEUREN</Text>
        {KleurenVooraan(payload)}
        {KleurenOpzij(payload)}
        {KleurenRectoVerso(payload)}
      </View>
      <View style={styling.tekst}>
        <Text style={styling.tekst}>TEKST</Text>
        {TekstVooraan(payload)}
        {TekstOpzij(payload)}
        {TekstRectoVerso(payload)}
      </View>
    </View>
  )
}
