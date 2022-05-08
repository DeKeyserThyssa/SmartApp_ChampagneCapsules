import { StyleSheet } from "react-native";
import color from "./color";

export const BeursDetail = StyleSheet.create({

    detail: {
        padding: 16,
    },
    locatie: {
        fontSize: 28,
    },
    adres: {
        fontSize: 22,
    },
    date: {
        flexDirection: "row",
        marginVertical: 16,
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "space-around"
    },
    icon: {
        flexDirection: "row",
        alignItems: "center",
    },
    organisator: {
        marginLeft: 8,
        marginVertical: 16,
        fontSize: 20,
        fontWeight: "bold",
    },
    tekst: {
        marginLeft: 8
    },
    prijs: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 12,
    },
    beschrijving: {
        marginVertical: 24,
    }
    
})