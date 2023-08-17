import { HouseColors } from './types.d'
import { SetStateAction } from 'react'

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
    primary: Record<sHouse, string>
    secondary: Record<House, string>
  }
  border: {
    primary: Record<House, string>
    secondary: Record<House, string>
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

type WandType = Record<WandKeys | WandValues>

export type AppContextType = {
  ref: MutableRefObject<HTMLDivElement | null>
  house: Houses | null
  setHouse: Dispatch<SetStateAction<Houses | null>>
  activeFilter: Record<Filters, boolean>
  setFilters: Dispatch<SetStateAction<Record<Filters, boolean>>>
  characters: Character[]
  setCharacters: Dispatch<SetStateAction<Character[]>>
  isModalOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
  filtering: ({ name, value }: { name: string; value: boolean }) => void
}
export type Spell = {
  id: string
  name: string
  description: string
}
export type Filters = 'staff' | 'students' | 'house'
export type FilterTypes = {
  filter?: Filters
  houseID?: Houses
}
