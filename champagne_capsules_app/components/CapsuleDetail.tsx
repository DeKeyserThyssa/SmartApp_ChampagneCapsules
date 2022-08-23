import { Alert, Image, Text, View, TouchableOpacity } from 'react-native'
import { CapsuleDetail as styling } from '../styles/capsuleDetails'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Capsule from '../interfaces/Capsule'
import {
  IsBelgisch,
  IsPalm,
  KleurenOpzij,
  KleurenRectoVerso,
  KleurenVooraan,
  Oplage,
  TekstOpzij,
  TekstRectoVerso,
  TekstVooraan,
} from './IsTrue'
import { checkColor } from './Colors'
import { endpoint } from '../utils/Backend'
import { get } from '../utils/data'

export const CapsuleDetail = ({ route }: { route: any }) => {
  const { payload } = route.params
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const [isFavourite, setFavourite] = useState<boolean>()
  const [isDouble, setDouble] = useState<boolean>()
  const [data, setData] = useState([])
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  useEffect(() => {
    navigation?.getParent()?.setOptions({ titel: payload.titel })
  }, [])

  const sendFavToBackend = async () => {
    const data = {
      CapsuleId: `${payload.CapsuleId}`,
    }
    const requestOptions = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    }
    fetch(`${endpoint}capsules/favourite`, requestOptions).then(
      (response) => response.json,
    )
  }

  const checkFavorite = () => {
    Alert.alert('Successvol toegevoegd/verwijderd in uw favorieten')
    if (isFavourite == true) {
      checkIsFavorite()
      sendFavToBackend()
    } else {
      checkIsFavorite()
      sendFavToBackend()
    }
  }

  const checkIsFavorite = async () => {
    get(`${endpoint}capsules/favourite`).then((capsules) => {
      setData(capsules.favoriteCapsules)
    })
    data.map((capsules: Capsule[], i: number) => {
      //@ts-ignore
      if (data[i].CapsuleId == payload.CapsuleId) {
        setFavourite(() => true)
      }
    })
  }

  const Favorite = () => {
    return <Feather name="heart" size={24} color="black" />
  }

  const sendDupeToBackend = async () => {
    const data = {
      CapsuleId: `${payload.CapsuleId}`,
    }
    const requestOptions = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    }
    fetch(`${endpoint}capsules/dubbel`, requestOptions).then(
      (response) => response.json,
    )
  }

  const checkDouble = () => {
    Alert.alert('Successvol toegevoegd/verwijderd in uw dubbele capsules')
    if (isFavourite == true) {
      checkIsDouble()
      sendDupeToBackend()
    } else {
      checkIsDouble()
      sendDupeToBackend()
    }
  }

  const checkIsDouble = async () => {
    get(`${endpoint}capsules/dubbel`).then((capsules) => {
      setData(capsules.favoriteCapsules)
    })
    data.map((capsules: Capsule[], i: number) => {
      //@ts-ignore
      if (data[i].CapsuleId == payload.CapsuleId) {
        setFavourite(() => true)
      }
    })
  }

  const Double = () => {
    return <FontAwesome name="handshake-o" size={24} color="black" />
  }

  return (
    <View style={styling.detail}>
      <View style={styling.nav}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigate('Overview')}
        />
        <View style={styling.nav}>
          <TouchableOpacity onPress={checkFavorite}>
            {Favorite()}
          </TouchableOpacity>
          <TouchableOpacity onPress={checkDouble}>
            {Double()}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styling.header}>
        <View style={styling.header_text}>
          <Text style={styling.titel}>{payload.titel}</Text>
          <Text style={styling.huis}>{payload.huis}</Text>
          {IsBelgisch(payload)}
          {IsPalm(payload)}
        </View>
        <View>
          <Image
            style={styling.foto}
            source={{
              uri: payload.foto,
            }}
          />
          {
            <Image
              style={styling.foto}
              source={{
                uri: payload.fotobinnenkant,
              }}
            />
          }
        </View>
      </View>
      <Text>{payload.beschrijving}</Text>
      {Oplage(payload)}
      <View style={styling.kleuren}>
        <Text style={styling.kleuren}>KLEUREN</Text>
        <Text>Vooraan: {payload.kleuren.Vooraan}</Text>
        <Text>Opzij: {payload.kleuren.Opzij}</Text>
        <Text>Recto Verso: {payload.kleuren.RectoVerso}</Text>
      </View>
      <View style={styling.tekst}>
        <Text style={styling.tekst}>TEKST</Text>
        <Text>Vooraan: {payload.tekst.Vooraan}</Text>
        <Text>Opzij: {payload.tekst.Opzij}</Text>
        <Text>Recto Verso: {payload.tekst.RectoVerso}</Text>
      </View>
    </View>
  )
}
