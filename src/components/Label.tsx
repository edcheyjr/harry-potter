import React from 'react'

type Props = {
  text: string
}

const Label = ({ text }: Props) => {
  return (
    <span className='font-semibold h-full text-baseline text-center text-sm md:text-base uppercase text-slate-300 mr-2 tracking-tighter'>
      {text}
    </span>
  )
}

export default Label
