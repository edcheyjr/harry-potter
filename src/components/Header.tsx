import React from 'react'
import HarryPotterText from 'harrypotter.svg'
import Image from 'next/image'
import localFont from 'next/font/local'

const harry = localFont({ src: '../../public/fonts/local/HarryP.ttf' })

type Props = {}

const Header = (props: Props) => {
  return (
    <header
      className='h-2/3 
      w-full 
      max-w-xl
      bg-gradient-to-b
      from-black/30
      via-transparent
      to-black/30
      '
      style={{ background: `url("/public/harry-potter-books.jpg"})` }}
    >
      {/* Nav */}

      <section>
        {/* Heading Text */}
        <h1 className={`${harry.className} text-9xl capitalize `}>
          Harry Potter
        </h1>

        {/* Description */}
      </section>
    </header>
  )
}

export default Header
