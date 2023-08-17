'use client'

// Result of the search and the search input itself
import { AppContext } from '@provider/app-context'
import React, { useContext, useState } from 'react'
import Modal from './Modal'
import Input from './Input'
import { Houses } from 'types.d'
import Image from 'next/image'

type Props = {}

const SearchResult = (props: Props) => {
  const [isLoading, setLoading] = useState(false)
  const [houseFilter, setHouseFilter] = useState<Houses | null>(null)
  const [input, setInput] = useState('Harry Potter')
  const appContext = useContext(AppContext)
  const isOpen = appContext?.isModalOpen ?? false
  const handleCloseModal = appContext?.handleCloseModal
  const charactersArray = appContext?.characters[0]
  const houseObj = Object.values(Houses)

  console.log('houseFilter', houseFilter)
  const handleHouseFilterSelected = (val: Houses) => {
    setHouseFilter(val)
  }
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className='w-full'>
        {' '}
        <Input setInput={setInput} input={input} isLoading />
        <p className='text-center text-neutral-500/80 mb-4'>
          I am a modal open and close animation made with GSAP and tailwindcss.
        </p>
        <div className='flex justify-between items-center'>
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
                    className='h-auto w-9'
                    title={val}
                    alt={val}
                  />
                </div>
              )
            })}
          </div>
          <button
            onClick={appContext?.handleCloseModal}
            className=' text-neutral-400 font-semibold text-xl rounded-md border-b-[3px] px-3 py-1'
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
export default SearchResult
