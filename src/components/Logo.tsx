import React from 'react'
import LogoImage from 'logo.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  innerRef?: React.RefObject<HTMLDivElement>
}

export const Logo = ({ innerRef }: Props) => {
  return (
    <div ref={innerRef}>
      <Link href={'/'}>
        <Image
          priority
          src={LogoImage}
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
