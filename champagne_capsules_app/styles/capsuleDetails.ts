import { StyleSheet } from "react-native";
import { checkColor } from "../components/Colors";
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
    header: {
        flexDirection: "row",
        // paddingBottom: 16,
        justifyContent: "space-between"
    },
    header_text: {
        maxWidth: 250,
        paddingRight: 16,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
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
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8
    }
    
})