'use client'

import CharacterCard from './Character'
import Title from './Title'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '@provider/app-context'
import { Character, Filters, Houses } from 'types.d'
import { resolveHouseNames } from '@utils/resolveHouseNames'
import { FILTERS, intialFilterState } from '@utils/constant'
import Filter from './Filter'
import { getStorageItem } from '@utils/localstorageAccess'
import Modal from './Modal'

type Props = {
  characters: Character[]
}

const CharactersSection = ({ characters }: Props) => {
  const appContext = useContext(AppContext)
  const activeFilter =
    appContext?.activeFilter ?? ({} as Record<Filters, boolean>)
  const setCharacters = appContext?.setCharacters
  const charactersValue = appContext?.characters ?? characters //that character state or default to the ssr one
  useEffect(() => {
    setCharacters(characters) //move characters values to context for global access
  }, [characters, setCharacters])

  const filtersKeys = Object.keys(activeFilter) as Filters[]
  const ref = appContext?.ref

  const isOpen = appContext?.isModalOpen ?? false
  return (
    <div className='pt-32 container mx-auto max-w-7xl px-10'>
      <div ref={ref} className=' flex flex-col pt-28'>
        <div className='pb-10 w-full flex justify-between items-center'>
          <Title
            title='All characters'
            // desc='Hogwarts teachers and students'
          />
          {/* filters */}
          <div className='flex w-1/4 items-center space-x-4'>
            <span className='text-slate-300 font-semibold text-sm uppercase bg-black rounded p-1'>
              Filter By
            </span>
            <div className='flex space-x-3'>
              {/* TODO:remove house for now to return later as a filter with dropdown of the house list */}
              {filtersKeys
                .filter((key) => key !== 'house')
                .map((key, index) => (
                  <Filter key={key} name={key} value={activeFilter[key]} />
                ))}
            </div>
          </div>
        </div>
        <div className='container mx-auto max-w-7xl gap-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch pb-10'>
          {charactersValue.map((character) => {
            return (
              <CharacterCard
                id={character.id}
                name={character.name}
                DOB={character.dateOfBirth}
                key={character.id}
                imageSrc={character.image}
                hasHouse={character.house}
                house={resolveHouseNames(character.house)}
              />
            )
          })}
        </div>
        <Modal
          isOpen={isOpen}
          onClose={appContext?.handleCloseModal || function () {}}
        />
      </div>
    </div>
  )
}
export default CharactersSection
