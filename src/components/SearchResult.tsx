'use client'

// Result of the search and the search input itself
import { AppContext } from '@provider/app-context'
import React, { useContext, useState } from 'react'
import Modal from './Modal'
import Input from './Input'

type Props = {}

const SearchResult = (props: Props) => {
  const [input, setInput] = useState('')
  const appContext = useContext(AppContext)
  const isOpen = appContext?.isModalOpen ?? false
  const handleCloseModal = appContext?.handleCloseModal
  const charactersArray = appContext?.characters[0]
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className='w-full'>
        {' '}
        <Input setInput={setInput} input={input} />
        <p className='text-center text-neutral-500/80 mb-4'>
          I am a modal open and close animation made with GSAP and tailwindcss.
        </p>
        <div className='text-center'>
          <button
            onClick={appContext?.handleCloseModal}
            className='bg-neutral-100 text-neutral-400 font-semibold text-xl rounded-md border-b-[3px] px-3 py-1'
          >
            Close
          </button>
        </div>
        {/* House filter */}
        <div></div>
      </div>
    </Modal>
  )
}
export default SearchResult
