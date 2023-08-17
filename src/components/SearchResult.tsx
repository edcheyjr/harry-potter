// Result of the search and the search input itself
import { AppContext } from '@provider/app-context'
import React, { useContext } from 'react'
import Modal from './Modal'

type Props = {}

const SearchResult = (props: Props) => {
  const appContext = useContext(AppContext)
  const isOpen = appContext?.isModalOpen ?? false
  const handleCloseModal = appContext?.handleCloseModal
  handleCloseModal
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div>
        {' '}
        <h1 className='text-cyan-400 text-3xl font-bold mb-4 text-center'>
          Hello!
        </h1>
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
      </div>
    </Modal>
  )
}
export default SearchResult
