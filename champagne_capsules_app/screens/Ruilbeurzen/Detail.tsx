import { ParamListBase, useIsFocused, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { BeursDetail } from "../../components/BeursDetail"
import core from "../../styles/core"
import { SafeAreaView } from 'react-native-safe-area-context'

export default ({route}: {route: any }) => {

  return (
    <SafeAreaView>
      <BeursDetail route={route}/>
    </SafeAreaView>
  )
}