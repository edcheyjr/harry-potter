'use client'
import packageJson from 'package.json'
import React, { useContext } from 'react'
import LogoImage from '@logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { AppContext } from '@provider/app-context'

type Props = {
  innerRef?: React.RefObject<HTMLDivElement>
}

const APP_NAME = packageJson.name
export const Logo = ({ innerRef }: Props) => {
  const appContext = useContext(AppContext)
  const house = appContext?.house
  return (
    <Link href={'/'}>
      <div ref={innerRef} className='flex space-x-1 items-center'>
        <Image
          priority
          src={house ? require(`/public/crests/${house}.png`) : LogoImage}
          alt='Hogwarts'
          height={100}
          width={100}
          className='
        w-auto
        h-10
        lg:h-12
        '
        />
        <h2 className='font-bold uppercase tracking-widest text-base lg:text-lg bg-clip-text bg-gradient-to-br from-red-500 from-20% via-orange-500 to-amber-500 text-transparent'>
          {APP_NAME}
        </h2>
      </div>
    </Link>
  )
}
