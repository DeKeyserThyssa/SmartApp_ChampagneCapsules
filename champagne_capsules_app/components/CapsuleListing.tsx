import { FlatList, Text, TouchableOpacity } from 'react-native'
import capsules from '../data/capsules.json'
import { CapsuleCard as styling } from '../styles/capsule'

export const CapsuleListing = ({ navigation }: { navigation: any }) => {
  const isGenummerd = ({ item }: { item: Capsule }) => {
    if (item.genummerd == true) {
      return <Text>Genummerd</Text>
    }
  }
  let count = 1
  const renderItem = ({ item }: { item: Capsule }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { payload: item })}
        style={styling.button}
      >
        <Text style={styling.increment}>
          {(count++).toString().padStart(2, '0')}
        </Text>
        <Text style={styling.titel}>{item.titel}</Text>
        <Text style={styling.huis}>{item.huis}</Text>
        <Text>{isGenummerd}</Text>
        <Text>{item.belgisch}</Text>
        <Text>{item.palm}</Text>
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
