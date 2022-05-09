import { StyleSheet } from "react-native";
import color from "./color";

export const CapsuleCard = StyleSheet.create({
    holder: {
        margin: 16,
    },
    button: {
        padding: 16,
        flexDirection: "row",
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
    },
    symbol_true: {
        opacity: 1.0
    },
    symbol_false: {
        opacity: 0
    },
    vlag: {
        width: 16,
        height: 16
    },

    oplage: {
        flexDirection: 'row',
        alignItems: "center",
        fontSize: 20,
        padding: 8,
    },
})