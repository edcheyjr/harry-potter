'use client' //use client directive
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DEFAULT_IMAGE } from '@utils/constant'
import NotFound from '@components/NotFound'
import { houseColors } from '@utils/colors'
import { resolveHouseNames } from '@utils/resolveHouseNames'
import { Houses, Character } from 'types.d'

type Props = {
  data?: Character
}

const CharacterSectionPage = ({ data }: Props) => {
  console.log('data', data)
  const [bgColor, setBGColor] = useState<string>('bg-orange-500')

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
    <div className='flex justify-center pt-24'>
      <section className='w-1/2 flex flex-col justify-evenly px-2'>
        <div className='flex justify-center items-center w-1/2 h-auto'>
          {/* FIXME possible error relating to this https://github.com/vercel/next.js/issues/52116 resolving to use normal image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data?.image || DEFAULT_IMAGE}
            alt={'NO NAME'}
            className={`h-full w-full border-t-2 border-b-[5px] border-r-2 border-l-2 bg-clip-border ${bgColor}`}
          />
        </div>
        <div className=''></div>
      </section>
      {/* Character Details */}
      <section className='w-1/2'>{/* Tables 1,2,3*/}</section>
    </div>
  )
}

export default CharacterSectionPage
