import { Image, Text, View } from 'react-native'
import { BeursDetail as styling } from '../styles/beursDetail'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Capsule from '../interfaces/Capsule'

export const BeursDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.locatie })
  }, [])

  return (
    <View style={styling.detail}>
      <Text style={styling.locatie}>{payload.locatie}</Text>
      <View style={styling.adres}>
        <Feather name="map-pin" size={20} color="black" />
        <Text style={styling.adres}>{payload.adres}</Text>
      </View>

      <View style={styling.date}>
        <View style={styling.datum}>
          <FontAwesome name="calendar" size={20} color="black" />
          <Text style={styling.tekst}>{payload.datum}</Text>
        </View>
        <View style={styling.uur}>
          <Feather name="clock" size={20} color="black" />
          <Text style={styling.tekst}>{payload.uur}</Text>
        </View>
      </View>
      <Text style={styling.organisator}>{payload.organisator}</Text>
      <Text>{payload.prijs}</Text>
      <Text>{payload.beschrijving}</Text>
    </View>
  )
}
