import { StyleSheet } from "react-native";
import color from "./color";

export const CapsuleCard = StyleSheet.create({
    holder: {
        margin: 16,
    },
    button: {
        padding: 16,
        flexDirection: "row",
        // borderWidth: 1,
    },
    foto: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    titel: {
        fontSize: 20,
    },
    huis: {
        fontSize: 16,
    },
    titel_huis: {
        flexDirection: 'column',
        flex: 0.9,
        paddingLeft: 8,
    },
    symbolen: {
        flexDirection: 'row',
        paddingVertical: 16,
    }
})