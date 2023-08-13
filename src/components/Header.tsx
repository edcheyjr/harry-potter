import React, { useState } from 'react'
import HarryPotterText from 'harrypotter.svg'
import Image from 'next/image'
import localFont from 'next/font/local'
import NavBar from './NavBar'
import HarryPotterWorkMark from './icons/HarryPotterWordmark'

const harry = localFont({ src: '../../public/fonts/local/HarryP.ttf' })
// const ysabeau =
//

type Props = {}

const Header = (props: Props) => {
  // const [color, setColor] = useState<string>(houseColors.Gryffindor.primary)
  return (
    <header
      className='
      min-h-screen
      w-full 
      mx-auto
      bg-gradient-to-b
      from-bg-dark
      via-bg-dark/30
      to-bg-dark/95
      '
    >
      <div className='container mx-auto max-w-7xl px-10 flex flex-col justify-center pt-8'>
        {/* Nav */}
        <section className='space-y-2 flex flex-col items-center justify-bottom'>
          {/* Heading Text */}
          <h1
            className={`${harry.className} text-4xl md:text-7xl xl:text-9xl capitalize text-white`}
          >
            <HarryPotterWorkMark
              title='harry potter'
              titleId='harry potter'
              className='fill-current w-[32rem]'
            />
          </h1>

          {/* Description */}
          <p className='text-lg lg:text-xl xl:text-2xl font-medium text-slate-300'>
            Characters, Know them and the world of wizardry
          </p>
        </section>
      </div>
    </header>
  )
}

export default Header
