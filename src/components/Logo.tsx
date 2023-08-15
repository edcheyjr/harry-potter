'use client'

import React, { useContext } from 'react'
import LogoImage from '@logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { AppContext } from '@provider/app-context'

type Props = {
  innerRef?: React.RefObject<HTMLDivElement>
}

export const Logo = ({ innerRef }: Props) => {
  const appContext = useContext(AppContext)
  const house = appContext?.house
  return (
    <div ref={innerRef}>
      <Link href={'/'}>
        <Image
          priority
          src={house ? require(`/public/crests/${house}.png`) : LogoImage}
          alt='Hogwarts'
          height={56}
          width={56}
          className='
        w-auto
        h-10
        lg:h-14
        '
        />
      </Link>
    </div>
  )
}
