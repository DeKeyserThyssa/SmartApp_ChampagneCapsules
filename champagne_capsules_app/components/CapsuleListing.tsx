import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import capsules from '../data/capsules.json'
import Capsule from '../interfaces/Capsule'
import { CapsuleCard as styling } from '../styles/capsule'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Feather, Ionicons } from '@expo/vector-icons'
import { IsBelgisch, IsGenummerd, IsPalm } from './IsTrue'
import { useEffect, useState } from 'react'
import { endpoint } from '../utils/Backend'

export const CapsuleListing = ({ capsule }: { capsule: Capsule }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  // const [text, setText] = useState<string | undefined>()
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const resp = await fetch(`${endpoint}capsules`)
    const item = await resp.json()
    setItem(item)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  })

  const renderItem = ({ item }: { item: Capsule }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('Detail', { payload: item })}
        style={styling.button}
      >
        <Image
          style={styling.foto}
          source={{
            uri: item.foto,
          }}
        />
        <View style={styling.titel_huis}>
          <Text style={styling.titel}>{item.titel}</Text>
          <Text style={styling.huis}>{item.huis}</Text>
        </View>
        <View style={styling.symbolen}>
          {IsBelgisch(item)}
          {IsGenummerd(item)}
          {IsPalm(item)}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={item}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}
