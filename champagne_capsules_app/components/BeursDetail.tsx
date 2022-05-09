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
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.locatie })
  }, [])

  return (
    <View style={styling.detail}>
      <Feather style={styling.back} name="arrow-left" size={24} color="black" onPress={() => navigate('OverviewBeurzen')} />
      <Text style={styling.locatie}>{payload.locatie}</Text>
      <View style={styling.icon}>
        <Feather style={styling.map} name="map-pin" size={20} color="black" />
        <Text style={styling.adres}>{payload.adres}</Text>
      </View>

      <View style={styling.date}>
        <View style={styling.icon}>
          <FontAwesome name="calendar" size={20} color="black" />
          <Text style={styling.tekst}>{payload.datum}</Text>
        </View>
        <View style={styling.icon}>
          <Feather name="clock" size={20} color="black" />
          <Text style={styling.tekst}>{payload.uur}</Text>
        </View>
      </View>
      <View style={styling.icon}>
        <FontAwesome name="group" size={16} color="black" />
        <Text style={styling.organisator}>{payload.organisator}</Text>
      </View>
      <View style={styling.icon}>
        <FontAwesome name="euro" size={24} color="black" />
        <Text style={styling.prijs}>{payload.prijs}</Text>
      </View>

      <Text style={styling.beschrijving}>{payload.beschrijving}</Text>
    </View>
  )
}
