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
        fontSize: 32,
        fontWeight: '800',
        color: color.alpha,
        flex: 0.2,
    },
    titel: {
        fontSize: 20,
    },
    huis: {
        fontSize: 16,
    },
    titel_huis: {
        flexDirection: 'column',
        flex: 0.8,
    },
    oplage: {
        flexDirection: 'row',
        alignItems: "center",
    },
    symbolen: {
        flexDirection: 'row',
    }
})