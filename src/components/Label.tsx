import React from 'react'

type Props = {
  text: string
}

const Label = ({ text }: Props) => {
  return (
    <span className='font-medium h-full text-baseline text-center text-base uppercase text-slate-300 mr-2 tracking-tighter'>
      {text}
    </span>
  )
}

export default Label
