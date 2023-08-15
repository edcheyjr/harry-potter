'use client'
import React, { MutableRefObject, useContext, useState } from 'react'
import localFont from 'next/font/local'
import HarryPotterWorkMark from 'components/icons/HarryPotterWordmark'
import Button from 'components/PrimaryButton'
import DownArrowIcon from './icons/DownArrowIcon'
import { AppContext } from 'provider/app-context'
const harry = localFont({ src: '../../public/fonts/local/HarryP.ttf' })

type Props = {}

const Hero = (props: Props) => {
  const scrollToSection = (ref: MutableRefObject<HTMLDivElement | null>) => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: 'smooth',
    })
  }

  const appContext = useContext(AppContext)
  const ref = appContext?.ref
  // const [color, setColor] = useState<string>(houseColors.Gryffindor.primary)
  return (
    <div className='container mx-auto max-w-7xl px-10 flex flex-col justify-end pt-8'>
      {/* Nav */}
      <section className='space-y-5 flex flex-col items-center justify-center'>
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

        {/* Button */}
        <div className=''>
          <Button onClick={() => scrollToSection(ref)}>
            <span className='w-full h-fit text-center align-middle'>
              See Characters
            </span>
            <DownArrowIcon className='animate-bounce h-6 w-6 fill-current' />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Hero
