import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import capsules from '../data/capsules.json'
import { CapsuleCard as styling } from '../styles/capsule'

export const CapsuleListing = ({ navigation }: { navigation: any }) => {
  const isGenummerd = ({ item }: { item: Capsule }) => {
    if (item.genummerd == true) {
      return <Text>Genummerd</Text>
    }
  }
  const isBelgisch = ({ item }: { item: Capsule }) => {
    if (item.belgisch == true) {
      return <Text>Belgisch</Text>
    }
  }
  const isPalm = ({ item }: { item: Capsule }) => {
    if (item.palm == true) {
      return <Text>Palm</Text>
    }
  }
  let count = 1
  const renderItem = ({ item }: { item: Capsule }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { payload: item })}
        style={styling.button}
      >
        <Text style={styling.foto}>
          {(count++).toString().padStart(2, '0')}
        </Text>
        <View style={styling.titel_huis}>
          <Text style={styling.titel}>{item.titel}</Text>
          <Text style={styling.huis}>{item.huis}</Text>
        </View>
        <View style={styling.symbolen}>
          <Text>{isGenummerd}</Text>
          <Text>{isBelgisch}</Text>
          <Text>{isPalm}</Text>
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
