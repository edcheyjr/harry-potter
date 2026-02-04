import { HouseColors, House } from '@/types'
import { resolveHouseNames } from './resolveHouseNames'
export function handleColor(
    house: House,
    colorType: 'primary' | 'secondary',
    colorFormat: 'text' | 'bg' | 'border',
): string {
    const validHouses = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin']
    const validColorTypes = ['primary', 'secondary']
    const validColorFormats = ['text', 'bg', 'border']

    if (!validHouses.includes(house.toLowerCase())) {
        throw new Error(`Invalid house: ${house}`)
    }

    if (!validColorTypes.includes(colorType)) {
        throw new Error(`Invalid color type: ${colorType}`)
    }

    if (!validColorFormats.includes(colorFormat)) {
        throw new Error(`Invalid color format: ${colorFormat}`)
    }

    const houseColors: HouseColors = {
        text: {
            primary: {
                Gryffindor: 'text-primary-gryffindor',
                Hufflepuff: 'text-primary-hufflepuff',
                Ravenclaw: 'text-primary-ravenclaw',
                Slytherin: 'text-primary-slytherin',
            },
            secondary: {
                Gryffindor: 'text-secondary-gryffindor',
                Hufflepuff: 'text-secondary-hufflepuff',
                Ravenclaw: 'text-secondary-ravenclaw',
                Slytherin: 'text-secondary-slytherin',
            },
        },
        bg: {
            primary: {
                Gryffindor: 'bg-primary-gryffindor',
                Hufflepuff: 'bg-primary-hufflepuff',
                Ravenclaw: 'bg-primary-ravenclaw',
                Slytherin: 'bg-primary-slytherin',
            },
            secondary: {
                Gryffindor: 'bg-secondary-gryffindor',
                Hufflepuff: 'bg-secondary-hufflepuff',
                Ravenclaw: 'bg-secondary-ravenclaw',
                Slytherin: 'bg-secondary-slytherin',
            },
        },
        border: {
            primary: {
                Gryffindor: 'border-primary-gryffindor',
                Hufflepuff: 'border-primary-hufflepuff',
                Ravenclaw: 'border-primary-ravenclaw',
                Slytherin: 'border-primary-slytherin',
            },
            secondary: {
                Gryffindor: 'border-secondary-gryffindor',
                Hufflepuff: 'border-secondary-hufflepuff',
                Ravenclaw: 'border-secondary-ravenclaw',
                Slytherin: 'border-secondary-slytherin',
            },
        },
    }

    return houseColors[colorFormat][colorType][resolveHouseNames(house)]
}
