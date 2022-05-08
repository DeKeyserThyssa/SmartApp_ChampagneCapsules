export default interface Capsule {
    id: string
    foto: string
    fotobinnenkant: string
    titel: string
    huis: string
    genummerd?: boolean
    belgisch?: boolean
    palm?: boolean
    beschrijving?: string
    oplage?: number
    kleuren?: {
        vooraan?: {}
        opzij?: {}
        rectoverso?: {}
    }
    tekst?: {
        vooraan?: string
        opzij?: string
        rectoverso?: string
    }
}