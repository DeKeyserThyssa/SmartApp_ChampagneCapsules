import { StyleSheet } from "react-native";
import color from "./color";

export const CapsuleDetail = StyleSheet.create({

    detail: {
        padding: 16,
    },
    titel: {
        fontSize: 28,
    },
    huis: {
        fontSize: 22,
    },
    beschrijving: {
        fontSize: 16,
    },
    foto: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    oplage: {
        flexDirection: 'row',
        alignItems: "center",
        fontSize: 20,
        padding: 8,
    },
    kleuren: {
        marginVertical: 8,
        fontSize: 20,
        fontWeight: "bold",
    },
    tekst: {
        marginVertical: 8,
        fontSize: 20,
        fontWeight: "bold",
    },

})