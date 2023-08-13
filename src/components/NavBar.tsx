import React from 'react'
import { Logo } from './Logo'
import SearchButton from './SearchButton'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='border-b border-orange-500/80'>
      <div className='flex justify-between container mx-auto max-w-7xl px-10 py-4'>
        <Logo />
        <SearchButton />
      </div>
    </nav>
  )
}

export default NavBar
