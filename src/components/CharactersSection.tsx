'use client'

import CharacterCard from './Character'
import Title from './Title'
import React, { useContext } from 'react'
import { AppContext } from '@provider/app-context'
import { Character, Houses } from 'types.d'
import { resolveHouseNames } from '@utils/resolveHouseNames'

type Props = {
  characters: Character[]
}

const CharactersSection = ({ characters }: Props) => {
  const appContext = useContext(AppContext)
  const ref = appContext?.ref
  return (
    <div className='pt-32 container mx-auto max-w-7xl px-10'>
      <div ref={ref} className=' flex flex-col pt-28'>
        <div className='pb-10 w-full'>
          <Title
            title='All characters'
            // desc='Hogwarts teachers and students'
          />
        </div>
        <div className='container mx-auto max-w-7xl gap-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch pb-10'>
          {characters.map((character) => {
            return (
              <CharacterCard
                id={character.id}
                name={character.name}
                DOB={character.dateOfBirth}
                key={character.id}
                imageSrc={character.image}
                house={resolveHouseNames(character.house)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default CharactersSection
