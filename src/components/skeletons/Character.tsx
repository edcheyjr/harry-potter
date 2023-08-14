import React from 'react'

type Props = {}

const CharacterSkeleton = (props: Props) => {
  return (
    <div className='group bg-cover justify-self-stretch flex flex-col  justify-end rounded h-[30rem]  lg:h-96 w-auto transform transtion-all ease-in-out duration-300 cursor-pointer border border-transparent animate-pulse bg-black'></div>
  )
}

export default CharacterSkeleton
