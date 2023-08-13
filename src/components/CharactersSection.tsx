import { Houses } from 'types.d'
import CharacterCard from './Character'
import Title from './Title'

import React from 'react'

type Props = {}

const CharactersSection = (props: Props) => {
  return (
    <div className='pt-80 container mx-auto max-w-7xl px-10 flex flex-col'>
      <div className='pb-10 w-full'>
        <Title
          title='All characters'
          // desc='Hogwarts teachers and students'
        />
      </div>
      <div className='container mx-auto max-w-7xl gap-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch pb-10'>
        <CharacterCard id='asdas' name='Harry Potter' DOB='20 04 2001' />
        <CharacterCard id='asdas' name='Sam Maxima' />
        <CharacterCard id='asdas' name='Harry Potter' />
        <CharacterCard id='asdas' name='Harry Potter' />
        <CharacterCard id='asdas' name='Harry Potter' />
        <CharacterCard id='asdas' name='Harry Potter' />
      </div>
    </div>
  )
}

export default CharactersSection
