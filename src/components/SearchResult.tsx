'use client'

// Result of the search and the search input itself
import { AppContext } from '@provider/app-context'
import React, { ChangeEvent, useContext, useState } from 'react'
import Modal from './Modal'
import Input from './Input'
import { Character, Houses } from 'types.d'
import Image from 'next/image'
import SearchCard from './SearchCard'

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

  console.log('houseFilter', houseFilter)
  const handleHouseFilterSelected = (val: Houses) => {
    setHouseFilter(val)
  }

  const handleFilteringCharacters = (e: ChangeEvent<HTMLInputElement>) => {
    //
    setInput(e.target.value)

    // filter characters based on houseFilter and and input
    filterCharacters()
  }

  const filterCharacters = () => {
    const filteredArray = charactersArray?.filter((character) => {
      // filter params
      return (
        character.house?.toLocaleLowerCase() ==
          houseFilter?.toLocaleLowerCase() ||
        character.name
          .toLowerCase()
          .trim()
          .includes(input.toLocaleLowerCase().trim())
      )
    })
    setFilterArray(filteredArray || [])
  }
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className='w-full '>
        {' '}
        <div className='p-3'>
          <Input
            handleChange={handleFilteringCharacters}
            input={input}
            isLoading
          />
          {/* ListCard */}
          {filterArray.map((character, key) => (
            <SearchCard character={character} key={character.id} />
          ))}
        </div>
        <div className='flex justify-between items-center px-3'>
          {/* House filter */}
          <div className='flex w-full space-x-2'>
            {houseObj.map((val, index) => {
              return (
                <div
                  className={`p-1 flex justify-center items-center transition duration-300 ease-in-out rounded-lg border-2 border-dotted border-slate-400 hover:border-orange-300 cursor-pointer ${
                    houseFilter == val && 'border-red-500'
                  }`}
                  key={val}
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
          </div>
          <button
            onClick={appContext?.handleCloseModal}
            className=' text-slate-400 font-semibold text-base lg:text-xl  border-slate-400 rounded-md border-b-[3px] border-t border-r border-l px-3 py-2 hover:bg-red-500 hover:text-white hover:border-red-300 transition ease-in-out duration-300'
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
export default SearchResult
