import { StyleSheet } from "react-native";
import color from "./color";

export const CapsuleCard = StyleSheet.create({
    holder: {
        margin: 16,
    },

    button: {
        padding: 16,
        flexDirection: "column",
    },

    increment: {
        fontSize: 32,
        fontWeight: '800',
        color: color.alpha,
        flex: 0.3,
    },
    titel: {
        fontSize: 20,
        flex: 0.5,
    },
    huis: {
        fontSize: 16,
    },
    rating: {
        fontSize: 10,
        color: color.alpha,
    },
})