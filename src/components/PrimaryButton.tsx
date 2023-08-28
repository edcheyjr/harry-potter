'use client'

import { AppContext } from '@provider/app-context'
import React, { MouseEvent, ReactNode, useContext } from 'react'

type Props = {
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='w-full flex items-center justify-center capitalize py-2.5 border-b border-red-500 px-6 rounded bg-gradient-to-br from-red-500 from-30% via-orange-500 to-amber-500 hover:from-red-500 hover:to-red-500 text-white font-bold text-sm lg:text-base transition duration-500 ease-in-out'
    >
      {children}
    </button>
  )
}

export default PrimaryButton
