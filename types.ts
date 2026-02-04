import type { Dispatch, RefObject, SetStateAction } from 'react'

interface AnyObject {
    [key: string]: any
}

export enum Houses {
    GRYFFINDOR = 'Gryffindor',
    HUFFLEPUFF = 'Hufflepuff',
    RAVENCLAW = 'Ravenclaw',
    SLYTHERIN = 'Slytherin',
}
export interface ColorPair {
    primary: string
    secondary: string
}

export interface HouseColors {
    text: {
        primary: Record<Houses, string>
        secondary: Record<Houses, string>
    }
    bg: {
        primary: Record<Houses, string>
        secondary: Record<Houses, string>
    }
    border: {
        primary: Record<Houses, string>
        secondary: Record<Houses, string>
    }
}

export interface Character {
    id: string
    name: string
    alternate_names: String[]
    species?: string
    gender?: string
    house?: string
    dateOfBirth?: string
    yearOfBirth?: number
    wizard: boolean
    ancestry?: string
    eyeColour?: string
    hairColour?: string
    wand?: WandType
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternate_actors: String[]
    alive: boolean
    image?: string
}

type WandKeys = 'wood' | 'core' | 'length'
type WandValues = string | number

type WandType = Record<WandKeys, WandValues>

export type AppContextType = {
    ref: RefObject<HTMLDivElement | null>
    house: Houses | null
    setHouse: Dispatch<SetStateAction<Houses | null>>
    activeFilter: FilterTypes
    currentPage: number
    setFilters: Dispatch<SetStateAction<FilterTypes>>
    characters: Character[]
    setCurrentPage: Dispatch<SetStateAction<number>>
    setCharacters: Dispatch<SetStateAction<Character[]>>
    isSearchModalOpen: boolean
    isSpellModalOpen: boolean
    isLoadingCharacters: boolean
    setIsLoadingCharacters: Dispatch<SetStateAction<boolean>>
    handleOpenSearch: () => void
    handleCloseSearch: () => void
    handleOpenSpell: () => void
    handleCloseSpell: () => void
    cleanFilters: () => void
    filtering: ({
        name,
        value,
    }: {
        name: string
        value: boolean | Houses
    }) => void
}
export type Spell = {
    id: string
    name: string
    description: string
}
export type Filters = 'staff' | 'students' | 'house'
export type SearchParams = {
    filter?: Filters
    houseID?: Houses
}

export interface FilterTypes extends Record<Filters, Houses | boolean> {
    staff: boolean
    students: boolean
    house: false | Houses
}
