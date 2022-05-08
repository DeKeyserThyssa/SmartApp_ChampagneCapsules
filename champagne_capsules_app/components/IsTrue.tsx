import Capsule from '../interfaces/Capsule'
import { Feather, Ionicons } from '@expo/vector-icons'
import { CapsuleCard as styling } from '../styles/capsule'
import { CapsuleDetail } from './CapsuleDetail'
import { Image, Text, View } from 'react-native'
import { checkColor } from './Colors'
import color from '../styles/color'

// TODO: eigen styling!!!

export const KleurenVooraan = (item: Capsule) => {
  if (item.kleuren?.vooraan != undefined) {
    return (
      <Text style={[{ color: checkColor(item)}]}>Vooraan: {item.kleuren.vooraan}</Text>
    )
  }
}

export const KleurenOpzij = (item: Capsule) => {
  if (item.kleuren?.opzij != undefined) {
    return <Text>Opzij: {item.kleuren.opzij}</Text>
  }
}

export const KleurenRectoVerso = (item: Capsule) => {
  if (item.kleuren?.rectoverso != undefined) {
    return <Text>Recto/verso: {item.kleuren.rectoverso}</Text>
  }
}

export const TekstVooraan = (item: Capsule) => {
  if (item.tekst?.vooraan != undefined) {
    return <Text>Vooraan: {item.tekst.vooraan}</Text>
  }
}

export const TekstOpzij = (item: Capsule) => {
  if (item.tekst?.opzij != undefined) {
    return <Text>Opzij: {item.tekst.opzij}</Text>
  }
}

export const TekstRectoVerso = (item: Capsule) => {
  if (item.tekst?.rectoverso != undefined) {
    return <Text>Recto/verso: {item.tekst.rectoverso}</Text>
  }
}

export const IsGenummerd = (item: Capsule) => {
  if (item.genummerd == true) {
    return (
      <Feather
        name="hash"
        style={styling.symbol_true}
        size={16}
        color="black"
      />
    )
  } else {
    return (
      <Feather
        name="hash"
        style={styling.symbol_false}
        size={16}
        color="black"
      />
    )
  }
}
export const Oplage = (item: Capsule) => {
  if (item.oplage != null) {
    return (
      <View style={styling.oplage}>
        <Feather name="hash" size={24} color="black" />
        <Text style={styling.oplage}>{item.oplage} exemplaren</Text>
      </View>
    )
  }
}
export const IsBelgisch = (item: Capsule) => {
  if (item.belgisch == true) {
    return (
      <Image
        style={styling.vlag}
        source={{
          uri: 'https://flagcdn.com/16x12/be.png',
        }}
      />
    )
  }
}
export const IsPalm = (item: Capsule) => {
  if (item.palm == true) {
    return (
      <Ionicons
        name="brush"
        style={styling.symbol_true}
        size={16}
        color="black"
      />
    )
  } else {
    return (
      <Ionicons
        name="brush"
        style={styling.symbol_false}
        size={16}
        color="black"
      />
    )
  }
}
