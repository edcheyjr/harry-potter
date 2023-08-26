'use client'

import React, { useContext } from 'react'
import SearchIcon from '@components/icons/SearchIcon'
import { AppContext } from '@provider/app-context'

type Props = {
  innerRef?: React.RefObject<HTMLButtonElement>
}

const SearchButton = ({ innerRef }: Props) => {
  const appContext = useContext(AppContext)
  const handleOpenModal = appContext?.handleOpenSearch
  return (
    <button
      ref={innerRef}
      onClick={handleOpenModal}
      className='px-2.5 py-[9px] lg:py-1 rounded bg-slate-200/10 flex space-x-1 text-gray-50/80 items-center border border-gray-50/20 hover:bg-slate-400/30  transition-all ease-in-out duration-300'
    >
      <SearchIcon
        className='h-5 w-5 lg:h-6 lg:w-6 fill-current'
        fill='currentIcon'
      />
      <span className='hidden sm:block text-sm font-regular uppercase'>
        search...
      </span>

      <div
        className='hidden lg:flex space-x-0.5'
        title='escape'
        aria-label='to open search press Ctrl+K'
      >
        <span className='hidden lg:block  py-1 rounded px-2 text-center border-r border-l border-t border-b-2 bg-bg-dark border-gray-50/[25%] text-sm lg:text-base font-semibold tracking-tight'>
          Ctrl
        </span>
        <span className='py-1 rounded px-2 text-center border-r border-l border-t border-b-2 bg-bg-dark border-gray-50/[25%] text-sm lg:text-base font-semibold tracking-tight'>
          K
        </span>
      </div>
    </button>
  )
}

export default SearchButton
