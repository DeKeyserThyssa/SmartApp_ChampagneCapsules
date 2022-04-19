export default interface Capsule {
    id: string
    foto: string
    titel: string
    huis: string
    genummerd?: boolean
    belgisch?: boolean
    palm?: boolean
    beschrijving?: string
    oplage?: number
    kleuren?: {
        vooraan?: string
        opzij?: string
        rectoverso?: string
    }
    tekst?: {
        vooraan?: string
        opzij?: string
        rectoverso?: string
    }
}