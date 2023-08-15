'use client' //use client directive
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { DEFAULT_IMAGE } from '@utils/constant'
import NotFound from '@components/NotFound'
import { houseColors } from '@utils/colors'
import { resolveHouseNames } from '@utils/resolveHouseNames'
import { Houses, Character } from 'types.d'
import localFont from 'next/font/local'
import { AppContext } from '@provider/app-context'
const harryFont = localFont({ src: '../../public/fonts/local/HarryP.ttf' })

type Props = {
  data?: Character
}

const CharacterSectionPage = ({ data }: Props) => {
  const [bgColor, setBGColor] = useState<string>('bg-orange-500')

  const wizardNameGender =
    data?.gender?.toLocaleLowerCase().trim() == 'female' ? 'witch' : 'wizard'

  useEffect(() => {
    if (data && data?.house) {
      let house = data.house
      setBGColor(
        `bg-[${houseColors[
          (resolveHouseNames(house) as Houses) ?? Houses.GRYFFINDOR
        ].primary
          .trim()
          .toLocaleLowerCase()}]`
      )
    }
  }, [])

  if (!data)
    return (
      <NotFound
        text="😱Oops, we don't know that character 🪄"
        buttonChildren='Go Back'
      />
    )
  return (
    <div className='w-full lg:flex justify-center pt-24'>
      <section className='lg:w-2/5 flex flex-col justify-evenly px-8'>
        <div className='flex justify-center items-center h-full w-auto'>
          {/* FIXME possible error relating to this https://github.com/vercel/next.js/issues/52116 resolving to use normal image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.image || DEFAULT_IMAGE}
            alt={data.name || 'NO NAME'}
            className={`h-full w-full border-t-2 border-b-[5px] border-r-2 border-l-2 bg-clip-border ${bgColor}`}
          />
        </div>
      </section>
      {/* Character Details */}
      <section className='lg:w-3/5'>
        {/* Descriptions */}
        <div className='flex space-x-2 justify-between'>
          <div className='flex space-y-2'>
            {/* Name */}
            <h2
              className={`${
                harryFont.className
              } text-lg lg:text-xl xl:text-2xl font-bold text-slate-300 capitalize text-ellipsis group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${'group-hover:from-red-500 group-hover:to-amber-500 group-hover:via-orange-500 '}]`}
            >
              ${}
            </h2>
            {/* Akas */}
            {/* House */}
            {/* Wand Name */}
            {/* Species*/}
            {/* is Wizard*/}

            {data.wizard && <div className=''>${wizardNameGender} 🧙‍♂️</div>}
          </div>
          <div className='w-auto h-auto my-auto'>
            {data.house && (
              <Image
                src={require(`/public/crests/${data.house}.png`)}
                className='h-auto w-10'
                title={data.house && data.house}
                alt={data.house || 'no house'}
              />
            )}
          </div>
        </div>
        {/* Tables 1*/}
      </section>
    </div>
  )
}

export default CharacterSectionPage
