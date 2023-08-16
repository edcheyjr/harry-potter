import React from 'react'
import { ColorPair } from '../../types'
import localFont from 'next/font/local'

const harry = localFont({ src: '../../public/fonts/local/HarryP.ttf' })

type Props = {
  title: string
  desc?: string
  colors?: ColorPair
}

const Title = ({ title, desc }: Props) => {
  return (
    <div className='flex w-full items-center space-x-8'>
      <h3
        aria-label={title}
        title={title}
        className={`${harry.className} uppercase font-bold tracking-[5px] text-lg  xl:text-xl bg-clip-text bg-gradient-to-br from-red-500 from-20% via-orange-500 to-amber-500 text-transparent `}
      >
        {title}
      </h3>
      <p className='text-slate-500 text-base lg:text-lg first-letter:uppercase'>
        {desc}
      </p>
    </div>
  )
}

export default Title
