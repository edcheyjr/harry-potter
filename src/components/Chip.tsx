import React from 'react'

type Props = {
  className: string
  text: string
}

function Chip({ className, text }: Props) {
  return (
    <div
      className={`font-medium capitalize ${className} rounded-md px-2 py-1 text-center w-fit h-fit`}
    >
      {text}
    </div>
  )
}

export default Chip
