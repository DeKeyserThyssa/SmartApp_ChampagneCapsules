import { useIsFocused, useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { View } from "react-native"
import { CapsuleListing } from "../../components/CapsuleListing"

export const Overview = ({
    navigation,
}: {
    navigation: any
}) => {
    const nav = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        nav.getParent()?.setOptions({title: 'Overview'})
    }, [isFocused]) // TODO: check correct dependency

    return (
        <View>
            <CapsuleListing navigation={navigation}/>
        </View>
    )
}