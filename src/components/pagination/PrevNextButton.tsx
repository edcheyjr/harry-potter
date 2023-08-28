import React, { ReactNode } from 'react'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const PrevNextButton = (props: Props) => {
  if (props.leftIcon && props.rightIcon) {
    if (process.env.NODE_ENV !== 'production') {
      throw Error(
        'left and right icon cannot be rendered at the same time no the intention of the design'
      )
    }
    process.env.NODE_ENV == 'production' &&
      console.warn(
        'left and right icon cannot be rendered at the same time no the intention of the design'
      )
  }
  return (
    <button
      className={`rounded flex items-center justify-center font-semibold text-sm lg:text-base uppercase hover:bg-orange-500/50 hover:text-white cursor-pointer text-orange-500 px-1 border-b-2 hover:border ${
        props.rightIcon ? 'border-r' : 'border-l'
      } border  border-orange-500 hover:border-white transition ease-in-out duration-300`}
      onClick={props.onClick}
    >
      {props.rightIcon ? null : props.leftIcon}
      {props.text && (
        <span
          className={`${props.rightIcon ? 'pl-1' : 'pr-1'} max-sm:hidden block`}
        >
          {props.text}
        </span>
      )}
      {props.rightIcon}
    </button>
  )
}

export default PrevNextButton
