'use client'
import React from 'react'
import PrimaryButton from './PrimaryButton'
import { useRouter } from 'next/navigation'

type Props = {}

const NotFound = (props: Props) => {
  const route = useRouter()
  return (
    <div className='w-full h-screen flex justify-center items-center text-xl font-bold tracking-wide text-white flex-col space-y-4'>
      <p className='text-red-500'>Oops, we don&apos;t know that character</p>
      <PrimaryButton onClick={() => route.back()}>Go Back</PrimaryButton>
    </div>
  )
}

export default NotFound
