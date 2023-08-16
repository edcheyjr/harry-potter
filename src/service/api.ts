import { Character, FilterTypes, Houses, Spell } from 'types.d'
import { APIUrl } from '@utils/constant'
import customFetch from '@utils/customFetch'

export async function fetchAllCharacters({
  filter,
  houseID,
}: FilterTypes): Promise<Character[]> {
  const BaseUrl = `${APIUrl}/characters`
  let Url = BaseUrl
  if (filter) {
    if (filter.toLocaleLowerCase() == 'house' && houseID) {
      Url = `${BaseUrl}/${filter}/${houseID?.toLocaleLowerCase()}`
    } else if (filter.toLocaleLowerCase() == 'house' && !houseID) {
      throw 'House id i.e gryffindor is missing'
    }
    Url = `${BaseUrl}/${filter}`
  }

  const response = await customFetch({ url: Url })
  const data = await response.json()
  // console.log('data', data)
  if (response.status != 200) {
    throw data
  }
  return data as Character[]
}

export async function fetchACharacter(id: string): Promise<Character[]> {
  console.log('fetching character', id)

  const response = await customFetch({ url: `${APIUrl}/character/${id}` })
  const data = await response.json()
  console.log('data', data)
  if (response.status != 200) {
    throw data
  }
  return data as Character[]
}

export async function fetchAllSpell(): Promise<Spell[]> {
  const response = await customFetch({ url: `${APIUrl}/spells` })
  const data = await response.json()
  if (response.status != 200) {
    throw data
  }
  return data as Spell[]
}
