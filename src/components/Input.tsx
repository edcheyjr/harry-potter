'use client'

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import SearchIcon from './icons/SearchIcon'
import LoadingIcon from './icons/LoadingIcon'

type Props = {
  input: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
}

const renderSimpleLoadingIcon = () => {
  return (
    <LoadingIcon className='animate-spin h-6 w-6 lg:h-6 lg:w-6 fill-current' />
  )
}

const Input = (props: Props) => {
  return (
    <div className='w-full text-slate-400 relative flex'>
      {/* Search Icon */}
      <div className='absolute -translate-y-1/2 top-1/2 left-2'>
        {props.isLoading ? (
          renderSimpleLoadingIcon()
        ) : (
          <SearchIcon
            className='h-5 w-5 lg:h-6 lg:w-6 fill-current'
            fill='currentIcon'
          />
        )}
      </div>
      <input
        type='text'
        value={props.input}
        onChange={props.handleChange}
        className='w-full px-10 py-2.5 bg-white/[15%] font-medium focus:bg-orange-300/20 rounded-md'
        placeholder='Search a character'
      />
      {/* Eec */}
      <div className='absolute -translate-y-1/2 top-1/2 right-2'>
        <span
          title='escape'
          aria-label='to open search press Ctrl+K'
          className='ml-4 py-1 rounded px-2 text-center border-r border-l border-t border-b-2 bg-bg-dark border-gray-50/[25%] text-sm lg:text-base font-semibold tracking-tight'
        >
          Ctrl K
        </span>
      </div>
    </div>
  )
}

export default Input
