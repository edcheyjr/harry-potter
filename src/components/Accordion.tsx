import React, { ReactNode, useState } from 'react'
import ChveronDown from './icons/ChveronDown'

type Props = {
  title: string
  children: ReactNode
}

const Accordion = ({ title, children }: Props) => {
  const [isOpened, setIsOpened] = useState<boolean>(true)
  const renderTitle = (title: string) => {
    return <h3 className='uppercase font-medium'>{title}</h3>
  }

  return (
    <div className='w-full h-auto space-y-2 '>
      <div
        className='transform transition duration-300 flex justify-between px-2 items-center text-slate-300 cursor-pointer py-2 hover:bg-slate-600/20 rounded'
        onClick={() => setIsOpened(!isOpened)}
      >
        {renderTitle(title)}
        <ChveronDown
          className={`transform transition duration-300 opacity-60 h-6 w-6 fill-current  ${
            isOpened && 'rotate-180'
          }`}
        />
      </div>
      {isOpened && children}
    </div>
  )
}

export default Accordion
