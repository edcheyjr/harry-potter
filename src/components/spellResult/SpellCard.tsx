import React from 'react'
import { Spell } from '@/types.d'

type Props = {
    spell: Spell
}

const SpellCard = ({ spell }: Props) => {
    // console.log('spell Id', spell.id)
    const handleSearchMore = () => {
        if (window) {
            window.open(
                `https://harrypotter.fandom.com/wiki/Special:Search?query=${spell.name}&scope=internal&contentType=&ns%5B0%5D=0&ns%5B1%5D=2900`
            )
        } else {
            console.error(
                'Error-> window must be used avoid ssr for now',
                window
            )
        }
    }
    return (
        <tr
            onClick={handleSearchMore}
            className='cursor-pointer text-slate-400  bg-slate-300/5 hover:bg-slate-300/20 
    border-b border-slate-600 hover:border-red-500 transition duration-300 ease-in-out group'
        >
            {/* name */}
            <td className='pr-3 lg:pr-6 pl-3 md:pl-6 xl:pl-10 py-3.5 font-semibold w-fit'>
                {spell.name}
            </td>

            {/* description */}
            <td className='pr-3 lg:pr-6 pl-3 md:pl-6 xl:pl-10'>
                {spell.description}
            </td>
        </tr>
    )
}

export default SpellCard
