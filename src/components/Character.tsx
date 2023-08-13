'use client'

import React, { MouseEvent, useState } from 'react'
import Image from 'next/image'
import DefaultImage from 'public/Harry_Potter_owl.jpg'
import { Houses } from 'types.d'
import { houseColors } from 'utils/colors'

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

  return (
    <article
      id={id}
      onClick={moveToCharacterPage}
      aria-label={name || 'unknown'}
      className={`group justify-self-stretch flex flex-col justify-end rounded h-96 transform transtion ease-in-out duration-300 cursor-pointer group-hover:${
        house ? `border-[${houseColors[house].primary}]` : 'border-orange-500 '
      }`}
      style={{
        backgroundImage: `url(${imageSrc || DefaultImage.src})`,
      }}
    >
      <div className='w-full flex bg-bg-dark/10 backdrop-blur-md space-x-2 px-5 py-2'>
        {/* crest */}
        {house && (
          <div className='w-7 h-auto'>
            <Image
              src={require(`/public/crests/${house}.png`)}
              className='h-7 w-7'
              width={20}
              height={20}
              alt={house || 'no house'}
            />
          </div>
        )}
        <div className='flex flex-col space-y-2'>
          <h6
            className={`text-lg lg:text-xl xl:text-xl font-bold text-slate-50 capitalize text-ellipsis group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${
              house
                ? `group-hover:from-primary-${houseColors[house].primary} group-hover:via-[${houseColors[house].primary}] group-hover:to-[${houseColors[house].secondary}]`
                : 'from-red-500 via-orange-500 to-amber-500'
            }]`}
          >
            {name || 'unknown'}
          </h6>
          <p className='text-lg lg:text-xl xl:text-xl text-slate-500 font-medium '>
            {DOB || YOB || 'No DoB'}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
