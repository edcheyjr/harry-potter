'use client' //use client directive
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DEFAULT_IMAGE } from 'utils/constant'
import NotFound from 'components/NotFound'
import { fetchACharacter } from '../../../service/api'
import { Character, Houses } from 'types.d'
import Loading from 'components/Loading'
import { houseColors } from 'utils/colors'
import { resolveHouseNames } from 'utils/resolveHouseNames'
type Props = {}

export default function CharacterPage({}: Props) {
  const [bgColor, setBGColor] = useState<string>('bg-orange-500')
  const [data, setData] = useState<Character | null>(null)
  const params = useParams()
  const [isLoading, setLoading] = useState(true)

  //fetch data
  useEffect(() => {
    const handleFetchCharacter = async () => {
      // get id from url
      let id = params?.id
      if (typeof id !== 'string') {
        id = id[0]
      }
      const result = await fetchACharacter(id)
      setData(result[0])
      setLoading(false)
    }
    handleFetchCharacter()
  }, [])

  if (data?.house) {
    setBGColor(
      `bg-[${houseColors[
        resolveHouseNames(data.house) ?? Houses.GRYFFINDOR
      ].primary
        .trim()
        .toLocaleLowerCase()}]`
    )
  }

  if (isLoading)
    return (
      <div className='w-full h-screen container py- mx-auto max-w-7xl px-10 flex justify-center'>
        <Loading />
      </div>
    )

  if (!data) return <NotFound />
  return (
    <main className='w-full h-full container mx-auto max-w-7xl px-10 '>
      <div className='flex justify-center pt-24'>
        <section className='w-1/2 flex flex-col justify-evenly px-2'>
          {/* FIXME possible error relating to this https://github.com/vercel/next.js/issues/52116 resolving to use normal image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data?.image || DEFAULT_IMAGE}
            alt={'NO NAME'}
            className={`h-1/2 w-auto border-t-2 border-b-[5px] border-r-2 border-l-2 bg-clip-border ${bgColor}`}
          />
          <div className=''></div>
        </section>
        {/* Character Details */}
        <section className='w-1/2'>{/* Tables 1,2,3*/}</section>
      </div>
    </main>
  )
}
