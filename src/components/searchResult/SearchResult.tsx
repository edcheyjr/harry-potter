'use client'

// Result of the search and the search input itself
import { AppContext } from '@provider/app-context'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Modal from '@components/Modal'
import Input from '@components/Input'
import { Character, Houses } from '@/src/types.d'
import Image from 'next/image'
import SearchCard from './SearchCard'
import { compareString } from '@utils/compareString'
import {
  getStorageItem,
  removeItemFromStorage,
  setStorageItem,
} from '@utils/localstorageAccess'
import { searchStrings } from '@utils/searchStrings'
type Props = {}

const SearchResult = (props: Props) => {
  const appContext = useContext(AppContext)
  const [isLoading, setLoading] = useState(false)
  const [houseFilter, setHouseFilter] = useState<Houses | null>(null)
  const [filterArray, setFilterArray] = useState<Character[]>([])
  const [input, setInput] = useState('Harry Potter')
  const isOpen = appContext?.isSearchModalOpen ?? false
  const handleCloseModal = appContext?.handleCloseSearch
  const charactersArray = appContext?.characters
  const houseObj = Object.values(Houses)
  const activeFilters = appContext?.activeFilter //active filters
  const cleanFilters = appContext?.cleanFilters

  const HOUSEFILTER = 'houseFilters'

  // console.log('houseFilter', houseFilter)
  const handleHouseFilterSelected = (val: Houses) => {
    if (compareString(val, houseFilter)) {
      removeItemFromStorage(HOUSEFILTER)
      setHouseFilter(null)
    } else {
      setStorageItem(HOUSEFILTER, val)
      setHouseFilter(val)
    }
  }

  const handleFilteringCharacters = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    let filter = getStorageItem(HOUSEFILTER)
    if (filter) {
      setHouseFilter(filter)
    }
    setLoading(true)
    const filterCharacters = () => {
      let houseFilterArr = charactersArray?.filter(
        (character, index) =>
          character?.house &&
          houseFilter &&
          searchStrings(character.house, houseFilter)
      )
      if (houseFilterArr === undefined || houseFilterArr.length === 0) {
        // If houseFilterArr is undefined or empty, return the original charactersArray
        houseFilterArr = charactersArray
      }

      const filteredArray = houseFilterArr?.filter((character: Character) =>
        searchStrings(character.name, input)
      )

      // only show filter values if there is any value input or house filter
      if (input !== '') {
        setFilterArray(filteredArray || [])
      } else {
        setFilterArray([])
      }
    }
    // filter characters based on houseFilter and and input
    filterCharacters()
    setLoading(false)
  }, [charactersArray, houseFilter, input])

  //TODO House filters might be a repeat on filter remove in favour of house filter under filter
  const handleCleanFilter = () => {
    if (cleanFilters) {
      cleanFilters() // clean any filters
    }
    removeItemFromStorage(HOUSEFILTER)
    setHouseFilter(null)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className='w-full py-4 '>
        {' '}
        <div className='px-2 sm:px-4'>
          <Input
            handleChange={handleFilteringCharacters}
            input={input}
            isLoading={isLoading}
            isKeyEnabled
            placeholder='Search a character'
          />
        </div>
        {/* ListCard */}
        <div className='overflow-y-auto overflow-auto max-h-96 lg:max-h-80 xl:max-h-[28em] mt-2 scrollbar scrollbar-thumb-white/[45%]  scrollbar-track-bg-dark'>
          <table className='h-full px-2 sm:px-4 md:px-8 w-full table-fixed border-collapse'>
            <thead className='w-full'>
              <tr className='text-slate-400 font-semibold text-lg xl:text-xl w-full border-t border-b border-slate-600 '>
                <th className='px-3 lg:px-6 py-3.5 text-left' colSpan={4}>
                  Search Results
                </th>
              </tr>
              <tr className='text-left text-slate-400 font-semibold text-lg xl:text-xl w-full border-t border-b border-slate-600'>
                <th className=' px-3 lg:px-6 py-3.5'>name</th>
                <th className=' px-3 lg:px-6'>age</th>
                <th className=' px-3 lg:px-6'>actor</th>
                <th className=' px-3 lg:px-6'>house</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {filterArray.length > 0 ? (
                filterArray.map((character, key) => (
                  <SearchCard character={character} key={character.id} />
                ))
              ) : (
                <tr className='text-center text-orange-400 text-lg lg:text-xl font-bold tracking-wide border-t border-b border-slate-600 '>
                  <td className='px-3 lg:px-6 py-3.5' colSpan={4}>
                    Start typing to search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='flex justify-between items-center px-2 sm:px-4 md:px-6 pt-4'>
          {/* House filter */}
          <div className='flex w-full space-x-2'>
            {houseObj.map((val, index) => {
              return (
                <div
                  className={`p-1 flex justify-center items-center transition duration-300 ease-in-out rounded-lg border sm:border-2 border-dotted  cursor-pointer ${
                    houseFilter && compareString(houseFilter, val)
                      ? 'border-red-500'
                      : 'border-slate-400 hover:border-orange-300'
                  }`}
                  key={index}
                  onClick={() => handleHouseFilterSelected(val)}
                >
                  <Image
                    src={require(`/public/crests/${val}.png`)}
                    className='h-auto w-6 sm:w-8'
                    title={val}
                    alt={val}
                  />
                </div>
              )
            })}
            {/* Cleanup Button */}
            {houseFilter ||
            activeFilters?.house ||
            activeFilters?.staff ||
            activeFilters?.students ? (
              <button
                onClick={handleCleanFilter}
                className='flex items-center justify-center text-slate-400 font-semibold text-sm sm:text-base lg:text-xl border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-2 sm:px-3  py-2 transition ease-in-out duration-300 hover:border-0 hover:bg-white/20 '
              >
                clear filters
              </button>
            ) : null}
          </div>
          <button
            onClick={appContext?.handleCloseSearch}
            className=' text-slate-400 font-semibold text-sm sm:text-base lg:text-xl border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-2 sm:px-3 py-2 hover:bg-red-500 hover:text-white hover:border-red-300 hover:border-b transition ease-in-out duration-300'
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
export default SearchResult
