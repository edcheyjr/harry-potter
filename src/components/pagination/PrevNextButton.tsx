import React from 'react'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
}

const PrevNextButton = (props: Props) => {
  return (
    <button
      className='flex items-center space-x-1 justify-center font-semibold text-sm lg:text-base uppercase underline hover:bg-orange-500/50 hover:text-white cursor-pointer text-orange-500 p-0.5 underline-offset-1 hover:decoration-2'
      onClick={props.onClick}
    >
      {props.text && <span>{props.text}</span>}
    </button>
  )
}

export default PrevNextButton
