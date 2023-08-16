import { HouseColors } from './types.d'
import { SetStateAction } from 'react'

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
}
export type Spell = {
  id: string
  name: string
  description: string
}
export type FilterTypes = {
  filter?: 'students' | 'staff' | 'house'
  houseID?: Houses
}
