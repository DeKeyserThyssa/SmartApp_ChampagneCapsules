import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import capsules from '../data/capsules.json'
import Capsule from '../interfaces/Capsule'
import { CapsuleCard as styling } from '../styles/capsule'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Feather, Ionicons } from '@expo/vector-icons'

export const isGenummerd = (item: Capsule) => {
  if (item.genummerd == true) {
    return <Feather name="hash" style={styling.symbol_true} size={16} color="black" />
  } else {
    return <Feather name="hash" style={styling.symbol_false} size={16} color="black" />
  }
}
export const isBelgisch = (item: Capsule) => {
  if (item.belgisch == true) {
    return <Text>Be</Text>
  } else {
    return <></>
  }
}
export const isPalm = (item: Capsule) => {
  if (item.palm == true) {
    return <Ionicons name="brush" style={styling.symbol_true} size={16} color="black" />
  } else {
    return <Ionicons name="brush" style={styling.symbol_false} size={16} color="black" />
  }
}


export const CapsuleListing = ({ capsule }: { capsule: Capsule }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  // const isGenummerd = (item: Capsule) => {
  //   if (item.genummerd == true) {
  //     return <Feather name="hash" style={styling.symbol_true} size={16} color="black" />
  //   } else {
  //     return <Feather name="hash" style={styling.symbol_false} size={16} color="black" />
  //   }
  // }
  // const isBelgisch = (item: Capsule) => {
  //   if (item.belgisch == true) {
  //     return <Text>Be</Text>
  //   } else {
  //     return <></>
  //   }
  // }
  // const isPalm = (item: Capsule) => {
  //   if (item.palm == true) {
  //     return <Ionicons name="brush" style={styling.symbol_true} size={16} color="black" />
  //   } else {
  //     return <Ionicons name="brush" style={styling.symbol_false} size={16} color="black" />
  //   }
  // }
  
  const renderItem = ({ item }: { item: Capsule }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('Detail', { payload: item })}
        style={styling.button}
      >
        <Image
          style={styling.foto}
          source={{
            uri: item.foto
          }}
        />
        <View style={styling.titel_huis}>
          <Text style={styling.titel}>{item.titel}</Text>
          <Text style={styling.huis}>{item.huis}</Text>
        </View>
        <View style={styling.symbolen}>
          {isBelgisch(item)}
          {isGenummerd(item)}
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
