'use client'

import React, { MouseEvent } from 'react'
import Image from 'next/image'
import { Houses } from '@/types.d'
import { DEFAULT_IMAGE } from '@utils/constant'
import { useRouter } from 'next/navigation'
import { handleColor } from '@utils/handleColor'

type Props = {
    id: string
    name: string
    DOB?: string
    YOB?: string
    house: Houses
    imageSrc?: string
    hasHouse?: boolean
    isPageLoading: boolean
}
const CharacterCard = ({
    DOB,
    house,
    hasHouse,
    imageSrc,
    id,
    name,
    YOB,
    isPageLoading,
}: Props) => {
    const route = useRouter()
    const moveToCharacterPage = (e: MouseEvent<HTMLElement>) => {
        route.push(`/character/${id}`)
    }
    const borderColor = hasHouse
        ? `hover:${handleColor(house, 'primary', 'border')}`
        : 'hover:border-orange-500'
    return (
        <article
            id={id}
            // title={name}
            onClick={moveToCharacterPage}
            aria-label={name || 'unknown'}
            className={`
      ${
          !isPageLoading
              ? ''
              : 'bg-gradient-to-br from-orange-500/50 from-[8%] via-amber-500/50 via-[18%] to-red-500/50 to-[33%] animate-shining bg-two-one'
      } group bg-cover justify-self-stretch flex flex-col  justify-end rounded h-[30rem] min-[495px]:max-md:h-[36rem] md:h-[30rem] lg:h-96 w-auto transform transtion-all ease-in-out lg:hover:scale-110 duration-300 cursor-pointer border-[1.5px] border-gray-200/20 hover:border-orange-500`}
            style={{
                backgroundImage: `url(${imageSrc || DEFAULT_IMAGE})`,
            }}
        >
            <div className='w-full flex bg-bg-dark/10 backdrop-blur-md px-5 py-2 justify-between items-center'>
                <div className='flex flex-col space-y-1'>
                    <h6
                        className={`text-lg font-bold text-slate-300 capitalize text-ellipsis group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${'group-hover:from-red-500 group-hover:to-amber-500 group-hover:via-orange-500 '}]`}
                    >
                        {name || 'unknown'}
                    </h6>
                    <p className='text-lg text-slate-500 font-medium text-ellipsis'>
                        {DOB || YOB || 'No DoB'}
                    </p>
                </div>
                {/* crest */}
                {hasHouse && (
                    <div className='w-auto h-auto my-auto'>
                        <Image
                            src={require(`/public/crests/${house}.png`)}
                            className='h-auto w-9'
                            title={house}
                            alt={hasHouse ? house : 'no house'}
                        />
                    </div>
                )}
            </div>
        </article>
    )
}

export default CharacterCard
