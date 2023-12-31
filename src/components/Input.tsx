'use client'

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import SearchIcon from './icons/SearchIcon'
import LoadingIcon from './icons/LoadingIcon'

type Props = {
  input: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
  isKeyEnabled?: boolean
  placeholder?: string
}

const renderSimpleLoadingIcon = () => {
  return (
    <LoadingIcon className='animate-spin h-6 w-6 lg:h-6 lg:w-6 fill-current' />
  )
}

const Input = (props: Props) => {
  return (
    <div className='w-full text-slate-400 group relative flex'>
      {/* Search Icon */}
      <div className='absolute -translate-y-1/2 top-1/2 left-2'>
        {props.isLoading ? (
          renderSimpleLoadingIcon()
        ) : (
          <SearchIcon className='h-5 w-5 lg:h-6 lg:w-6 fill-current' />
        )}
      </div>
      <input
        type='text'
        value={props.input}
        onChange={props.handleChange}
        className='w-full px-10 pr-2 py-2.5 bg-white/[5%] font-medium focus:bg-slate-300/20 rounded-md outline-0 focus:text-slate-300 placeholder-slate-300/50'
        placeholder={props.placeholder}
      />
      {/* Esc */}
      {props.isKeyEnabled && (
        <div className='hidden lg:block absolute -translate-y-1/2 top-1/2 right-2'>
          <span
            title='escape'
            aria-label='to open search press Ctrl+K'
            className='hidden lg:block ml-4 py-1 rounded px-2 text-center border-r border-l border-t border-b-2 bg-bg-dark border-gray-50/[25%] text-sm lg:text-base font-semibold tracking-tight'
          >
            Esc
          </span>
        </div>
      )}
    </div>
  )
}

export default Input
