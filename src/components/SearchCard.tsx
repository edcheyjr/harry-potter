'use client'
import { calculateAge } from '@utils/calculateAge'
import { changeDateFormat } from '@utils/changeDateFormat'
import { resolveHouseNames } from '@utils/resolveHouseNames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Character } from 'types.d'
import { useContext } from 'react'
import { AppContext } from '@provider/app-context'

// TODO
type Props = {
  character: Character
}

const SearchCard = ({ character }: Props) => {
  const appContext = useContext(AppContext)
  const route = useRouter()
  const moveToCharacterPage = (e: React.MouseEvent<HTMLElement>) => {
    // close modal
    appContext?.handleCloseModal()
    // Move to the character page /character?id=id
    route.push(`/character/${character.id}`)
  }
  return (
    <tr
      onClick={moveToCharacterPage}
      className='cursor-pointer text-slate-400  bg-slate-300/5 hover:bg-slate-300/20 
    border-b border-slate-600 hover:border-red-500 transition duration-300 ease-in-out group'
    >
      {/* name */}
      <td className='px-3 lg:px-6 py-3.5 font-medium'>{character.name}</td>

      {/* age */}
      <td className='px-3 lg:px-6'>
        {character.yearOfBirth
          ? calculateAge(new Date().getFullYear(), character.yearOfBirth)
          : changeDateFormat(character.dateOfBirth || 'No DoB')}
      </td>
      {/* actor */}
      <td className='px-3 lg:px-6'>{character.actor || ''}</td>
      <td className='px-3 lg:px-6'>
        {character.house ? (
          <Image
            src={require(`/public/crests/${resolveHouseNames(
              character.house
            )}.png`)}
            className='h-auto w-8'
            title={character.house}
            alt={character.house}
          />
        ) : (
          'No House'
        )}
      </td>
    </tr>
  )
}

export default SearchCard
