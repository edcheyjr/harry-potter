'use client'

import React, { MouseEvent, useState } from 'react'
import Image from 'next/image'
import DefaultImage from '/public/Harry_Potter_owl.jpg'
import { Houses } from 'types.d'
import { houseColors } from 'utils/colors'
import { DEFAULT_IMAGE } from 'utils/constant'

type Props = {
  id: string
  name: string
  DOB?: string
  YOB?: string
  house?: Houses
  imageSrc?: string
}

//TODO: move to app-context which will switch depending on the current state of house this depends on hovers over character cards and also on character pages
const CharacterCard = ({ DOB, house, imageSrc, id, name, YOB }: Props) => {
  //switch between colors
  const moveToCharacterPage = (e: MouseEvent<HTMLElement>) => {
    console.log('move to this character')
  }
  const borderColor = house
    ? `hover:border-[${houseColors[house].primary}]`
    : 'hover:border-orange-500'
  return (
    <article
      id={id}
      // title={name}
      onClick={moveToCharacterPage}
      aria-label={name || 'unknown'}
      className={`group bg-cover justify-self-stretch flex flex-col  justify-end rounded h-[30rem]  lg:h-96 w-auto transform transtion-all ease-in-out duration-300 cursor-pointer border-[1.5px] border-gray-200/20 hover:border-orange-500`}
      style={{
        backgroundImage: `url(${imageSrc || DEFAULT_IMAGE})`,
      }}
    >
      <div className='w-full flex bg-bg-dark/10 backdrop-blur-md space-x-2 px-5 py-2 justify-between items-center'>
        <div className='flex flex-col space-y-2'>
          <h6
            className={`text-lg lg:text-xl xl:text-xl font-bold text-slate-300 capitalize text-ellipsis group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${'group-hover:from-red-500 group-hover:to-amber-500 group-hover:via-orange-500 '}]`}
          >
            {name || 'unknown'}
          </h6>
          <p className='text-lg lg:text-xl xl:text-xl text-slate-500 font-medium text-ellipsis'>
            {DOB || YOB || 'No DoB'}
          </p>
        </div>
        {/* crest */}
        {house && (
          <div className='w-auto h-auto my-auto  '>
            <Image
              src={require(`/public/crests/${house}.png`)}
              className='h-auto w-10'
              title={house && house}
              alt={house || 'no house'}
            />
          </div>
        )}
      </div>
    </article>
  )
}

export default CharacterCard
