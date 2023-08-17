'use client'
import { resolveHouseNames } from '@utils/resolveHouseNames'
import Image from 'next/image'
import React from 'react'
import { Character } from 'types.d'

// TODO
type Props = {
  character: Character
}

const SearchCard = ({ character }: Props) => {
  return (
    <tr
      onClick={() => console.log(character)}
      className='cursor-pointer text-slate-400  bg-slate-300/5 hover:bg-slate-300/20 
    border-b border-slate-600 hover:border-red-500 transition duration-300 ease-in-out group'
    >
      {/* name */}
      <td className='px-3 lg:px-6 py-3.5 font-medium'>{character.name}</td>

      {/* age */}
      <td className='px-3 lg:px-6'>{character.dateOfBirth}</td>
      {/* actor */}
      <td className='px-3 lg:px-6'>{character.actor}</td>
      <td className='px-3 lg:px-6'>
        {character.house && (
          <Image
            src={require(`/public/crests/${resolveHouseNames(
              character.house
            )}.png`)}
            className='h-auto w-8'
            title={character.name}
            alt={character.name}
          />
        )}
      </td>
    </tr>
  )
}

export default SearchCard
