'use client'

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

type Props = {
  input: string
  setInput: Dispatch<SetStateAction<string>>
}

const renderSimpleLoadingIcon = () => {
  return <div></div>
}

const Input = (props: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInput(e.target.value)
  }
  return (
    <div className='w-full'>
      {/* Search Icon */}
      <input
        type='text'
        value={props.input}
        onChange={handleChange}
        className='w-full px-6 py-2 bg-white/5 font-medium text-white focus:bg-orange-300/10 rounded-sm'
        placeholder='Search a character'
      />
      {/* Eec */}
      <span
        title='escape'
        aria-label='to open search press Ctrl+K'
        className='ml-4 py-1 rounded px-2 text-center border-r border-l border-t border-b-2 bg-bg-dark border-gray-50/[25%] text-sm lg:text-base font-semibold tracking-tight'
      >
        Ctrl K
      </span>
    </div>
  )
}

export default Input
