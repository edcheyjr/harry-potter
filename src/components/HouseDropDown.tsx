'use client'

import { AppContext } from '@provider/app-context'
import React, { useContext } from 'react'

interface DropdownProps {
  items: any[]
  bgColor?: string
  isOpen: boolean
  name: string
  popoverRef: React.MutableRefObject<HTMLDivElement | null>
  onClosePopover: () => void
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  items,
  bgColor = 'bg-bg-dark/60',
  popoverRef,
  isOpen,
  onClosePopover,
}) => {
  const appContext = useContext(AppContext)

  return (
    <div
      ref={popoverRef}
      className={`${
        isOpen ? 'block ' : 'hidden '
      }text-base z-50 float-left py-2 list-none text-left rounded-md shadow-lg mt-1 ${bgColor} backdrop-blur-xl`}
      style={{ minWidth: '12rem' }}
    >
      {items.map((house, index) => (
        <button
          key={index}
          className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-red-500/50'
          onClick={(e) => {
            appContext?.filtering({ name, value: house })
            onClosePopover()
          }}
        >
          {house}
        </button>
      ))}
    </div>
  )
}

export default Dropdown
