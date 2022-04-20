import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { CapsuleCard as styling } from '../styles/capsule'
import beurzen from '../data/beurzen.json'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import Beurs from '../interfaces/Beurs'

export const BeursListing = ({ beurs }: { beurs: Beurs }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  const renderItem = ({ item }: { item: Beurs }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('Detail', { payload: item })}
        style={styling.button}
      >
        <Text>{item.locatie}</Text>
        <Text>{item.datum}</Text>
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
