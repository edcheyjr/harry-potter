'use client'

import React, { useContext } from 'react'
import SearchIcon from './icons/SearchIcon'
import { AppContext } from '@provider/app-context'

type Props = {
  innerRef?: React.RefObject<HTMLButtonElement>
}

const SearchButton = ({ innerRef }: Props) => {
  const appContext = useContext(AppContext)
  const handleOpenModal = appContext?.handleOpenModal
  return (
    <button
      ref={innerRef}
      onClick={handleOpenModal}
      className='px-1.5 md:px-3.5 py-1 rounded bg-white/[8%] flex space-x-2.5 text-gray-50/80 items-center border border-gray-50/20 hover:bg-white/20  transition-all ease-in-out duration-300'
    >
      <SearchIcon
        className='h-5 w-5 lg:h-6 lg:w-6 fill-current'
        fill='currentIcon'
      />
      <span className='text-sm font-regular uppercase'>search...</span>
      <span
        title='shortcut'
        className='ml-4 py-1 rounded px-2 text-center border-r border-l border-t border-b-2 bg-bg-dark border-gray-50/[25%] text-sm lg:text-base font-semibold tracking-tight'
      >
        Ctrl K
      </span>
    </button>
  )
}

export default SearchButton
