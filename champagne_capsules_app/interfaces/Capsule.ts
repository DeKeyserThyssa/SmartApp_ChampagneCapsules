interface Capsule {
    id: string
    titel: string
    huis: string
    genummerd?: boolean
    belgisch?: boolean
    palm?: boolean
    beschrijving?: string
    oplage?: string
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