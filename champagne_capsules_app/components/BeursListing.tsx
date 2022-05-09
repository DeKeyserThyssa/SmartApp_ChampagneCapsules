import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { Beurs as styling } from '../styles/beurs'
import beurzen from '../data/beurzen.json'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import Beurs from '../interfaces/Beurs'
import { Feather, FontAwesome } from '@expo/vector-icons'

export const BeursListing = ({ beurs }: { beurs: Beurs }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  const renderItem = ({ item }: { item: Beurs }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('DetailBeurzen', { payload: item })}
        style={styling.button}
      >
        <View style={styling.beurs}>
          <View style={styling.locatie}>
            <Feather name="map-pin" size={20} color="black" />
            <Text style={styling.map}>{item.locatie}</Text>
          </View>
          <View style={styling.datum}>
            <FontAwesome name="calendar" size={20} color="black" />
            <Text style={styling.datum}>{item.datum}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={beurzen}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}
