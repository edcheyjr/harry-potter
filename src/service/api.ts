import { Character, SearchParams, Houses, Spell } from '@/types'
import { APIUrl } from '@utils/constant'
import customFetch from '@utils/customFetch'
import { compareString } from '@utils/compareString'

export async function fetchAllCharacters({
    filter,
    houseID,
}: SearchParams): Promise<Character[]> {
    const BaseUrl = `${APIUrl}/characters`
    let Url = BaseUrl
    if (filter) {
        if (compareString(filter, 'house') && houseID) {
            Url = `${BaseUrl}/${filter}/${houseID?.toLocaleLowerCase()}`
        } else if (compareString(filter, 'house') && !houseID) {
            throw 'House id i.e gryffindor is missing'
        } else {
            Url = `${BaseUrl}/${filter}`
        }
    }
    // console.warn('URl', Url)

    const response = await customFetch({ url: Url })
    const data = await response.json()
    // console.log('data', data)
    if (response.status != 200) {
        throw data
    }
    return data as Character[]
}

export async function fetchACharacter(id: string): Promise<Character[]> {
    // console.log('fetching character', id)

    const response = await customFetch({ url: `${APIUrl}/character/${id}` })
    const data = await response.json()
    // console.log('data', data)
    if (response.status != 200) {
        throw data
    }
    return data as Character[]
}

export async function fetchAllSpell(): Promise<Spell[]> {
    const response = await customFetch({ url: `${APIUrl}/spells` })
    const data = await response.json()
    // console.log('data', data)
    if (response.status != 200) {
        throw data
    }
    return data as Spell[]
}
