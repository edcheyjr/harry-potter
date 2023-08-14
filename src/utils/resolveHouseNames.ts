import { Houses } from 'types.d'

export function resolveHouseNames(house?: string): Houses | undefined {
  if (house) {
    const normalizedHouse = house.trim().toLowerCase()

    switch (normalizedHouse) {
      case Houses.GRYFFINDOR.toLowerCase():
        return Houses.GRYFFINDOR
      case Houses.HUFFLEPUFF.toLowerCase():
        return Houses.HUFFLEPUFF
      case Houses.RAVENCLAW.toLowerCase():
        return Houses.RAVENCLAW
      case Houses.SLYTHERIN.toLowerCase():
        return Houses.SLYTHERIN
    }
  }
}
