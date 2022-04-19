import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import capsules from '../data/capsules.json'
import Capsule from '../interfaces/Capsule'
import { CapsuleCard as styling } from '../styles/capsule'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

export const CapsuleDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.titel })
  }, [])

  return (
    <View>
      <Text style={styling.titel}>{payload.titel}</Text>
      <Text style={styling.huis}>{payload.huis}</Text>
      <Text>{payload.beschrijving}</Text>
      <View style={styling.oplage}>
        <Feather name="hash" size={24} color="black" />
        <Text>{payload.oplage} exemplaren</Text>
      </View>
      <View>
          <Text>KLEUREN</Text>
          <Text>Vooraan: {payload.kleuren.vooraan}</Text>
          <Text>Opzij: {payload.kleuren.opzij}</Text>
          <Text>Recto/verso: {payload.kleuren.rectoverso}</Text>
      </View>
      <View>
          <Text>TEKST</Text>
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
