import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import capsules from '../data/capsules.json'
import Capsule from '../interfaces/Capsule'
import { CapsuleCard as styling } from '../styles/capsule'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Feather, Ionicons } from '@expo/vector-icons'

export const CapsuleListing = ({ capsule }: { capsule: Capsule }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  const isGenummerd = (item: Capsule) => {
    if (item.genummerd == true) {
      return <Feather name="hash" size={16} color="black" />
    } else {
      return <></>
    }
  }
  const isBelgisch = (item: Capsule) => {
    if (item.belgisch == true) {
      return <Text>Belgisch</Text>
    }
  }
  const isPalm = (item: Capsule) => {
    if (item.palm == true) {
      return <Ionicons name="brush" size={16} color="black" />
    }
  }
  let count = 1
  const renderItem = ({ item }: { item: Capsule }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('Detail', { payload: item })}
        style={styling.button}
      >
        {/* <img src={item.foto} /> */}
        <View style={styling.titel_huis}>
          <Text style={styling.titel}>{item.titel}</Text>
          <Text style={styling.huis}>{item.huis}</Text>
        </View>
        <View style={styling.symbolen}>
          {isGenummerd(item)}
          {isBelgisch(item)}
          {isPalm(item)}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={capsules}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}
