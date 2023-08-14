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

export type HouseColors = Record<Houses, ColorPair>

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

interface WandType {
  wood: string
  core: string
  length: number
}
export type AppContextType = {
  ref: MutableRefObject<HTMLDivElement | null>
}
export type Spell = {
  id: string
  name: string
  description: string
}
