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
    <div className='flex items-center space-x-4'>
      <div className='bg-bg-dark px-2.5 py-2 border-b-4 border-orange-400 rounded border-r-4 border-l border-t '>
        <h3
          aria-label={title}
          title={title}
          className={`${harry.className}  uppercase font-bold tracking-[5px] text-lg  xl:text-xl bg-clip-text bg-gradient-to-br from-red-500 from-20% via-orange-500 to-amber-500 text-transparent`}
        >
          {title}
        </h3>
      </div>
      <p className='text-slate-500 text-base lg:text-lg first-letter:uppercase'>
        {desc}
      </p>
    </div>
  )
}

export default Title
