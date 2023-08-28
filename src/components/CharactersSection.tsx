'use client'

import CharacterCard from './Character'
import Title from './Title'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AppContext } from '@provider/app-context'
import { Character, Filters } from 'types.d'
import { resolveHouseNames } from '@utils/resolveHouseNames'
import Filter from './Filter'
import SearchResultModal from '@components/searchResult'
import SpellsResultModal from '@components/spellResult'
import Loading from './Loading'
import Paginate from './pagination'
import { PAGE_SIZE } from '@utils/constant'

type Props = {
  characters: Character[]
}

const CharactersSection = ({ characters }: Props) => {
  //start the current page as 1
  const [isPageLoading, setPageIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [siblingCount, setSiblingCount] = useState<number>(1)
  // setting siblings count based on screen size
  useEffect(() => {
    if (window != undefined) {
      if (window.innerWidth <= 640) {
        setSiblingCount(0)
      }
    }
  }, [])

  const appContext = useContext(AppContext)
  const activeFilter =
    appContext?.activeFilter ?? ({} as Record<Filters, boolean>)
  const isLoading = appContext?.isLoadingCharacters
  const setCharacters = appContext?.setCharacters
  const charactersValue = appContext?.characters ?? characters //that character state or default to the ssr one
  useEffect(() => {
    if (setCharacters) {
      setCharacters(characters) //move characters values to context for global access
    }
  }, [characters, setCharacters])

  const filtersKeys = Object.keys(activeFilter) as Filters[]
  const ref = appContext?.ref

  // Pagination
  // pagination through splitting of data
  //return the data split to the required size
  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE
    const lastPageIndex = firstPageIndex + PAGE_SIZE
    const slicedArray = charactersValue.slice(firstPageIndex, lastPageIndex)
    setPageIsLoading(false)
    return slicedArray
  }, [charactersValue, currentPage])

  // Load if not ready
  if (isLoading) {
    return (
      <div className='h-screen container mx-auto max-w-7xl px-4 md:px-10 lg:px-4 2xl:px-10 pt-20 xl:py-32'>
        <div>
          <Loading />
        </div>
      </div>
    )
  }
  return (
    <div className='pt-20 xl:pt-32 container mx-auto max-w-7xl px-4 min-[495px]:max-md:px-12 md:px-4 2xl:px-10'>
      <div ref={ref} className='flex flex-col pt-28'>
        <div className='pb-10 w-auto flex flex-wrap justify-between items-center gap-4'>
          <Title
            title='All characters'
            // desc='Hogwarts teachers and students'
          />
          {/* filters */}
          <div className='flex items-center space-x-4'>
            <span className='text-slate-300 font-semibold text-sm uppercase bg-black rounded p-1'>
              Filter By
            </span>
            <div className='flex space-x-3'>
              {/* TODO:remove house for now to return later as a filter with dropdown of the house list */}
              {filtersKeys.map((key, index) => (
                <Filter key={key} name={key} value={activeFilter[key]} />
              ))}
            </div>
          </div>
        </div>
        <div className='container mx-auto max-w-7xl gap-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch pb-10'>
          {currentPageData.map((character) => {
            return (
              <CharacterCard
                isPageLoading={isPageLoading}
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
        {/* Search modal */}
        <SearchResultModal />
        {/* Spell modal */}
        <SpellsResultModal />
        {/* Pagination */}
        <Paginate
          siblingCount={siblingCount}
          currentPage={currentPage}
          totalCount={charactersValue.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}
export default CharactersSection
