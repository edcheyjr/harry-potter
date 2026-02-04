import { Houses } from '@/types'

export function resolveHouseNames(house?: string): Houses {
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
    return Houses.GRYFFINDOR
}
