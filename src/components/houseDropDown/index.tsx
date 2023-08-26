'use client'

import { AppContext } from '@provider/app-context'
import React, { useContext, MouseEvent } from 'react'
import { Houses } from 'types.d'
import DropItem from './DropItem'

interface DropdownProps {
  items: string[]
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

  const handleFiltering = (house: Houses) => {
    console.log('clicked dropdownItem')
    appContext?.filtering({ name: name, value: house })
    onClosePopover()
  }
  return (
    <div
      ref={popoverRef}
      className={`${
        isOpen ? 'block ' : 'hidden '
      }text-base z-50 float-left py-2 list-none text-left rounded-md shadow-lg mt-1 ${bgColor} backdrop-blur-xl`}
      style={{ minWidth: '12rem' }}
    >
      {items.map((house, index) => (
        <DropItem
          key={house}
          house={house as Houses}
          handleClick={(e: MouseEvent<HTMLDivElement>) =>
            handleFiltering(house as Houses)
          }
        />
      ))}
    </div>
  )
}

export default Dropdown
