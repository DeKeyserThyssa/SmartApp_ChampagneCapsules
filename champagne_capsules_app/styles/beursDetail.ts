import { StyleSheet } from "react-native";
import color from "./color";

export const BeursDetail = StyleSheet.create({

    detail: {
        paddingRight: 32,
        paddingLeft: 16
    },
    locatie: {
        fontSize: 28,
        marginBottom: 16
    },
    adres: {
        fontSize: 22,
    },
    map: {
        marginRight: 8,
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
    },
    back: {
        marginBottom: 32
    }
    
})