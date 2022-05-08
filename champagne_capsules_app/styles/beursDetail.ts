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
        flexDirection: "row",
        alignItems: "center",
        fontSize: 22,
    },
    date: {
        flexDirection: "row",
        marginVertical: 16,
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "space-around"
    },
    datum: {
        flexDirection: "row",
        alignItems: "center",
    },
    uur: {
        flexDirection: "row",
        alignItems: "center",
    },
    organisator: {
        marginVertical: 8,
        fontSize: 20,
        fontWeight: "bold",
    },
    tekst: {
        marginLeft: 8
    }
    
})