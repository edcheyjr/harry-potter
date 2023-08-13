'use client'

import CharacterCard from './Character'
import Title from './Title'
import React, { useContext } from 'react'
import { AppContext } from 'provider/app-context'
import { Houses } from 'types.d'

type Props = {}

const CharactersSection = (props: Props) => {
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
          <CharacterCard
            id='asdas'
            name='Harry Potter'
            DOB='20 04 2001'
            house={Houses.GRYFFINDOR}
          />
          <CharacterCard id='asdas' name='Sam Maxima' />
          <CharacterCard id='asdas' name='Harry Potter' />
          <CharacterCard id='asdas' name='Harry Potter' />
          <CharacterCard id='asdas' name='Harry Potter' />
          <CharacterCard id='asdas' name='Harry Potter' />
        </div>
      </div>
    </div>
  )
}

export default CharactersSection
