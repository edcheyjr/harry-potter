import React, { ReactNode, useState } from 'react'
import ChveronDown from './icons/ChveronDown'

type Props = {
  title: string
  children: ReactNode
  initialAccordionState?: boolean
}

const Accordion = ({
  title,
  children,
  initialAccordionState = false,
}: Props) => {
  const [isOpened, setIsOpened] = useState<boolean>(initialAccordionState)
  const renderTitle = (title: string) => {
    return <h3 className='uppercase font-medium'>{title}</h3>
  }

  return (
    <div className='w-full h-auto space-y-2'>
      <div
        className='transform transition duration-500 ease-in-out flex justify-between px-2 items-center text-slate-300 cursor-pointer py-2 hover:bg-slate-600/20 rounded'
        onClick={() => setIsOpened(!isOpened)}
      >
        {renderTitle(title)}
        <ChveronDown
          className={`transform transition duration-500 ease-in-out opacity-60 h-6 w-6 fill-current  ${
            isOpened && 'rotate-180'
          }`}
        />
      </div>
      {isOpened && children}
      {/* Divider */}
      {!isOpened && (
        <div className='w-full h-0 border-2 border-dotted border-white/40 my-2'></div>
      )}
    </div>
  )
}

export default Accordion
