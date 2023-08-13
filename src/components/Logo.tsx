import React from 'react'
import LogoImage from 'logo.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
      <Image
        src={LogoImage}
        alt='Hogwarts'
        className=''
        style={{ width: 'auto', height: '56px' }}
      />
    </Link>
  )
}
