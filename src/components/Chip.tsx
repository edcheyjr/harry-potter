import React, { HTMLAttributes } from 'react'

type Props = {
  className?: string
  text: string
  style?: Record<string, string>
}

function Chip({ className, text, style }: Props) {
  return (
    <div
      style={style}
      className={`capitalize ${className} rounded-md px-2 py-1 text-center w-fit font-semibold h-fit `}
    >
      {text}
    </div>
  )
}

export default Chip
