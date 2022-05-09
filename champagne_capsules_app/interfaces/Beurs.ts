export default interface Beurs {
    id: string
    locatie: string
    datum: string
    adres: string
    uur: string
    organisator?: string
    prijs: string
    beschrijving?: string
}