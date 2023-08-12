export enum Houses {
  GRYFFINDOR = 'Gryffindor',
  HUFFLEPUFF = 'Hufflepuff',
  RAVENCLAW = 'Ravenclaw',
  SLYTHERIN = 'Slytherin',
}

interface ColorPair {
  primary: string
  secondary: string
}

export type HouseColors = Record<Houses, ColorPair>
