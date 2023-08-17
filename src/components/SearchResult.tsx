'use client'

// Result of the search and the search input itself
import { AppContext } from '@provider/app-context'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import Input from './Input'
import { Character, Houses } from 'types.d'
import Image from 'next/image'
import SearchCard from './SearchCard'
import { compareStrings } from '@utils/compareStrings'
import {
  getStorageItem,
  removeItemFromStorage,
  setStorageItem,
} from '@utils/localstorageAccess'
type Props = {}

const SearchResult = (props: Props) => {
  const [isLoading, setLoading] = useState(false)
  const [houseFilter, setHouseFilter] = useState<Houses | null>(null)
  const [filterArray, setFilterArray] = useState<Character[]>([])
  const [input, setInput] = useState('Harry Potter')
  const appContext = useContext(AppContext)
  const isOpen = appContext?.isModalOpen ?? false
  const handleCloseModal = appContext?.handleCloseModal
  const charactersArray = appContext?.characters
  const houseObj = Object.values(Houses)

  const HOUSEFILTER = 'houseFilters'

  console.log('houseFilter', houseFilter)
  const handleHouseFilterSelected = (val: Houses) => {
    setStorageItem(HOUSEFILTER, val)
    setHouseFilter(val)
  }

  const handleFilteringCharacters = (e: ChangeEvent<HTMLInputElement>) => {
    //
    setInput(e.target.value)
  }

  useEffect(() => {
    let filter = getStorageItem(HOUSEFILTER)
    if (filter) {
      setHouseFilter(filter)
    }
    setLoading(true)
    const filterCharacters = () => {
      console.log('characters', charactersArray)

      let houseFilterArr = charactersArray?.filter(
        (character, index) =>
          character?.house &&
          houseFilter &&
          compareStrings(character.house, houseFilter)
      )
      if (houseFilterArr === undefined || houseFilterArr.length === 0) {
        // If houseFilterArr is undefined or empty, return the original charactersArray
        houseFilterArr = charactersArray
      }

      console.log('houseFilterArr ', houseFilterArr)

      const filteredArray = houseFilterArr?.filter((character: Character) =>
        compareStrings(character.name, input)
      )
      console.log('filteredArray', filteredArray)
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

  const handleCleanFilter = () => {
    removeItemFromStorage(HOUSEFILTER)
    setHouseFilter(null)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className='w-full py-4 sm:py-6'>
        {' '}
        <div className='px-2 sm:px-4 md:px-8'>
          <Input
            handleChange={handleFilteringCharacters}
            input={input}
            isLoading={isLoading}
          />
        </div>
        {/* ListCard */}
        <div className='overflow-y-auto overflow-auto xl:max-h-[28em] h-[29em]'>
          <div className='h-full px-2 sm:px-4 md:px-8 w-full'>
            {filterArray.map((character, key) => (
              <SearchCard character={character} key={character.id} />
            ))}
          </div>
        </div>
        <div className='flex justify-between items-center px-2 sm:px-4 md:px-8'>
          {/* House filter */}
          <div className='flex w-full space-x-2'>
            {houseObj.map((val, index) => {
              return (
                <div
                  className={`p-1 flex justify-center items-center transition duration-300 ease-in-out rounded-lg border-2 border-dotted  cursor-pointer ${
                    houseFilter &&
                    houseFilter.trim().toLocaleLowerCase() ==
                      val.trim().toLocaleLowerCase()
                      ? 'border-red-500'
                      : 'border-slate-400 hover:border-orange-300'
                  }`}
                  key={index}
                  onClick={() => handleHouseFilterSelected(val)}
                >
                  <Image
                    src={require(`/public/crests/${val}.png`)}
                    className='h-auto w-8'
                    title={val}
                    alt={val}
                  />
                </div>
              )
            })}
            {/* Cleanup Button */}
            {houseFilter && (
              <button
                onClick={handleCleanFilter}
                className='flex text-center items-center justify-center space-x-1 text-slate-400 font-semibold text-base lg:text-xl border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-3 py-2 transition ease-in-out duration-300 hover:border-0 hover:bg-white/20'
              >
                clear filter
              </button>
            )}
          </div>
          <button
            onClick={appContext?.handleCloseModal}
            className=' text-slate-400 font-semibold text-base lg:text-xl  border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-3 py-2 hover:bg-red-500 hover:text-white hover:border-red-300 hover:border-b transition ease-in-out duration-300'
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
export default SearchResult
