import React from 'react'

type Props = {}

const PrimaryButton = (props: Props) => {
  return (
    <button className='flex items-center justify-center capitalize py-3 px-6 rounded space-x-2.5 bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 hover:from-red-500 hover:to-red-500 text-white font-bold text-sm lg:text-base xl:text-lg transform transition duration-800 ease-in-out'>
      <span className='w-full h-fit text-center align-middle'>
        See Characters
      </span>
      {/* <DownArrowIcon className='hover:animate-bounce h-6 w-6 fill-current' /> */}
    </button>
  )
}

export default PrimaryButton
