import React from 'react'
import { Houses } from '@/types.d'

type Props = {
    house: Houses
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const DropItem = ({ house, handleClick }: Props) => {
    return (
        <div
            className='text-sm py-2 px-4 text-left font-normal block w-full whitespace-nowrap bg-transparent hover:bg-red-500/50 cursor-pointer'
            onClick={handleClick}
        >
            {house}
        </div>
    )
}

export default DropItem
