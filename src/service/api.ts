import { Character, Houses, Spell } from 'types.d'
import { APIUrl } from 'utils/constant'

console.log('apiURl', APIUrl)

type FilterTypes = {
  filter?: 'students' | 'staff' | 'house'
  houseID?: Houses
}

export async function fetchAllCharacters({
  filter,
  houseID,
}: FilterTypes): Promise<Character[]> {
  const BaseUrl = `${APIUrl}/characters`
  let Url = ''
  if (filter) {
    if (filter == 'house' && houseID) {
      Url = `${BaseUrl}/${filter}/${houseID?.toLocaleLowerCase()}`
    } else {
      throw 'House id i.e gryffindor is missing'
    }
    Url = `${BaseUrl}/${filter}`
  }
  try {
    const response = await fetch(Url)
    const data = await response.json()
    if (response.status != 200) {
      throw data
    }
    return data as Character[]
  } catch (error) {
    console.log(error)
  }
  return []
}

export async function fetchACharacter(id: string): Promise<Character[]> {
  try {
    const response = await fetch(`${APIUrl}/character/${id}`)
    const data = await response.json()
    if (response.status != 200) {
      throw data
    }
    return data as Character[]
  } catch (error) {
    console.log(error)
  }
  return []
}

export async function fetchAllSpell(): Promise<Spell[]> {
  try {
    const response = await fetch(`${APIUrl}/spells`)
    const data = await response.json()
    if (response.status != 200) {
      throw data
    }
    return data as Spell[]
  } catch (error) {
    console.log(error)
  }
  return []
}
