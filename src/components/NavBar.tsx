import React from 'react'
import { Logo } from './Logo'
import { SearchButton } from '@components/searchResult'
import { SpellButton } from '@components/spellResult'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav
      className={`z-10 border-b border-orange-500/80 fixed -top-0 left-0 right-0  transition-all ease-in-out duration-500 bg-bg-dark/30 backdrop-blur-2xl`}
    >
      <div className='flex justify-between container mx-auto max-w-7xl px-4 md:px-10 lg:px-4  min-[495px]:max-md:px-12 2xl:px-10 py-4'>
        <Logo />
        <div className='flex items-center space-x-1'>
          <SearchButton />
          <SpellButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
