import { Text } from 'react-native'
import Capsule from '../interfaces/Capsule'
import { CapsuleDetail } from '../styles/capsuleDetails'
import color from '../styles/color'

export const checkColor = (item: Capsule) => {
  switch (item.kleuren?.vooraan) {
    case 'rood':
      return color.rood
      break

    case 'groen':
      return color.groen
      break

    case 'geel':
      return color.geel
      break

    case 'zwart':
      return color.zwart
      break

    case 'wit':
      return color.wit
      break

    case 'roze':
      return color.roze
      break

    case 'crème':
      return color.crème
      break

    case 'grijs':
      return color.grijs
      break

    case 'bruin':
      return color.bruin
      break

    case 'blauw':
      return color.blauw
      break

    case 'oranje':
      return color.oranje
      break

    default:
      return color.alpha
  }
}
